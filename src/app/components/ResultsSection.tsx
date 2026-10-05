const achievements = [
  { value: "98%", label: "Pass Rate" },
  { value: "87%", label: "A / A+ Grades" },
  { value: "500+", label: "Successful Students" },
];

const testimonials = [
  {
    grade: "GPA 4.0",
    exam: "SEE 2026",
    name: "Anisha Sharma",
    quote:
      "The teachers helped me build confidence and understand difficult concepts.",
  },
  {
    grade: "A+",
    exam: "+2 Science",
    name: "Rahul Thapa",
    quote:
      "Small batches and regular assessments made all the difference for me.",
  },
  {
    grade: "A+",
    exam: "+2 Management",
    name: "Priya KC",
    quote:
      "Personal attention and supportive faculty helped me achieve my goals.",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="bg-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
            Our Students. Their Success.
          </h2>
          <p className="mt-4 text-base text-text-secondary sm:text-lg">
            Consistent guidance, focused preparation, and hard work create
            meaningful results.
          </p>
        </div>

        {/* Achievement Statistics */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.label}
              className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm"
            >
              <div className="text-4xl font-bold text-primary sm:text-5xl">
                {achievement.value}
              </div>
              <div className="mt-2 text-sm font-medium text-text-secondary sm:text-base">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Grade Badge */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-contrast">
                  {item.grade}
                </span>
                <span className="text-sm font-medium text-text-secondary">
                  {item.exam}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-base text-text-main">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Student Name */}
              <div className="mt-6 text-sm font-semibold text-primary">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
