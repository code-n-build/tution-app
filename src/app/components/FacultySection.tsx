const faculty = [
  {
    name: "Rajesh Sharma",
    subject: "Mathematics",
    qualification: "M.Sc. Mathematics",
    experience: "8+ Years Experience",
  },
  {
    name: "Sita Patel",
    subject: "Physics & Science",
    qualification: "M.Sc. Physics",
    experience: "6+ Years Experience",
  },
  {
    name: "Kiran Thapa",
    subject: "English",
    qualification: "MA in English Literature",
    experience: "7+ Years Experience",
  },
  {
    name: "Binita KC",
    subject: "Accounting & Economics",
    qualification: "MBS, B.Com",
    experience: "5+ Years Experience",
  },
];

export default function FacultySection() {
  return (
    <section id="faculty" className="bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl lg:text-5xl">
            Meet Our Expert Faculty
          </h2>
          <p className="mt-4 text-base text-text-secondary sm:text-lg">
            Experienced educators committed to helping students reach their
            potential.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((teacher) => (
            <div
              key={teacher.name}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Photo Placeholder */}
              <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-primary-light to-accent-light">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface/80 text-primary">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-main">
                  {teacher.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {teacher.subject}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {teacher.qualification}
                </p>
                <p className="mt-2 text-sm font-medium text-text-main">
                  {teacher.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
