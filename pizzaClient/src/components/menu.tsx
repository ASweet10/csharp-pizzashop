import { useEffect, useState } from 'react'
import pizza from '/pizza.png'

interface Pizza {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

function Menu() {
    const [pizzas, setPizzas] = useState<Pizza[]>([])

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
      <div className='flex flex-col justify-center border-2 border-red-700'>
        <div className='flex justify-center'>
            <img src={pizza} alt="" className='animate-spin animate-duration-2000 animate-repeat-infinite ease-linear h-32 w-32' id="spinner"/>
        </div>

        { pizzas.length > 0 && (
            pizzas.map((pizza) => (
                <div key={pizza.id}>
                    <h1>{pizza.name}</h1>
                    <p>${pizza.price.toFixed(2)}</p>
                </div>
            ))
        )}
      </div>
  )
}

export default Menu