import { FiStar, FiMapPin, FiMessageCircle } from "react-icons/fi";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Bangalore",
    text: "The PS5 rental experience was smooth and hassle-free. The console arrived in great condition and worked perfectly.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    text: "Great option for gaming without buying an expensive console. The booking process was simple and delivery was quick.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    location: "Bangalore",
    text: "We rented a PS5 for a weekend gaming session. Everything was as expected and the product quality was excellent.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-10 text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-700">
            <FiMessageCircle size={14} />
            Customer Reviews
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our customers say
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Hear what customers have to say about their gaming rental
            experience with SharePal.
          </p>

        </div>

        {/* ================= REVIEWS ================= */}
        <div className="grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative rounded-[22px] border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:bg-white hover:shadow-xl hover:shadow-purple-900/5"
            >

              {/* Quote Icon */}
              <div className="absolute right-5 top-5 text-5xl font-serif leading-none text-purple-100">
                "
              </div>

              {/* Rating */}
              <div className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 shadow-sm">

                {Array.from({
                  length: testimonial.rating,
                }).map((_, index) => (
                  <FiStar
                    key={index}
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Review */}
              <p className="relative mt-6 min-h-[110px] text-sm leading-7 text-gray-600">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-gray-200" />

              {/* Customer */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-purple-900 text-sm font-bold text-white shadow-md shadow-purple-900/20">
                  {testimonial.name.charAt(0)}
                </div>

                {/* Details */}
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <FiMapPin size={12} />
                    {testimonial.location}
                  </p>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;