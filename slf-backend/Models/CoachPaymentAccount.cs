using System;
using System.ComponentModel.DataAnnotations;

namespace slf_backend.Models
{
	public class CoachPaymentAccount
    {
        // Attribut
        [Key]
        public int IdCoachPaymentAccount { get; set; }
        public string PaymentAccountId { get; set; } = string.Empty;
        public string AccountEmail { get; set; } = string.Empty;
        public string StatusAccount { get; set; } = string.Empty;

        // foreign Key
        public string IdUserCoach { get; set; } = string.Empty;
        public UserCoach UserCoach { get; set; } = null!;

        // foreign Key SubscriptionPaypal
        public int? IdSubscriptionPaypal { get; set; }
        public SubscriptionPaypal? SubscriptionPaypal { get; set; }
	}
}

