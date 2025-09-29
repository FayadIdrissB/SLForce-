using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace slf_backend.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    IdAdmin = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.IdAdmin);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    Role = table.Column<bool>(type: "INTEGER", nullable: false),
                    IdAdmin = table.Column<int>(type: "INTEGER", nullable: true),
                    AdminIdAdmin = table.Column<int>(type: "INTEGER", nullable: true),
                    UserName = table.Column<string>(type: "TEXT", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "TEXT", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: true),
                    SecurityStamp = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Admins_AdminIdAdmin",
                        column: x => x.AdminIdAdmin,
                        principalTable: "Admins",
                        principalColumn: "IdAdmin");
                });

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    IdMessage = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IdStreamChat = table.Column<string>(type: "TEXT", nullable: false),
                    SendDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    SenderId = table.Column<string>(type: "TEXT", nullable: false),
                    RecipientId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.IdMessage);
                    table.ForeignKey(
                        name: "FK_Messages_Users_RecipientId",
                        column: x => x.RecipientId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Messages_Users_SenderId",
                        column: x => x.SenderId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserAthletes",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    WeightCategory = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserAthletes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserAthletes_Users_Id",
                        column: x => x.Id,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserCoachs",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    MonthPrice = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserCoachs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserCoachs_Users_Id",
                        column: x => x.Id,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SubscriptionsPaypal",
                columns: table => new
                {
                    IdSubscriptionPaypal = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IdPaypal = table.Column<string>(type: "TEXT", nullable: false),
                    StartSubscription = table.Column<DateTime>(type: "TEXT", nullable: false),
                    EndSubscription = table.Column<DateTime>(type: "TEXT", nullable: false),
                    StatusSubscription = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<decimal>(type: "TEXT", nullable: false),
                    IdUserAthlete = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubscriptionsPaypal", x => x.IdSubscriptionPaypal);
                    table.ForeignKey(
                        name: "FK_SubscriptionsPaypal_UserAthletes_IdUserAthlete",
                        column: x => x.IdUserAthlete,
                        principalTable: "UserAthletes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SubscriptionsStripe",
                columns: table => new
                {
                    IdSubscriptionStripe = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IdStripe = table.Column<string>(type: "TEXT", nullable: false),
                    StartSubscription = table.Column<DateTime>(type: "TEXT", nullable: false),
                    EndSubscription = table.Column<DateTime>(type: "TEXT", nullable: false),
                    StatusSubscription = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<decimal>(type: "TEXT", nullable: false),
                    IdUserCoach = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubscriptionsStripe", x => x.IdSubscriptionStripe);
                    table.ForeignKey(
                        name: "FK_SubscriptionsStripe_UserCoachs_IdUserCoach",
                        column: x => x.IdUserCoach,
                        principalTable: "UserCoachs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoachPaymentAccounts",
                columns: table => new
                {
                    IdCoachPaymentAccount = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PaymentAccountId = table.Column<string>(type: "TEXT", nullable: false),
                    AccountEmail = table.Column<string>(type: "TEXT", nullable: false),
                    StatusAccount = table.Column<string>(type: "TEXT", nullable: false),
                    IdUserCoach = table.Column<string>(type: "TEXT", nullable: false),
                    IdSubscriptionPaypal = table.Column<int>(type: "INTEGER", nullable: true),
                    SubscriptionPaypalIdSubscriptionPaypal = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoachPaymentAccounts", x => x.IdCoachPaymentAccount);
                    table.ForeignKey(
                        name: "FK_CoachPaymentAccounts_SubscriptionsPaypal_SubscriptionPaypalIdSubscriptionPaypal",
                        column: x => x.SubscriptionPaypalIdSubscriptionPaypal,
                        principalTable: "SubscriptionsPaypal",
                        principalColumn: "IdSubscriptionPaypal");
                    table.ForeignKey(
                        name: "FK_CoachPaymentAccounts_UserCoachs_IdUserCoach",
                        column: x => x.IdUserCoach,
                        principalTable: "UserCoachs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CoachPaymentAccounts_IdUserCoach",
                table: "CoachPaymentAccounts",
                column: "IdUserCoach");

            migrationBuilder.CreateIndex(
                name: "IX_CoachPaymentAccounts_SubscriptionPaypalIdSubscriptionPaypal",
                table: "CoachPaymentAccounts",
                column: "SubscriptionPaypalIdSubscriptionPaypal");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_RecipientId",
                table: "Messages",
                column: "RecipientId");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_SenderId",
                table: "Messages",
                column: "SenderId");

            migrationBuilder.CreateIndex(
                name: "IX_SubscriptionsPaypal_IdUserAthlete",
                table: "SubscriptionsPaypal",
                column: "IdUserAthlete");

            migrationBuilder.CreateIndex(
                name: "IX_SubscriptionsStripe_IdUserCoach",
                table: "SubscriptionsStripe",
                column: "IdUserCoach");

            migrationBuilder.CreateIndex(
                name: "IX_Users_AdminIdAdmin",
                table: "Users",
                column: "AdminIdAdmin");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CoachPaymentAccounts");

            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.DropTable(
                name: "SubscriptionsStripe");

            migrationBuilder.DropTable(
                name: "SubscriptionsPaypal");

            migrationBuilder.DropTable(
                name: "UserCoachs");

            migrationBuilder.DropTable(
                name: "UserAthletes");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Admins");
        }
    }
}
