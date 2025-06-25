using Microsoft.AspNetCore.Mvc;
using PizzaApi.Data;
using Microsoft.EntityFrameworkCore;

namespace PizzaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppetizerController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AppetizerController(AppDbContext context) // Constructor dependency injection
        {
            _context = context;
        }

        // Create HTTP GET route
        [HttpGet]
        public async Task<IActionResult> GetAppetizers()
        {
            var appetizers = await _context.Appetizers.ToListAsync(); // GET all
            return Ok(appetizers);
        }
    }
}