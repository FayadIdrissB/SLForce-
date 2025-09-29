using System;
namespace slf_backend.Models
{
	public class SubscriptionStripe
	{
        // Attribut
        public int IdSubscriptionStripe { get; set; }
        public string IdStripe { get; set; } = string.Empty;
        public DateTime StartSubscription { get; set; }
        public DateTime EndSubscription { get; set; }
        public string StatusSubscription { get; set; } = string.Empty;
        public decimal Price { get; set; }

        // foreign Key
        public int IdUserCoach { get; set; }
        public UserCoach UserCoach { get; set; } = null!;
	}
}

