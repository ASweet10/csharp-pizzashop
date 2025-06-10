namespace PizzaApi.Models
{
    public class Pizza
    {
        public int Id { get; set; }  // Primary Key in EF
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
    }
}