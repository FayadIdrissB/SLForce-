using System;
namespace slf_backend.Models
{
	public class Message
	{
        // Attribut
        public int IdMessage { get; set; }
        public string IdStreamChat { get; set; } = string.Empty;
        public DateTime SendDate { get; set; }

        // foreign Key
        public int SenderId { get; set; }
        public User Sender { get; set; } = null!;

        public int RecipientId { get; set; }
        public User Recipient { get; set; } = null!;
	}
}
