using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace slf_backend.Controllers
{
    [ApiController]

    [Route("api/[controller]")]
    public class PaymentController : ControllerBase 
    {

        // 💳 PARTIE PAYPAL 
        [HttpPost("paypal")]
        public async Task<IActionResult> CreatePaypalPayment([FromBody] PaypalPaymentDto dto)
        {
           // Vérifie que l’athlète et le coach ont des identifiants valides
            if (dto.AthleteId <= 0 || dto.CoachId <= 0)
            {
                return BadRequest(new { message = "Les identifiants sont invalides." });
            }
         
            //For now, we simulate a network delay
            await Task.Delay(500);

            // Here we will add the real Paypal SDK later
            var paymentResponse = new
            {
                success = true,                          
                message = "Paiement PayPal créé avec succès",
                athleteId = dto.AthleteId,                
                coachId = dto.CoachId,                    
                amount = dto.Amount,                      
                transactionId = Guid.NewGuid().ToString() 
            };

            return Ok(paymentResponse);
        }


        // 💰 PARTIE STRIPE 
        [HttpPost("stripe")]
        public async Task<IActionResult> CreateStripePayment([FromBody] StripePaymentDto dto)
        {
            if (dto.CoachId <= 0)
            {
                
                return BadRequest(new { message = "L'identifiant du coach est invalide." });
            }

            //For now, we simulate a network delay
            await Task.Delay(500);

            // Here we will add the real Paypal SDK later
            var stripeResponse = new
            {
                success = true,                            
                message = "Paiement Stripe créé avec succès", 
                coachId = dto.CoachId,                    
                amount = dto.Amount,                       
                sessionId = Guid.NewGuid().ToString()      
            };
            return Ok(stripeResponse);
        }
    }



    // 📦 DTOs

    // For Paypal
    public class PaypalPaymentDto
    {
        public int AthleteId { get; set; }   
        public int CoachId { get; set; }     
        public decimal Amount { get; set; }  
    }

    // For Stripe
    public class StripePaymentDto
    {
        public int CoachId { get; set; }     
        public decimal Amount { get; set; }  
    }
}