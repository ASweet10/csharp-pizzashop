import { useNavigate } from 'react-router-dom'
import { useCart } from '../components/CartContext'
import { useEffect, useState } from 'react'

function CheckoutPage() {
  const { cartItems, clearCart } = useCart()
  const [prepTime, setPrepTime] = useState(0)
  const [deliveryTime, setDeliveryTime] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setPrepTime(Math.floor(Math.random() * 10) + 10) // 10-20 mins
    setDeliveryTime(Math.floor(Math.random() * 20) + 20) // 20-40 mins
  }, [])

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePlaceOrder = async () => {
    const order = {
        customerName: "Guest",
        email: "guest@example.com",
        itemsJson: JSON.stringify(cartItems),
        totalAmount: total
    };

    try {
        const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
        });

        if (!response.ok) {
        throw new Error("Failed to place order");
        }

        alert("Order placed!");
        clearCart();
        navigate("/thankyou");
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Your Order</h1>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name} x {item.quantity}</span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}
      <hr className="my-4" />
      <p className="text-lg">Total: ${total}</p>
      <p>Prep Time: {prepTime} mins</p>
      <p>Delivery Time: {deliveryTime} mins</p>
      <button
        onClick={handlePlaceOrder}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Place Order
      </button>
    </div>
  );
}

export default CheckoutPage