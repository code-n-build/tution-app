import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "About", href: "#about" },
  { name: "Faculty", href: "#faculty" },
  { name: "Results", href: "#results" },
  { name: "Contact", href: "#contact" },
];

const programs = [
  { name: "SEE Preparation", href: "#courses" },
  { name: "+2 Science", href: "#courses" },
  { name: "+2 Management", href: "#courses" },
  { name: "Entrance Preparation", href: "#courses" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1 - Logo & Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="text-xl font-bold text-white">
                Tuition <span className="text-accent">Center</span>
              </Link>
              <p className="mt-4 max-w-sm text-sm text-primary-light">
                Expert tuition center providing personalized education and
                academic excellence for students from SEE to higher secondary
                levels.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-light transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Programs */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Programs
              </h3>
              <ul className="mt-4 space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <Link
                      href={program.href}
                      className="text-sm text-primary-light transition-colors hover:text-white"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="text-sm text-primary-light">
                  Address: Putalisadak, Kathmandu, Nepal
                </li>
                <li className="text-sm text-primary-light">
                  Phone: +977-1-XXXXXXX
                </li>
                <li className="text-sm text-primary-light">
                  Email: info@tuitioncenter.edu.np
                </li>
                <li className="text-sm text-primary-light">
                  Follow us on social media
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <p className="text-sm text-center text-primary-light">
            © 2026 Tuition Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
