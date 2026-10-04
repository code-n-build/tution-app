const testimonials = [
  {
    name: "Sujan Karki",
    class: "SEE Student",
    rating: 5,
    quote:
      "The teachers don't just teach the subject. They make sure we actually understand it.",
  },
  {
    name: "Bina Maharjan",
    class: "+2 Science Parent",
    rating: 5,
    quote:
      "I'm really happy with the progress my daughter has made. The faculty is supportive and dedicated.",
  },
  {
    name: "Anil Sharma",
    class: "+2 Management Student",
    rating: 5,
    quote:
      "Regular tests and personal guidance helped me improve my grades significantly.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-surface py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
            What Our Students Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              {/* Quote Icon */}
              <svg
                className="h-8 w-8 text-primary/20"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M10 8v8h4c0 2.206-1.794 4-4 4v4c4.411 0 8-3.589 8-8V8h-8zm12 0v8h4c0 2.206-1.794 4-4 4v4c4.411 0 8-3.589 8-8V8h-8z" />
              </svg>

              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-base text-text-main">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Rating */}
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Student Info */}
              <div className="mt-4">
                <div className="text-sm font-semibold text-text-main">
                  {testimonial.name}
                </div>
                <div className="text-sm text-text-secondary">
                  {testimonial.class}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
