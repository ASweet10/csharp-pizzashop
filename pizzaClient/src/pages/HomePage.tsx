import Menu from "../components/Menu"
import Hero from "../components/Hero"

function HomePage() {


  return (
    <div className="bg-gray-600 h-full w-full">
        <div className='flex flex-col'>
            <Hero />
            <Menu />
        </div>
    </div>
  );
}

export default HomePage