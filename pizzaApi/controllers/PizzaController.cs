using Microsoft.AspNetCore.Mvc;
using PizzaApi.Data;
using Microsoft.EntityFrameworkCore;

namespace PizzaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly PizzaContext _context;

        public PizzaController(PizzaContext context) // Constructor dependency injection
        {
            _context = context;
        }

        // Create HTTP GET route
        [HttpGet]
        public async Task<IActionResult> GetPizzas()
        {
            var pizzas = await _context.Pizzas.ToListAsync(); // GET all pizzas
            return Ok(pizzas);
        }
    }
}