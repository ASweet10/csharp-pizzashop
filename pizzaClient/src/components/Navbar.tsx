import { useCart } from './CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"

function Navbar() {
  const { cartItems } = useCart()
  const navigate = useNavigate()
  const [ cartOpen, setCartOpen ] = useState(false)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    setCartOpen(false) // Close popup when route changes
  }, [location])

  return (
    <nav className="flex justify-between p-4">
      <Link to="/">Tony Boloney's</Link>
      <div className="relative">
        <button onClick={() => setCartOpen(!cartOpen)} className="relative items-center flex gap-2 text-2xl cursor-pointer">
          <FaShoppingCart /> ({totalItems})
        </button>

        {cartOpen && (
          <div className="absolute top-10 right-0 bg-white p-4 shadow-lg border rounded w-64 z-50">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))
            )}
            <hr className="my-2" />
            <button
              onClick={() => navigate('/checkout')}
              className="bg-green-500 text-white px-2 py-1 rounded text-sm mt-2"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar