import { useCart } from './CartContext'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import type { CartItem } from "../types"
import { RiDeleteBin6Line } from "react-icons/ri"

function Navbar() {
  const { cartItems, removeFromCart } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const [ cartOpen, setCartOpen ] = useState(false)

  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalItemPrice = cartItems.reduce((sum, item) => { return sum + (item.quantity * item.price); }, 0);

  const handleRemoveFromCart = (item: CartItem) => {
    removeFromCart(item)
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
            <FaShoppingCart /> ({totalItemCount})
          </button>

          {cartOpen && (
            <div className="absolute top-10 right-0 bg-white p-3 shadow-lg border rounded w-80 md:w-96 z-50">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  { cartItems.map(item => (
                    <div key={`${item.type}-${item.id}`} className="flex mb-2 gap-2 w-full">
                      <div className='flex flex-row w-full items-center'>
                        <button onClick={() => handleRemoveFromCart(item)} className='bg-transparent px-4 py-2 rounded text-xl h-12 cursor-pointer'>
                          <RiDeleteBin6Line className='text-red-600' />
                        </button>
                        <span className='text-lg font-bold w-60'>{item.name} ({item.quantity})</span>
                        <div className='flex items-center gap-1'>
                        </div>
                        <span className='text-lg font-semibold mr-2'>${(item.quantity * item.price).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-4 justify-end text-xl font-bold m-3">
                    <span>Total:</span>
                    <span>${totalItemPrice.toFixed(2)}</span>
                  </div>

                  <hr className="my-2" />

                  <div className='flex justify-center'>
                    <button onClick={() => { setCartOpen(false); navigate('/checkout'); }}
                      className="justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded text-xl font-semibold mt-2 cursor-pointer w-40"
                    >
                      Checkout
                    </button>
                  </div>

                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar