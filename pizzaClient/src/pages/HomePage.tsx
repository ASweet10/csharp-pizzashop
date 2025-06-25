import HomeMenu from "../components/HomeMenu"
import Hero from "../components/Hero"
import HeroTwo from "../components/HeroTwo"
import HomeAbout from "../components/HomeAbout"

function HomePage() {

  return (
    <div className="bg-gray-600 h-full w-full">
        <div className='flex flex-col'>
            <Hero />
            <HomeMenu />
            <HeroTwo />
            <HomeAbout />
        </div>
    </div>
  );
}

export default HomePage