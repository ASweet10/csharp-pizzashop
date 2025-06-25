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
    <div className="h-[100vh] text-white flex items-center justify-center bg-cover" style={{ backgroundImage: "url('./charcoal.jpg')" }}>
      <div className='flex flex-col pb-40 px-6 w-full md:w-1/2'>
        <h1 className="text-5xl font-heading mb-4 text-center">Your Order</h1>
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <div className='flex items-center gap-6'>
              <span className='text-2xl font-body'>{item.name} x {item.quantity}</span>
              {/* <img src={item.imgUrl} className='h-28'/> */}
            </div>
            <span className='text-2xl font-body'>${(item.price * item.quantity).toFixed(0)}</span>
          </div>
        ))}
        <hr className="my-4" />
        <div className='flex flex-col justify-center text-center items-center'>
          <p className="text-xl">Total: ${total.toFixed(0)}</p>
          <p className='text-xl'>Prep Time: {prepTime} mins</p>
          <p className='text-xl'>Delivery Time: {deliveryTime} mins</p>
          <button
            onClick={() => handlePlaceOrder()}
            className="bg-blue-600 text-white text-2xl font-body px-4 py-2 rounded mt-4 cursor-pointer w-1/3"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage