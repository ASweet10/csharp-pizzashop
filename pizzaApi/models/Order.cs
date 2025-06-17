public class Order
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public required string Email { get; set; }
    public required string ItemsJson { get; set; }  // store cart as JSON string
    public decimal TotalAmount { get; set; }
}