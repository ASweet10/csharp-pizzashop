using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace pizzaApi.Migrations
{
    /// <inheritdoc />
    public partial class AddIngredientsToPizza : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Ingredients",
                table: "Pizzas",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ingredients",
                table: "Pizzas");
        }
    }
}
