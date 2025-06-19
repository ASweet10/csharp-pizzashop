
function Hero() {

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('./hero2.jpg')" }}>
        <div className="absolute top-1/6 flex flex-col justify-center items-start p-8">
            <h1 className="text-6xl md:text-9xl text-white font-bold uppercase leading-tight font-heading">Traditional Pizza</h1>
            <h1 className="text-2xl md:text-4xl text-white font-bold uppercase leading-tight font-body">Now offering delivery!</h1>
            <p className="text-white mt-4 max-w-md">Order your favorite pizzas from the comfort of your home. Fast, hot, and fresh.</p>
            {/* <button className="mt-6 bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600">Order Now</button> */}
        </div>
    </div>
  )
}

export default Hero