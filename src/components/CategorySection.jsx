import { FiCalendar } from "react-icons/fi";

function CategorySection({
  activeCategory,
  setActiveCategory,
}) {
  const categories = [
    "All",
    "PS5 Console",
    "Xbox Console",
    "VR",
    "Big Screen Gaming",
    "Racing Wheel",
    "PS5 Games",
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        

        {/* Categories */}
        <div className="mt-8">

          <h2 className="text-2xl font-bold text-gray-900">
            Gaming Gadgets
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Choose from our gaming collection.
          </p>

          <div className="mt-5 flex gap-3 overflow-x-auto pb-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-black"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default CategorySection;