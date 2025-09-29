using System;
namespace slf_backend.Models
{
	public class Admin
	{
        // Attribut
        public int IdAdmin { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

        // foreign Key collection
        public ICollection<User> Users { get; set; } = new List<User>();
	}
}

