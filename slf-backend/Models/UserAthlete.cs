using System;
using FirebaseAdmin.Messaging;

namespace slf_backend.Models
{
	public class UserAthlete : User
	{
        // Attribut
        public string WeightCategory { get; set; } = string.Empty;

        // foreign Key collection
        public ICollection<SubscriptionPaypal> SubscriptionsPaypal { get; set; } = new List<SubscriptionPaypal>();
	}
}
