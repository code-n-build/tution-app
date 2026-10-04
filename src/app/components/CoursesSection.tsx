import Link from "next/link";

const courses = [
  {
    title: "SEE Preparation",
    subjects: ["Mathematics", "Science", "English"],
    description: "Comprehensive preparation for SEE with concept clarity and exam practice.",
    href: "#contact",
  },
  {
    title: "+2 Science",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    description: "Structured program for +2 Science with focused guidance and assessments.",
    href: "#contact",
  },
  {
    title: "+2 Management",
    subjects: ["Accounting", "Economics", "Mathematics"],
    description: "Strong foundation for management studies with practical approaches.",
    href: "#contact",
  },
  {
    title: "Entrance Preparation",
    subjects: ["Focused", "Competitive", "Exam Ready"],
    description: "Targeted coaching for competitive exams with proven strategies.",
    href: "#contact",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
            Programs Designed for Success
          </h2>
          <p className="mt-4 text-base text-text-secondary sm:text-lg">
            Focused learning programs designed around the needs of every student.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-card-dark dark:border-border-dark"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-text-main">
                {course.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-text-secondary">
                {course.description}
              </p>

              {/* Subject Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {course.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-text-main"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* CTA */}
              <Link
                href={course.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-accent"
              >
                Explore Program →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
