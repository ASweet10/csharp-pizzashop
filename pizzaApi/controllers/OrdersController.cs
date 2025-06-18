using Microsoft.AspNetCore.Mvc;
using PizzaApi.Data;
using PizzaApi.Services;

namespace PizzaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly EmailService _emailService;

        public OrdersController(AppDbContext context, EmailService emailService) // Constructor dependency injection
        {
            _context = context;
            _emailService = emailService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }
            return order;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            order.OrderDate = DateTime.UtcNow;
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            _emailService.SendOrderConfirmation(order.Email, order.ItemsJson);

            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }
    }
}