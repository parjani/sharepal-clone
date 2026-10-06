import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[#160528] text-white">

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* ================= TOP ================= */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-black tracking-tight">
              <span className="sharepal-gradient-text">
                SharePal
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-purple-200/70">
              Rent gaming consoles, gadgets and other products
              without the hassle of buying them.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3 text-sm text-purple-200/70">
                <FiMapPin
                  size={17}
                  className="text-purple-400"
                />
                Bangalore, India
              </div>

              <div className="flex items-center gap-3 text-sm text-purple-200/70">
                <FiMail
                  size={17}
                  className="text-purple-400"
                />
                support@sharepal.in
              </div>

              <div className="flex items-center gap-3 text-sm text-purple-200/70">
                <FiPhone
                  size={17}
                  className="text-purple-400"
                />
                Customer Support
              </div>

            </div>

            {/* Social */}
            <div className="mt-7 flex gap-3">

              <button
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-300/20 bg-white/5 text-purple-200 transition-all duration-200 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-600 hover:text-white"
              >
                <FiInstagram size={17} />
              </button>

              <button
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-300/20 bg-white/5 text-purple-200 transition-all duration-200 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-600 hover:text-white"
              >
                <FiFacebook size={17} />
              </button>

              <button
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-300/20 bg-white/5 text-purple-200 transition-all duration-200 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-600 hover:text-white"
              >
                <FiTwitter size={17} />
              </button>

              <button
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-300/20 bg-white/5 text-purple-200 transition-all duration-200 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-600 hover:text-white"
              >
                <FiLinkedin size={17} />
              </button>

            </div>

          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-purple-200/70">

              {[
                "About Us",
                "Contact Us",
                "Careers",
                "Blog",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Rentals */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Rentals
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-purple-200/70">

              {[
                "Gaming Consoles",
                "VR Gaming",
                "Gaming Accessories",
                "Racing Wheels",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-purple-200/70">

              {[
                "FAQs",
                "Rental Policy",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-purple-300/10" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-3 pt-6 text-center text-xs text-purple-200/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p>
            © {new Date().getFullYear()} SharePal. All rights reserved.
          </p>

          <p>
            Rent smarter. Play more.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;