namespace PizzaApi.Models
{
    public class Appetizer
    {
        public int Id { get; set; }  // Primary Key in EF
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Ingredients { get; set; } = string.Empty;
    }
}