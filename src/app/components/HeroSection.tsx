"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-20 pb-10 sm:pt-24 sm:pb-16"
    >
      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary-light opacity-60 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute top-20 -right-32 h-64 w-64 rounded-full bg-accent-light opacity-60 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Column */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium shadow-sm sm:text-sm">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-success" />
            Trusted by Students & Parents
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-text-main sm:text-5xl lg:text-6xl xl:text-7xl">
            Learn Better.
            <br />
            <span className="text-accent">Score Higher.</span>
            <br />
            Go Further.
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 max-w-xl text-base text-text-secondary sm:text-lg">
            Expert teachers, personalized attention, and structured learning
            programs designed to help students achieve their academic goals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
            <Link
              href="#courses"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-contrast shadow-sm transition-all hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none sm:text-base"
            >
              Explore Courses
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-main shadow-sm transition-all hover:bg-primary-light hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none sm:text-base"
            >
              Book a Free Counseling
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-text-secondary sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              500+ Students
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              95% Success Rate
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" />
              10+ Years Experience
            </div>
          </div>
        </div>

        {/* Right Column - Image Composition */}
        <div className="relative mx-auto flex w-full max-w-lg justify-center lg:max-w-none">
          {/* Main Image Container */}
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-primary-light/40 shadow-xl sm:max-w-md lg:max-w-lg">
            <Image
              src="/students.jpg"
              alt="Students studying in a modern classroom"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlay for subtle depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          {/* Floating Card 1 - Students */}
          <div className="absolute -top-4 -left-4 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:-top-6 sm:-left-6 sm:px-5 sm:py-4">
            <div className="text-xl font-bold text-primary sm:text-2xl">
              500+
            </div>
            <div className="text-xs font-medium text-text-secondary sm:text-sm">
              Students
            </div>
          </div>

          {/* Floating Card 2 - Success Rate */}
          <div className="absolute -right-4 bottom-8 rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:-right-6 sm:bottom-12 sm:px-5 sm:py-4">
            <div className="text-xl font-bold text-accent sm:text-2xl">
              95%
            </div>
            <div className="text-xs font-medium text-text-secondary sm:text-sm">
              Success Rate
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 -left-8 hidden h-8 w-8 rounded-full bg-accent/20 sm:block" />
          <div className="absolute -bottom-4 left-1/4 hidden h-6 w-6 rounded-full bg-primary/20 sm:block" />
        </div>
      </div>
    </section>
  );
}
