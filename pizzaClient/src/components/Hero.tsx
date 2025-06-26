
function Hero() {

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('./hero2.jpg')" }}>
        <div className="absolute top-1/6 flex flex-col justify-center items-start p-8">
            <h1 className="text-7xl md:text-9xl text-white font-bold uppercase font-heading">Order Online Today</h1>
            <h1 className="text-2xl md:text-3xl ml-0 md:ml-3 text-white font-bold uppercase font-body">Traditional New York City Pizza</h1>
            <p className="ml-0 md:ml-6 text-white text-2xl mt-4 max-w-md">7th & Bedford in Brooklyn - Est. 1976</p>
            {/* <button className="mt-6 bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600">Order Now</button> */}
        </div>
    </div>
  )
}

export default Hero