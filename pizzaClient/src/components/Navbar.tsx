import { useCart } from './CartContext'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import pizzaImg from '/pizza.png'

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity?: number;
}

function Navbar() {
  const { cartItems, removeFromCart } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const [ cartOpen, setCartOpen ] = useState(false)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleRemoveFromCart = (item: CartItem) => {
      removeFromCart(item.id)
  }
  return (
    <nav className="fixed justify-between top-0 bg-transparent px-8 md:px-20 h-28 z-50 w-[100vw]">
      <div className='flex items-center justify-between pt-4'>
        <div className='flex items-center md:gap-3'>
          <Link to="/" className={`text-4xl px-4 py-2 font-heading ${location.pathname === "/" ? "text-yellow-400" : "text-white"}`}>Tony's Pizza</Link>
          {/* <img src={pizzaImg} alt="" className='animate-spin animate-duration-2000 animate-repeat-infinite h-20 w-20' id="spinner"/> */}
          <Link to="/menu" className={`text-4xl px-4 py-2 font-heading ${location.pathname === "/menu" ? "text-yellow-400" : "text-white"}`}>Menu</Link>
        </div>
        <div className="relative">
          <button onClick={() => setCartOpen(!cartOpen)} className="relative items-center flex gap-2 text-2xl cursor-pointer text-gray-200">
            <FaShoppingCart /> ({totalItems})
          </button>

          {cartOpen && (
            <div className="absolute top-10 right-0 bg-white p-3 shadow-lg border rounded w-80 md:w-96 z-50">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex mb-2 gap-2 w-full">
                    <div className='flex flex-row w-full items-center gap-4'>
                      <span className='text-lg font-bold'>{item.quantity} {item.name}</span>
                      <div className='flex items-center gap-4'>
                        <span className=''>${(item.quantity * item.price).toFixed(2)}</span>
                        <button onClick={() => handleRemoveFromCart(item)}
                          className='bg-red-600 text-white px-4 py-2 rounded text-xl h-12 cursor-pointer'
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
              <hr className="my-2" />
              <button
                onClick={() => {
                  setCartOpen(false);
                  navigate('/checkout');
                }}
                className="bg-green-600 text-white px-4 py-2 rounded text-lg mt-2 cursor-pointer"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>

    </nav>
  );
}

export default Navbar