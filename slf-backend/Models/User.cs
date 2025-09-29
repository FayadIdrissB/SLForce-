using System;
namespace slf_backend.Models
{
	public class User : Microsoft.AspNetCore.Identity.IdentityUser
	{
        // Attribut
        public int IdUser { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public bool Role { get; set; } 

        // foreign Key
        public int? IdAdmin { get; set; }
        public Admin? Admin { get; set; }

        // ✉️ common message relationship
        public ICollection<Message> MessagesSent { get; set; } = new List<Message>();
        public ICollection<Message> MessagesReceived { get; set; } = new List<Message>();
	}
}
