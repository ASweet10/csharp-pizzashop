import { useCart } from './CartContext'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import pizzaImg from '/pizza.png'

function Navbar() {
  const { cartItems } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const [ cartOpen, setCartOpen ] = useState(false)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="fixed justify-between top-0 bg-transparent px-8 md:px-20 h-28 z-50 w-[100vw]">
      <div className='flex items-center justify-between pt-4'>
        <div className='flex items-center md:gap-3'>
          <Link to="/" className={`text-4xl px-4 py-2 font-heading ${location.pathname === "/" ? "text-yellow-400" : "text-white"}`}>Tony Boloney's</Link>
          <img src={pizzaImg} alt="" className='animate-spin animate-duration-2000 animate-repeat-infinite h-20 w-20' id="spinner"/>
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
                  <div key={item.id} className="flex mb-2 gap-8">
                    <div className='flex flex-col w-40'>
                      <span className='text-lg font-bold'>{item.quantity} {item.name}</span>
                      <span className=''>${(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                    <img src={item.imgUrl} className='h-28 w-32'/>
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