const categories = [
  {
    name: "PS5 Consoles",
    description: "PlayStation consoles and combos",
    image:
      "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-1-controller/ps5-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
  },
  {
    name: "PS5 Games",
    description: "Popular games and gaming bundles",
    image:
      "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-god-of-war-ragnarok/ps5-with-god-of-war-ragnarok-with-100-games-with-1-controller-on-rent-sharepal-1.webp",
  },
  {
    name: "Racing Wheels",
    description: "Racing wheels and gaming setups",
    image:
      "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-mega-racing-combo/ps5-with-controller-with-ps-plus-deluxe-subscription-with-ea-play-with-wheel-combo-on-rent-sharepal-1%20(1).webp",
  },
  {
    name: "FC Gaming",
    description: "FC gaming combos with controllers",
    image:
      "https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-fifa26-2-controllers/ps5-with-fifa-26-with-2-controllers-on-rent-sharepal-1.webp",
  },
];

function RelatedCategories() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Explore More
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Related gaming categories
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-white p-5">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RelatedCategories;