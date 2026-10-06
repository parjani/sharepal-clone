import {
  FiSearch,
  FiMapPin,
  FiUser,
  FiShoppingCart,
  FiCalendar,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">

      {/* =====================================================
          TOP HEADER
      ====================================================== */}
      <div className="bg-[#4c187c]">

        <div
          className="
            mx-auto
            flex
            min-h-[72px]
            max-w-[1280px]
            items-center
            justify-between
            gap-3
            px-3
            sm:px-5
            lg:h-[80px]
            lg:px-6
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}
          <div
            className="
              flex
              h-[58px]
              w-[150px]
              shrink-0
              items-end
              justify-center
              rounded-b-[18px]
              bg-[#2146e8]
              px-3
              pb-2

              sm:h-[74px]
              sm:w-[170px]

              lg:h-[70px]
              lg:w-[192px]
              lg:pb-2
              mb-8
            "
          >
            <img
              src={Logo}
              alt="SharePal"
              className="
                max-h-[28px]
                max-w-full
                object-contain

                sm:max-h-[42px]

                lg:max-h-[40px]
                rounded-b-[8px]
              "
            />
          </div>

          {/* =================================================
              DESKTOP BOOKING CONTROLS
          ================================================== */}
          <div className="hidden flex-1 items-center justify-center px-3 lg:flex">

            <div
              className="
                flex
                h-[48px]
                max-w-[650px]
                overflow-hidden
                rounded-full
                border-2
                border-[#a855f7]
                bg-white
                shadow-sm
              "
            >

              {/* LOCATION */}
              <button
                type="button"
                className="
                  flex
                  min-w-[145px]
                  items-center
                  gap-2
                  border-r
                  border-gray-200
                  bg-gray-50
                  px-4
                  text-[14px]
                  font-semibold
                  text-gray-900
                  transition
                  hover:bg-gray-100

                  xl:px-5
                  xl:text-[15px]
                "
              >
                <FiMapPin
                  size={19}
                  className="shrink-0 text-gray-800"
                />

                <span className="truncate">
                  Bangalore
                </span>

                <FiChevronDown
                  size={15}
                  className="shrink-0"
                />
              </button>

              {/* DELIVERY DATE */}
              <button
                type="button"
                className="
                  flex
                  min-w-[145px]
                  items-center
                  gap-2
                  border-r
                  border-gray-200
                  px-4
                  text-[14px]
                  font-semibold
                  text-gray-800
                  transition
                  hover:bg-gray-50

                  xl:px-5
                  xl:text-[15px]
                "
              >
                <FiCalendar
                  size={18}
                  className="shrink-0"
                />

                <span className="whitespace-nowrap">
                  Delivery Date
                </span>
              </button>

              {/* PICKUP DATE */}
              <button
                type="button"
                className="
                  flex
                  min-w-[140px]
                  items-center
                  gap-2
                  border-r
                  border-gray-200
                  px-4
                  text-[14px]
                  font-semibold
                  text-gray-800
                  transition
                  hover:bg-gray-50

                  xl:px-5
                  xl:text-[15px]
                "
              >
                <FiCalendar
                  size={18}
                  className="shrink-0"
                />

                <span className="whitespace-nowrap">
                  Pickup Date
                </span>
              </button>

              {/* SELECT */}
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  bg-[#090b35]
                  px-5
                  text-[14px]
                  font-bold
                  text-white
                  transition
                  hover:bg-[#14174d]

                  xl:text-[15px]
                "
              >
                <FiCalendar size={18} />

                <span>
                  Select
                </span>
              </button>

            </div>
          </div>

          {/* =================================================
              RIGHT ACTIONS
          ================================================== */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-2
              text-white

              sm:gap-3

              lg:gap-4

              xl:gap-5
            "
          >

            {/* SEARCH */}
            <button
              type="button"
              aria-label="Search"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                transition
                hover:scale-105
                hover:bg-white/10

                sm:h-10
                sm:w-10
              "
            >
              <FiSearch
                size={22}
                strokeWidth={2}
                className="sm:h-6 sm:w-6"
              />
            </button>

            {/* CART */}
            <button
              type="button"
              aria-label="Cart"
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                transition
                hover:scale-105
                hover:bg-white/10

                sm:h-10
                sm:w-10
              "
            >
              <FiShoppingCart
                size={23}
                strokeWidth={2}
                className="sm:h-6 sm:w-6"
              />

              {/* CART COUNT */}
              <span
                className="
                  absolute
                  right-0
                  top-0
                  flex
                  h-4
                  min-w-4
                  items-center
                  justify-center
                  rounded-full
                  bg-[#9dff00]
                  px-1
                  text-[9px]
                  font-bold
                  text-[#160528]
                "
              >
                0
              </span>
            </button>

            {/* USER */}
            <button
              type="button"
              aria-label="Login"
              className="flex items-center gap-2"
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-white
                  text-gray-900
                  shadow-md
                  transition
                  hover:scale-105

                  sm:h-11
                  sm:w-11

                  lg:h-[48px]
                  lg:w-[48px]

                  xl:h-[52px]
                  xl:w-[52px]
                "
              >
                <FiUser
                  size={20}
                  className="
                    sm:h-[22px]
                    sm:w-[22px]

                    xl:h-6
                    xl:w-6
                  "
                />
              </span>

              <span
                className="
                  hidden
                  text-[16px]
                  font-bold

                  xl:block
                "
              >
                Hi, Login
              </span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                transition
                hover:bg-white/10

                lg:hidden
              "
            >
              {mobileMenuOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>

          </div>
        </div>

        {/* =================================================
            MOBILE BOOKING BAR
        ================================================== */}
        <div
          className="
            border-t
            border-white/10
            px-3
            py-3

            lg:hidden
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[700px]
              grid-cols-2
              gap-2

              sm:grid-cols-4
            "
          >

            {/* LOCATION */}
            <button
              type="button"
              className="
                flex
                h-11
                items-center
                justify-center
                gap-1.5
                rounded-xl
                bg-white
                px-3
                text-xs
                font-semibold
                text-gray-900
                shadow-sm

                sm:text-sm
              "
            >
              <FiMapPin size={16} />

              <span>
                Bangalore
              </span>

              <FiChevronDown size={13} />
            </button>

            {/* DELIVERY */}
            <button
              type="button"
              className="
                flex
                h-11
                items-center
                justify-center
                gap-1.5
                rounded-xl
                bg-white
                px-3
                text-xs
                font-semibold
                text-gray-800
                shadow-sm

                sm:text-sm
              "
            >
              <FiCalendar size={16} />

              <span>
                Delivery
              </span>
            </button>

            {/* PICKUP */}
            <button
              type="button"
              className="
                flex
                h-11
                items-center
                justify-center
                gap-1.5
                rounded-xl
                bg-white
                px-3
                text-xs
                font-semibold
                text-gray-800
                shadow-sm

                sm:text-sm
              "
            >
              <FiCalendar size={16} />

              <span>
                Pickup
              </span>
            </button>

            {/* SELECT */}
            <button
              type="button"
              className="
                flex
                h-11
                items-center
                justify-center
                gap-1.5
                rounded-xl
                bg-[#090b35]
                px-3
                text-xs
                font-bold
                text-white
                shadow-sm

                sm:text-sm
              "
            >
              <FiCalendar size={16} />

              <span>
                Select
              </span>
            </button>

          </div>
        </div>

      </div>

      {/* =====================================================
          CATEGORY NAVIGATION
      ====================================================== */}
      <nav className="border-b border-gray-200 bg-white">

        {/* DESKTOP CATEGORY NAV */}
        <div
          className="
            mx-auto
            hidden
            h-[52px]
            max-w-[900px]
            items-center
            justify-between
            px-4

            lg:flex
          "
        >

          {/* PHOTOGRAPHY */}
          <button
            type="button"
            className="
              relative
              flex
              h-full
              items-center
              px-6
              text-[15px]
              font-semibold
              text-gray-700
              transition
              hover:text-gray-900

              xl:px-8
              xl:text-[16px]
            "
          >
            Photography
          </button>

          {/* GAMING */}
          <button
            type="button"
            className="
              relative
              flex
              h-full
              items-center
              px-6
              text-[15px]
              font-semibold
              text-gray-900

              xl:px-8
              xl:text-[16px]
            "
          >
            Gaming

            <span
              className="
                absolute
                bottom-0
                left-0
                right-0
                mx-auto
                h-[3px]
                rounded-full
                bg-[#8a2be2]
              "
            />
          </button>

          {/* OUTDOOR */}
          <button
            type="button"
            className="
              relative
              flex
              h-full
              items-center
              px-6
              text-[15px]
              font-semibold
              text-gray-700
              transition
              hover:text-gray-900

              xl:px-8
              xl:text-[16px]
            "
          >
            Outdoor
          </button>

          {/* ENTERTAINMENT */}
          <button
            type="button"
            className="
              relative
              flex
              h-full
              items-center
              px-6
              text-[15px]
              font-semibold
              text-gray-700
              transition
              hover:text-gray-900

              xl:px-8
              xl:text-[16px]
            "
          >
            Entertainment
          </button>

        </div>

        {/* MOBILE CATEGORY NAV */}
        <div
          className="
            flex
            h-[48px]
            items-center
            gap-1
            overflow-x-auto
            px-3

            lg:hidden
          "
        >

          {/* GAMING */}
          <button
            type="button"
            className="
              shrink-0
              rounded-full
              bg-purple-100
              px-4
              py-2
              text-xs
              font-bold
              text-purple-800
            "
          >
            Gaming
          </button>

          {/* PHOTOGRAPHY */}
          <button
            type="button"
            className="
              shrink-0
              rounded-full
              px-4
              py-2
              text-xs
              font-semibold
              text-gray-600
              transition
              hover:bg-gray-100
            "
          >
            Photography
          </button>

          {/* OUTDOOR */}
          <button
            type="button"
            className="
              shrink-0
              rounded-full
              px-4
              py-2
              text-xs
              font-semibold
              text-gray-600
              transition
              hover:bg-gray-100
            "
          >
            Outdoor
          </button>

          {/* ENTERTAINMENT */}
          <button
            type="button"
            className="
              shrink-0
              rounded-full
              px-4
              py-2
              text-xs
              font-semibold
              text-gray-600
              transition
              hover:bg-gray-100
            "
          >
            Entertainment
          </button>

        </div>

      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      {mobileMenuOpen && (
        <div
          className="
            border-b
            border-gray-200
            bg-white
            shadow-lg

            lg:hidden
          "
        >
          <div
            className="
              mx-auto
              max-w-[700px]
              px-4
              py-4
            "
          >

            <div className="grid grid-cols-2 gap-3">

              {/* SEARCH */}
              <button
                type="button"
                className="
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  text-gray-800
                  transition
                  hover:border-purple-300
                  hover:bg-purple-50
                "
              >
                <FiSearch
                  className="mb-1 text-purple-700"
                  size={19}
                />

                Search Products
              </button>

              {/* CART */}
              <button
                type="button"
                className="
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  text-gray-800
                  transition
                  hover:border-purple-300
                  hover:bg-purple-50
                "
              >
                <FiShoppingCart
                  className="mb-1 text-purple-700"
                  size={19}
                />

                My Cart
              </button>

              {/* LOGIN */}
              <button
                type="button"
                className="
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  text-gray-800
                  transition
                  hover:border-purple-300
                  hover:bg-purple-50
                "
              >
                <FiUser
                  className="mb-1 text-purple-700"
                  size={19}
                />

                Login
              </button>

              {/* LOCATION */}
              <button
                type="button"
                className="
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  text-gray-800
                  transition
                  hover:border-purple-300
                  hover:bg-purple-50
                "
              >
                <FiMapPin
                  className="mb-1 text-purple-700"
                  size={19}
                />

                Change Location
              </button>

            </div>

          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;