using System;
using System.ComponentModel.DataAnnotations;

namespace slf_backend.Models
{
	public class Admin
	{
        // Attribut
        [Key]
        public int IdAdmin { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

        // foreign Key collection
        public ICollection<User> Users { get; set; } = new List<User>();
	}
}

