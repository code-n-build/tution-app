export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Students" },
    { value: "95%", label: "Success Rate" },
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Expert Classes" },
  ];

  return (
    <section className="bg-primary py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-primary-light sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
