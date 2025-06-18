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
        const response = await fetch("http://localhost:5230/api/orders", {
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
    <div className="bg-gray-600 h-[100vh] text-white flex items-center justify-center">
      <div className='flex flex-col pb-40 px-6 w-full md:w-1/2'>
        <h1 className="text-3xl mb-4">Your Order</h1>
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr className="my-4" />
        <p className="text-lg">Total: ${total.toFixed(2)}</p>
        <p>Prep Time: {prepTime} mins</p>
        <p>Delivery Time: {deliveryTime} mins</p>
        <button
          onClick={() => handlePlaceOrder()}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 cursor-pointer"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage