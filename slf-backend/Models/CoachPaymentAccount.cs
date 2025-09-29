using System;
namespace slf_backend.Models
{
	public class CoachPaymentAccount
    {
        // Attribut
        public int IdCoachPaymentAccount { get; set; }
        public string PaymentAccountId { get; set; } = string.Empty;
        public string AccountEmail { get; set; } = string.Empty;
        public string StatusAccount { get; set; } = string.Empty;

        // foreign Key
        public int IdUserCoach { get; set; }
        public UserCoach UserCoach { get; set; } = null!;

        // foreign Key SubscriptionPaypal
        public int? IdSubscriptionPaypal { get; set; }
        public SubscriptionPaypal? SubscriptionPaypal { get; set; }
	}
}

