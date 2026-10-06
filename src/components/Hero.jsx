function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-5 text-sm text-gray-500">
          Home
          <span className="mx-2">/</span>
          Gaming Gadgets
        </div>

        {/* Hero */}
        <div className="grid overflow-hidden rounded-[24px] sharepal-gradient md:grid-cols-2">

          {/* Content */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Gaming Gadgets on Rent
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Gaming Consoles
              <br />
              on Rent
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-300">
              Rent gaming consoles, games and gaming accessories
              at affordable prices. Play more without buying.
            </p>

            <div className="mt-7">
              <button
                onClick={() =>
                  document
                    .getElementById("gaming-products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-purple-900 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore Gaming
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex min-h-[320px] items-center justify-center bg-black/20 p-8">
            <img
              src="https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-1-controller/ps5-with-100-games-with-1-controller-on-rent-sharepal-1.webp"
              alt="PS5 gaming console"
              className="max-h-[360px] w-full object-contain transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;