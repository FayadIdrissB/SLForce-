using System;
namespace slf_backend.Models
{
	public class SubscriptionPaypal
	{
        // Attribut
        public int IdSubscriptionPaypal { get; set; }
        public string IdPaypal { get; set; } = string.Empty;
        public DateTime StartSubscription { get; set; }
        public DateTime EndSubscription { get; set; }
        public string StatusSubscription { get; set; } = string.Empty;
        public decimal Price { get; set; }

        /// foreign Key
        public int IdUserAthlete { get; set; }
        public UserAthlete UserAthlete { get; set; } = null!;
	}
}

