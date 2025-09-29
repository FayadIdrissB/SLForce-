using Microsoft.EntityFrameworkCore;
using slf_backend.Models;

namespace slf_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // ---- Tables ---- //
        public DbSet<Admin> Admins { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<UserAthlete> UserAthletes { get; set; } = null!;
        public DbSet<UserCoach> UserCoachs { get; set; } = null!;
        public DbSet<Message> Messages { get; set; } = null!;
        public DbSet<SubscriptionPaypal> SubscriptionsPaypal { get; set; } = null!;
        public DbSet<SubscriptionStripe> SubscriptionsStripe { get; set; } = null!;
        public DbSet<CoachPaymentAccount> CoachPaymentAccounts { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // ----- Héritage ----- //
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<UserAthlete>().ToTable("UserAthletes");
            modelBuilder.Entity<UserCoach>().ToTable("UserCoachs");

            // ----- Messages ----- //
            modelBuilder.Entity<Message>()
                .HasOne(m => m.Sender)
                .WithMany(u => u.MessagesSent)
                .HasForeignKey(m => m.SenderId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Message>()
                .HasOne(m => m.Recipient)
                .WithMany(u => u.MessagesReceived)
                .HasForeignKey(m => m.RecipientId)
                .OnDelete(DeleteBehavior.Restrict);

            // ----- Subscriptions ----- //
            modelBuilder.Entity<SubscriptionPaypal>()
                .HasOne(s => s.UserAthlete)
                .WithMany(a => a.SubscriptionsPaypal)
                .HasForeignKey(s => s.IdUserAthlete);

            modelBuilder.Entity<SubscriptionStripe>()
                .HasOne(s => s.UserCoach)
                .WithMany(c => c.SubscriptionsStripe)
                .HasForeignKey(s => s.IdUserCoach);

            // ----- Coach Payment Account ----- //
            modelBuilder.Entity<CoachPaymentAccount>()
                .HasOne(p => p.UserCoach)
                .WithMany(c => c.PaymentAccounts)
                .HasForeignKey(s => s.IdUserCoach);
        }
    }
}