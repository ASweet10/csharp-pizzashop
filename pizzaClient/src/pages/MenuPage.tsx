import { useEffect, useState } from 'react'
import { useCart } from '../components/CartContext'
const API_URL = import.meta.env.VITE_API_URL;
import type { Pizza, Appetizer } from "../types"
import { FaShoppingCart } from "react-icons/fa"

function MenuPage() {
    const { addToCart } = useCart()
    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [appetizers, setAppetizers] = useState<Appetizer[]>([])
    const handleAddToCart = (item: Pizza | Appetizer, type: 'pizza' | 'appetizer') => {
        addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            type,
            quantity: 1
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [pizzaRes, appetizerRes] = await Promise.all([
                    fetch(`${API_URL}/api/pizza`),
                    fetch(`${API_URL}/api/appetizer`)
                ])

                if (!pizzaRes.ok || !appetizerRes.ok) {
                    throw new Error(`Pizza status: ${pizzaRes.status}, Appetizer status: ${appetizerRes.status}`)
                }
                const pizzaData: Pizza[] = await pizzaRes.json()
                const appetizerData: Appetizer[] = await appetizerRes.json()

                console.log(pizzaData)
                console.log(appetizerData)
                setPizzas(pizzaData)
                setAppetizers(appetizerData)
            }
            catch (error) {
                console.error('Error: ', error)
            }
        }

        fetchData()
    }, [])
    return (
        <div className="min-h-[100vh] bg-cover" style={{ backgroundImage: "url('./charcoal.jpg')" }}>
            <h1 className="text-8xl font-bold text-center text-white font-heading pt-40">Menu</h1>
            <div className="flex flex-col md:flex-row gap-4 justify-start h-full w-full py-20 lg:px-40">

                <div className="flex flex-col text-white w-full">
                    <h1 className="text-5xl font-bold mb-4 font-heading p-8 text-center md:text-left">Pizza</h1>
                    <div className='flex flex-col gap-8'>
                        { pizzas.length > 0 && (
                            pizzas.map((pizza) => (
                                <div key={pizza.id} className='flex flex-col md:flex-row gap-2 items-center'>
                                    <div className='flex flex-col py-1 px-4 md:px-8 text-left w-72 xl:w-[450px]'>
                                        <div className='group gap-2 px-4 md:px-0 text-white flex flex-col'>
                                            <h1 className='text-3xl font-bold font-dancing'>{pizza.name}</h1>
                                            <p className='italic font-body'>{pizza.ingredients}</p>
                                            <p className='text-xl font-semibold'> {Math.ceil(pizza.price)}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <button onClick={() => handleAddToCart(pizza, 'pizza')}
                                            className='flex flex-row gap-2 text-2xl font-semibold font-heading cursor-pointer border-2 bg-yellow-700 hover:bg-yellow-600 px-4 py-2'
                                        >
                                            <FaShoppingCart /> Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="flex flex-col text-white w-full">
                    <h1 className="text-5xl font-bold mb-4 font-heading p-8 text-center md:text-left">Appetizers</h1>
                    <div className='flex flex-col gap-8'>
                        { appetizers.length > 0 && (
                            appetizers.map((appetizer) => (
                                <div key={appetizer.id} className='flex flex-col md:flex-row gap-2 items-center'>
                                    <div className='flex flex-col py-1 px-4 md:px-8 text-left w-72 xl:w-96'>
                                        <div className='group gap-2 px-4 md:px-0 text-white flex flex-col'>
                                            <h1 className='text-3xl font-bold font-dancing'>{appetizer.name}</h1>
                                            <p className='italic font-body'>{appetizer.ingredients}</p>
                                            <p className='text-xl font-semibold'> {Math.ceil(appetizer.price)}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <button onClick={() => handleAddToCart(appetizer, 'appetizer')}
                                            className='flex flex-row gap-2 text-2xl font-semibold font-heading cursor-pointer border-2 bg-yellow-700 hover:bg-yellow-600 px-4 py-2'
                                        >
                                            <FaShoppingCart /> Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
