using System;
using System.ComponentModel.DataAnnotations;

namespace slf_backend.Models
{
	public class Message
	{
        // Attribut
        [Key]
        public int IdMessage { get; set; }
        public string IdStreamChat { get; set; } = string.Empty;
        public DateTime SendDate { get; set; }

        // foreign Key
        public string SenderId { get; set; } = string.Empty;
        public User Sender { get; set; } = null!;

        public string RecipientId { get; set; } = string.Empty;
        public User Recipient { get; set; } = null!;
	}
}
