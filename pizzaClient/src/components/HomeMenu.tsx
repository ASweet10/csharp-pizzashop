import homeMenu from '/homeMenu.jpg'
import { Link } from 'react-router-dom'

function HomeAbout() {

  return (
      <div className='flex flex-col bg-cover' style={{ backgroundImage: "url('./charcoal.jpg')" }}>
        
        <div className='flex flex-col md:flex-row'>
            <div className='w-full h-full'>
              <img src={homeMenu}/>
            </div>

            <div className='flex flex-col w-full text-center justify-center items-center gap-8 py-20'>
                <h1 className='font-heading text-5xl md:text-8xl font-bold text-white'>Menu</h1>
                <Link to="/menu" className='w-1/2 md:w-1/4 py-3 text-lg font-body text-white bg:transparent hover:bg-yellow-800 cursor-pointer transition duration-300 border-2'>
                    View the Menu
                </Link>
            </div>
        </div>
      </div>
  )
}

export default HomeAbout