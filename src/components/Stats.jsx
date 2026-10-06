const stats = [
  {
    value: "50K+",
    label: "Happy Customers",
  },
  {
    value: "1000+",
    label: "Products",
  },
  {
    value: "10+",
    label: "Cities",
  },
  {
    value: "4.7★",
    label: "Average Rating",
  },
];

function Stats() {
  return (
    <section className="sharepal-gradient relative overflow-hidden py-14 text-white sm:py-16">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-purple-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-200">
            Why SharePal
          </p>

          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Trusted by gamers across India
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-5 text-center sm:px-8 ${
                index !== 0
                  ? "border-l border-white/20"
                  : ""
              }`}
            >
              <p className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs font-medium text-purple-100 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;