import { useEffect, useState } from 'react'
import { useCart } from './CartContext'

interface Pizza {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    ingredients: string;
}

function Menu() {
    const { addToCart } = useCart()
    const [pizzas, setPizzas] = useState<Pizza[]>([])

    const handleAddToCart = (pizza: Pizza) => {
        addToCart({
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            imgUrl: pizza.imageUrl,
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
      <div className='flex flex-col justify-center pt-20 px-6 md:px-28 bg-gray-600 md:h-[100vh]'>
        <div className='grid grid-cols-1 md:grid-cols-3 text-center gap-4 p-4'>
            { pizzas.length > 0 && (
                pizzas.map((pizza) => (
                    <div key={pizza.id} className='flex flex-col md:flex-row justify-center items-center bg-gray-100'>
                        <img src={pizza.imageUrl} alt="" className='w-80 m-auto rounded-sm py-6 px-4'/>
                        <div className='flex flex-col py-4 px-2 text-left'>
                            <div className='h-28 md:h-36'>
                                <h1 className='text-2xl font-semibold'>{pizza.name}</h1>
                                <p className='italic py-1'>{pizza.ingredients}</p>
                                <p className='text-xl font-semibold text-red-800'> ${pizza.price.toFixed(2)}</p>
                            </div>
                            <button onClick={() => handleAddToCart(pizza)} className='bg-red-900 text-white cursor-pointer p-2 rounded-lg w-40 justify-center'>Add to Cart</button>
                        </div>
                    </div>
                ))
            )}
        </div>

      </div>
  )
}

export default Menu