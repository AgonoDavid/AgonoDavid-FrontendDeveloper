import Navbar from "./Navbar";

function Banner() {
  return (
    <header className="bg">
      <section className="App">
        <Navbar />
        <div className="items-center pt-[10%]">
          <div className="text-white w-1/2 leading-10">
            <h1 className="lg:text-9xl md:text-9xl text-7xl font-semibold font-barslow pb-10">
              Exploring the Cosmos
            </h1>
            <p className=" font-Belleflair text-2xl">One Rocket at a Time.</p>
          </div>
          <button className=" p-3 mt-6 transition-transform transform hover:scale-105 bg-red-500 px-3 rounded text-teal-50 font-Belleflair text-xl font-medium">
            Explore Catalogue
          </button>
        </div>
      </section>
    </header>
  );
}

export default Banner;
