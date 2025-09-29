using System;

namespace slf_backend.Models
{
	public class UserCoach : User
	{
        public decimal MonthPrice { get; set; }

        // foreign Key collection
        public ICollection<SubscriptionStripe> SubscriptionsStripe { get; set; } = new List<SubscriptionStripe>();
        public ICollection<CoachPaymentAccount> PaymentAccounts { get; set; } = new List<CoachPaymentAccount>();
	}
}
