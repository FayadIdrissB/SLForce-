using System;
using System.ComponentModel.DataAnnotations;

namespace slf_backend.Models
{
	public class SubscriptionPaypal
	{
        // Attribut
        [Key]
        public int IdSubscriptionPaypal { get; set; }
        public string IdPaypal { get; set; } = string.Empty;
        public DateTime StartSubscription { get; set; }
        public DateTime EndSubscription { get; set; }
        public string StatusSubscription { get; set; } = string.Empty;
        public decimal Price { get; set; }

        /// foreign Key
        public string IdUserAthlete { get; set; } = string.Empty;
        public UserAthlete UserAthlete { get; set; } = null!;
	}
}

