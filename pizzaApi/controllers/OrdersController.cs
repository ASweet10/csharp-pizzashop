using Microsoft.AspNetCore.Mvc;
using PizzaApi.Data;

namespace PizzaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrdersController(AppDbContext context) // Constructor dependency injection
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            order.OrderDate = DateTime.UtcNow;
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            var emailService = new EmailService();
            emailService.SendOrderConfirmation(order.Email, "Thank you. Your order has been received.");

            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }
    }
}