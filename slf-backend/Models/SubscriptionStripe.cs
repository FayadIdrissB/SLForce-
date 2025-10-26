using System;
using System.ComponentModel.DataAnnotations;

namespace slf_backend.Models
{
	public class SubscriptionStripe
	{
        // Attribut
        [Key]
        public int IdSubscriptionStripe { get; set; }
        public string IdStripe { get; set; } = string.Empty;
        public DateTime StartSubscription { get; set; }
        public DateTime EndSubscription { get; set; }
        public string StatusSubscription { get; set; } = string.Empty;
        public decimal Price { get; set; }

        // foreign Key
        public string IdUserCoach { get; set; } = string.Empty;
        public UserCoach UserCoach { get; set; } = null!;
	}
}

