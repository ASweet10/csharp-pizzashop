using Microsoft.EntityFrameworkCore;
using PizzaApi.Models;

namespace PizzaApi.Data
{
    public class PizzaContext : DbContext
    {
        public PizzaContext(DbContextOptions<PizzaContext> options)
            : base(options)
        {
        }

        public DbSet<Pizza> Pizzas { get; set; }  // Map to "Pizzas" table so controllers can query/update it
    }
}
