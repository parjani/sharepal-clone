import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What gaming gadgets can I rent from SharePal?",
    answer:
      "You can rent gaming consoles, games, controllers, VR devices, racing wheels and other gaming accessories.",
  },
  {
    question: "How does gaming console rental work?",
    answer:
      "Choose your gaming product, select your rental dates, check availability and place your rental request.",
  },
  {
    question: "Can I rent a PS5 for a short period?",
    answer:
      "Yes. PS5 consoles and gaming accessories can be rented for flexible rental periods depending on availability.",
  },
  {
    question: "What happens if the product is unavailable?",
    answer:
      "If a product is out of stock, you can check again later or explore another available gaming product.",
  },
  {
    question: "Are games included with the PS5 rental?",
    answer:
      "Some PS5 rental combos include games or gaming subscriptions, while other products are available without games. Check the product details before renting.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7f7f8] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center">

          <span className="inline-flex rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-700">
            FAQs
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Gaming rental FAQs
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Everything you need to know about renting gaming consoles,
            games and accessories from SharePal.
          </p>

        </div>

        {/* FAQ List */}
        <div className="space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-purple-200 shadow-md shadow-purple-900/5"
                    : "border-gray-200 hover:border-purple-100 hover:shadow-sm"
                }`}
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                >

                  {/* Number */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      isOpen
                        ? "bg-purple-700 text-white"
                        : "bg-purple-50 text-purple-700"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-sm font-bold sm:text-base ${
                      isOpen
                        ? "text-purple-800"
                        : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <FiChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="border-t border-purple-50 px-5 pb-5 pt-4 sm:px-6 sm:pl-[4.5rem]">
                      <p className="text-sm leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQ;