import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-gray-50">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-24">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Life <br className="hidden md:block" />
                <span className="text-blue-600">Through Atomic Habits</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                James Clear's <strong className="font-semibold">Atomic Habits</strong> reveals the proven framework for building good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/grit" passHref>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
                    aria-label="Read free sample of Atomic Habits"
                  >
                    Read Free Sample
                  </button>
                </Link>
                <Link href="/login" passHref>
                  <button
                    className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-sm"
                    aria-label="Start your habit journey"
                  >
                    Start Your Journey
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Updated Book Section */}
          <section id="features" className="flex flex-col lg:flex-row gap-12 items-center mb-28">
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[2/3] shadow-2xl rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-3xl">
                <Image
                  src="/1.jpg"
                  alt="Atomic Habits Book Cover"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            <div className="w-full lg:w-3/5 space-y-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                New York Times #1 Bestseller
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Small Changes, <span className="text-blue-600">Remarkable Results</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                No matter your goals, <strong>Atomic Habits</strong> provides a proven framework for continuous improvement. James Clear reveals practical strategies to form good habits, break bad ones, and master the tiny behaviors that lead to extraordinary outcomes.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Key Concepts You'll Discover:</h3>
                <ul className="space-y-4">
                  {[
                    "The 1% Rule: How small improvements compound into remarkable results",
                    "The Habit Loop: Cue, Craving, Response, Reward framework",
                    "Environment Design: How to make good habits inevitable",
                    "The Two-Minute Rule: How to overcome procrastination",
                    "Identity-Based Habits: How to change your self-image",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4">
                <Link href="/get" passHref>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
                    aria-label="Get Atomic Habits now"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Get Your Copy
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-24 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "1M+", label: "Copies Sold Worldwide" },
                { number: "30+", label: "Languages Published" },
                { number: "200+", label: "Weeks on Bestseller Lists" },
                { number: "4.8/5", label: "Average Rating (50K+ reviews)" },
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</p>
                  <p className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="mb-28">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Readers Worldwide</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Join millions who have transformed their lives with Atomic Habits</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "This book fundamentally changed how I approach my daily routines. The concepts are simple but incredibly powerful in practice.",
                  name: "Sarah Johnson",
                  role: "Entrepreneur & Founder",
                  image: "/name.jpg",
                },
                {
                  quote: "Atomic Habits helped me break my smartphone addiction and build a consistent reading habit. Truly life-changing material!",
                  name: "Michael Chen",
                  role: "Senior Software Engineer",
                  image: "/name.jpg",
                },
                {
                  quote: "The only self-help book that actually worked for me. I've recommended it to everyone in my professional network.",
                  name: "Emma Rodriguez",
                  role: "Marketing Director",
                  image: "/name.jpg",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="mb-6 text-blue-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-blue-100">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s profile`}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Author Section */}
          <section className="flex flex-col lg:flex-row gap-12 items-center mb-24 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-full lg:w-1/3">
              <div className="relative aspect-square w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/author.jpeg"
                  alt="James Clear, Author of Atomic Habits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"></div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 space-y-6">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                About the Author
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">James Clear</h2>
              <p className="text-gray-700 leading-relaxed">
                James Clear is a leading expert on habit formation and decision making. His work has been featured in The New York Times, Time, Entrepreneur, and on CBS This Morning. He speaks regularly at Fortune 500 companies and his website receives millions of visitors each month.
              </p>
              <p className="text-gray-700 leading-relaxed">
                After a serious injury ended his baseball career in high school, James became fascinated with the science of habits during his recovery process. This personal experience, combined with years of research, culminated in the creation of Atomic Habits.
              </p>
              <div className="flex space-x-4 pt-2">
                <Link href="https://x.com/JamesClear/" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="https://en.wikipedia.org/wiki/James_Clear" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <span className="sr-only">Website</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 z-0 opacity-10">
              <Image
                src="/pattern.jpg"
                alt="Decorative pattern"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="relative z-10 py-16 px-6 sm:px-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Habits?
                </h2>
                <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                  Join millions who have changed their lives with Atomic Habits. Start your journey today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/get" passHref>
                    <button
                      className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                      aria-label="Get Atomic Habits now"
                    >
                      Get Your Copy Now
                    </button>
                  </Link>
                  <Link href="/grit" passHref>
                    <button
                      className="bg-transparent border-2 border-white text-white hover:bg-blue-800 font-bold py-4 px-10 rounded-lg transition duration-300"
                      aria-label="Learn more about Atomic Habits"
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}