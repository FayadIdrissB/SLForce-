using AutoMapper;
using Microsoft.EntityFrameworkCore;
using slf_backend.Data;

var builder = WebApplication.CreateBuilder(args);


// 📦 Configuration du contexte de base de données (SQLite)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// ⚙️ Ajout des services essentiels
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Contrôleurs de l’API
builder.Services.AddControllers();

// AutoMapper pour le mapping DTOs ↔️ Models
builder.Services.AddAutoMapper(typeof(Program));


var app = builder.Build();


// 🚀 Configuration du pipeline HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
