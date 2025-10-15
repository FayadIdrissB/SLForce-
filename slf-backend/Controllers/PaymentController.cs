using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PayPalCheckoutSdk.Core;   
using PayPalCheckoutSdk.Orders; 
using PayPalHttp;               
using System.Collections.Generic;
using System.Threading.Tasks;


namespace slf_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PaymentController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        // 💳 PAYPAL SECTION: Creating a PayPal Sandbox Order
        [Authorize(Roles = "Coach")]
        [HttpPost("paypal")]
        public async Task<IActionResult> CreatePaypalPayment([FromBody] PaypalPaymentDto dto)
        {
            if (dto.AthleteId <= 0 || dto.CoachId <= 0)
                return BadRequest(new { message = "Les identifiants sont invalides." });

            // 1️⃣ Reading PayPal credentials from appsettings.json
            var clientId = _configuration["PayPal:ClientId"];
            var clientSecret = _configuration["PayPal:ClientSecret"];
            var mode = _configuration["PayPal:Mode"];

            // 2️⃣ Creation of the sandbox or live environment
            PayPalEnvironment environment = mode == "live"
                ? new LiveEnvironment(clientId, clientSecret)
                : new SandboxEnvironment(clientId, clientSecret);

            var client = new PayPalHttpClient(environment);
            var orderRequest = new OrderRequest()
            {
                CheckoutPaymentIntent = "CAPTURE",
                PurchaseUnits = new List<PurchaseUnitRequest>
                {
                    new PurchaseUnitRequest
                    {
                        AmountWithBreakdown = new AmountWithBreakdown
                        {
                            CurrencyCode = "USD",
                            Value = dto.Amount.ToString("F2")
                        },
                        Description = $"Paiement de l'athlète {dto.AthleteId} au coach {dto.CoachId}"
                    }
                },
                ApplicationContext = new ApplicationContext
                {
                    ReturnUrl = "https://localhost:5001/api/payment/success",
                    CancelUrl = "https://localhost:5001/api/payment/cancel"
                }
            };

            var request = new OrdersCreateRequest();
            request.Prefer("return=representation");
            request.RequestBody(orderRequest);

            try
            {
                var response = await client.Execute(request);
                var result = response.Result<Order>();

                return Ok(new
                {
                    success = true,
                    orderId = result.Id,
                    status = result.Status,
                    approvalUrl = result.Links.Find(l => l.Rel == "approve")?.Href
                });
            }
            catch (HttpException ex)
            {
                return StatusCode(500, new
                {
                    success = false,
                    message = "Erreur PayPal",
                    details = ex.Message
                });
            }
        }


        // 💳 PAYPAL SECTION: redirections after payment
        [Authorize(Roles = "Coach,Athlete")]
        [HttpGet("success")]
        public IActionResult PaymentSuccess([FromQuery] string token)
        {
            return Ok(new { success = true, message = "Paiement PayPal validé ✅", token });
        }
        
        [Authorize(Roles = "Coach,Athlete")]
        [HttpGet("cancel")]
        public IActionResult PaymentCancelled()
        {
            return Ok(new { success = false, message = "Paiement PayPal annulé ❌" });
        }


        // 💰 STRIPE PART (simulated for now)
        [Authorize(Roles = "Coach")]
        [HttpPost("stripe")]
        public async Task<IActionResult> CreateStripePayment([FromBody] StripePaymentDto dto)
        {
            if (dto.CoachId <= 0)
                return BadRequest(new { message = "L'identifiant du coach est invalide." });

            await Task.Delay(500); 

            var stripeResponse = new
            {
                success = true,
                message = "Paiement Stripe créé avec succès (simulation)",
                coachId = dto.CoachId,
                amount = dto.Amount,
                sessionId = Guid.NewGuid().ToString()
            };

            return Ok(stripeResponse);
        }
    }


    // 📦 DTOs for payments
    public class PaypalPaymentDto
    {
        public int AthleteId { get; set; }
        public int CoachId { get; set; }
        public decimal Amount { get; set; }
    }

    public class StripePaymentDto
    {
        public int CoachId { get; set; }
        public decimal Amount { get; set; }
    }
}