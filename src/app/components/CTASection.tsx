import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="mt-4 text-base text-primary-light sm:text-lg">
              Take the first step toward better preparation, stronger confidence,
              and better results.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none sm:text-base"
              >
                Enroll Now
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition-all hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
