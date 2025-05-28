"use client"
import React from 'react';
import Link from 'next/link';

export default function Discover() {
  return (
    <div className="discover-container text-gray-800 font-sans px-6 py-10 max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold leading-tight">
          Build Atomic Habits: The Science of Self-Improvement That Actually Works
        </h1>
        <p className="text-xl text-blue-600">🚀 Tiny Habits. Massive Results.</p>
        <p className="text-lg text-gray-600">
          Stop relying on motivation. Start building systems that make success inevitable.
        </p>
      </header>

      {/* Why Willpower Fails Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Willpower Fails (And What Works Instead)</h2>
        <p className="mb-4">
          Big goals often crash because they depend on fleeting motivation. Atomic Habits work differently—they use
          brain science to make good behaviors automatic and bad ones harder to follow.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>✅ No more "starting tomorrow" – Learn how to act now</li>
          <li>✅ Break bad habits without willpower – It's about your environment, not discipline</li>
          <li>✅ Progress you can actually sustain – No burnout, just steady growth</li>
        </ul>
      </section>

      {/* Momentum Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">How Atomic Habits Build Unstoppable Momentum</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">1. The 1% Rule</h3>
            <p>
              Improving by just <strong>1% daily</strong> makes you <strong>37x better in a year</strong>. Small steps{' '}
              {'>'} big leaps.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">2. The Two-Minute Secret</h3>
            <p>"Read one page" → "Work out for 2 minutes" → "Write one sentence"</p>
            <p>Start so small it's impossible to fail. Then watch it grow.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">3. Identity Shift</h3>
            <p>
              <em>You don't rise to your goals—you fall to your systems.</em>
            </p>
            <p>
              <strong>Stop saying:</strong> "I want to run a marathon."
              <br />
              <strong>Start saying:</strong> "I am a runner."
            </p>
          </div>
        </div>
      </section>

      {/* 4 Laws Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">The 4 Laws of Behavior Change</h2>
        <p className="text-gray-600 mb-4">(Make Good Habits Automatic)</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="font-bold">Law</div>
          <div className="font-bold">For Good Habits</div>
          <div className="font-bold">To Break Bad Habits</div>

          {[
            {
              title: '1. Make It Obvious',
              good: 'Design your environment for success',
              bad: 'Hide triggers (e.g., phone in another room)',
            },
            {
              title: '2. Make It Attractive',
              good: 'Pair habits with rewards (e.g., coffee after a workout)',
              bad: 'Associate bad habits with negatives',
            },
            {
              title: '3. Make It Easy',
              good: 'Reduce friction (e.g., gym clothes ready the night before)',
              bad: 'Increase friction (e.g., delete social media apps)',
            },
            {
              title: '4. Make It Satisfying',
              good: 'Track progress & celebrate small wins',
              bad: 'Make slip-ups costly (e.g., accountability partner)',
            },
          ].map((law, index) => (
            <React.Fragment key={index}>
              <div>{law.title}</div>
              <div>{law.good}</div>
              <div>{law.bad}</div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Real People, Real Transformations</h2>
        <div className="space-y-6">
          <blockquote className="bg-gray-50 p-4 rounded shadow">
            <p>🔥 "I went from 'I'll start tomorrow' to writing 500 words daily—just by starting with one sentence."</p>
            <p className="mt-2 text-sm font-medium text-gray-600">– Alex, Writer</p>
          </blockquote>
          <blockquote className="bg-gray-50 p-4 rounded shadow">
            <p>💪 "2-minute workouts became 30-minute routines. I lost 20 lbs without 'trying.'"</p>
            <p className="mt-2 text-sm font-medium text-gray-600">– Sarah, Teacher</p>
          </blockquote>
          <blockquote className="bg-gray-50 p-4 rounded shadow">
            <p>📈 "Tracking my habits made me 3x more productive. No willpower needed."</p>
            <p className="mt-2 text-sm font-medium text-gray-600">– James, Entrepreneur</p>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-50 p-8 rounded-lg space-y-4">
        <h2 className="text-2xl font-bold">Your Next Step: Build Your First Atomic Habit Today</h2>
        <p className="text-blue-700">👇 Choose Your Starting Point</p>
        <div className="space-y-2">
          <p>🔹 <strong>Free Guide:</strong> "The 2-Minute Habit Cheat Sheet"</p>
          <p>🔹 <strong>30-Day Challenge:</strong> Daily micro-habits with coaching</p>
          <p>🔹 <strong>Deep Dive:</strong> Masterclass on Systems Over Goals</p>
        </div>
        
        <p className="text-sm italic mt-4 text-gray-700">
          💡 Remember: "You don't have to be perfect. You just have to be 1% better than yesterday."
        </p>
      </section>
    </div>
  );
}