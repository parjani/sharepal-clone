import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json";

function getProductCategory(product) {
  const image = product.image.toLowerCase();
  const name = product.name.toLowerCase();

  if (
    image.includes("/ps5/") ||
    name.includes("ps5") ||
    name.includes("playstation")
  ) {
    return "PS5 Console";
  }

  return "Other";
}

function ProductGrid({ activeCategory }) {
  const [sortBy] = useState("recommended");

  const products = productsData.products;

  const filteredProducts = useMemo(() => {
    let result =
      activeCategory === "All"
        ? [...products]
        : products.filter(
            (product) =>
              getProductCategory(product) === activeCategory
          );

    if (sortBy === "low") {
      result.sort(
        (a, b) => a.per_day_rent - b.per_day_rent
      );
    }

    if (sortBy === "high") {
      result.sort(
        (a, b) => b.per_day_rent - a.per_day_rent
      );
    }

    if (sortBy === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    return result;
  }, [activeCategory, sortBy, products]);

  const heading =
    activeCategory === "All"
      ? "Gaming Products On Rent"
      : `${activeCategory} On Rent`;

  return (
    <section
      id="gaming-products"
      className="bg-[#f7f7f8] py-8 sm:py-10"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between gap-4">

          <h2 className="text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
            {heading}
          </h2>

          <p className="shrink-0 text-sm font-medium text-gray-500 sm:text-base">
            Total items:{" "}
            <span className="font-semibold text-gray-700">
              {filteredProducts.length} items
            </span>
          </p>

        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gray-200" />

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-200 bg-white">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900">
                No products available
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try selecting another category.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default ProductGrid;