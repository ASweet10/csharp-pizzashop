using Microsoft.EntityFrameworkCore;
using PizzaApi.Models;

namespace PizzaApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Pizza> Pizzas { get; set; }  // Map to "Pizzas" table so controllers can query/update it
        public DbSet<Order> Orders { get; set; }
    }
}
