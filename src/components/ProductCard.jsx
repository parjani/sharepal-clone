import { FiHeart, FiStar, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const isNew = product.tag?.toLowerCase() === "new";

  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* ================= IMAGE ================= */}
      <div className="relative flex h-[265px] items-center justify-center bg-white p-5">

        {/* Product Tag */}
        {product.tag && (
          <span
            className={`absolute left-4 top-4 z-10 rounded-lg border-2 bg-white px-3 py-1 text-xs font-semibold ${
              isNew
                ? "border-blue-500 text-blue-600"
                : "border-orange-500 text-orange-600"
            }`}
          >
            {product.tag}
          </span>
        )}

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          onClick={() => setLiked(!liked)}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-all duration-200 hover:scale-105 hover:text-purple-600"
        >
          <FiHeart
            size={18}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* ================= DETAILS ================= */}
      <div className="px-5 pb-5 pt-2">

        {/* Product Name */}
        <h3 className="min-h-[48px] text-[16px] font-bold leading-6 text-gray-900">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2 text-sm">

          {product.rating > 0 ? (
            <>
              <span className="flex items-center gap-1 font-semibold text-gray-800">
                <FiStar
                  size={15}
                  className="fill-yellow-400 text-yellow-400"
                />
                {product.rating}
              </span>

              <span className="text-gray-400">
                •
              </span>

              <span className="text-gray-500">
                {product.booked_count} booked
              </span>
            </>
          ) : (
            <span className="text-gray-400">
              No ratings yet
            </span>
          )}

        </div>

        {/* Bottom Section */}
        <div className="mt-5 flex items-end justify-between gap-3">

          {/* Price */}
          <div>
            <p className="text-xs font-medium text-gray-400">
              Rent from
            </p>

            <p className="mt-0.5 text-[21px] font-extrabold text-gray-900">
              ₹{product.per_day_rent}
              <span className="ml-1 text-sm font-medium text-gray-400">
                /day
              </span>
            </p>
          </div>

          {/* Rent Button */}
          <button
            disabled={product.out_of_stock}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
              product.out_of_stock
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : "bg-[#4c187c] text-white shadow-md shadow-purple-900/20 hover:-translate-y-0.5 hover:bg-[#5d2094] hover:shadow-lg"
            }`}
          >
            {!product.out_of_stock && (
              <FiShoppingCart size={15} />
            )}

            {product.out_of_stock
              ? "Out of stock"
              : "Rent now"}
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;