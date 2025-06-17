import { useEffect, useState } from 'react'
import pizzaImg from '/pizza.png'
import { useCart } from './CartContext'

interface Pizza {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

function Menu() {
    const { addToCart } = useCart()
    const [pizzas, setPizzas] = useState<Pizza[]>([])

    const handleAddToCart = (pizza: Pizza) => {
        addToCart({
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            quantity: 1
        })
    }

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch("http://localhost:5230/api/pizza")
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }
                const data: Pizza[] = await response.json()
                console.log(data)
                setPizzas(data)
            }
            catch (error) {
                console.error('Error: ', error)
            }
        }

        fetchPizzas()
    }, [])

  return (
      <div className='flex flex-col justify-center'>
        <div className='flex justify-center'>
            <img src={pizzaImg} alt="" className='animate-spin animate-duration-2000 animate-repeat-infinite hover:pause h-32 w-32' id="spinner"/>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 text-center'>
            { pizzas.length > 0 && (
                pizzas.map((pizza) => (
                    <div key={pizza.id} className='flex flex-col justify-center'>
                        <h1 className='text-3xl font-semibold'>{pizza.name}</h1>
                        <img src={pizzaImg} alt="" className='h-80 w-80 m-auto'/>
                        <p>${pizza.price.toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(pizza)} className='bg-red-900 text-white cursor-pointer'>Add to Cart</button>
                    </div>
                ))
            )}
        </div>

      </div>
  )
}

export default Menu