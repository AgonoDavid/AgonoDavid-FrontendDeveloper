import Navbar from "./Navbar";

function Banner({ onExploreClick }) {
  return (
    <header className="bg">
      <section className="lg:max-w-screen-lg mx-auto max-w-screen-sm pl-4 lg:pl-0 md:pl-0 md:max-w-screen-md">
        <Navbar />
        <div className="items-center pt-[10%]">
          <div className="text-white w-1/2 leading-10">
            <h1 className="lg:text-8xl md:text-7xl text-6xl font-semibold font-barslow pb-10">
              Exploring the Cosmos
            </h1>
            <p className=" font-Belleflair text-2xl">One Rocket at a Time.</p>
          </div>
          <button
            onClick={onExploreClick}
            className=" p-3 mt-6 font-semibold transition-transform transform hover:scale-105 bg-red-500 px-3 rounded text-teal-50 font-barslow text-xl "
          >
            Click to Explore Catalogue
          </button>
        </div>
      </section>
    </header>
  );
}

export default Banner;
