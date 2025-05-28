'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  BookOpenIcon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  BoltIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const featureCards = [
  {
    title: "Atomic",
    description: "Develop unshakable perseverance and passion for long-term goals.",
    href: "/library",
    icon: <BoltIcon className="w-8 h-8 text-indigo-500" />,
    color: "bg-indigo-50 hover:bg-indigo-100"
  },
  {
    title: "Motivation Mastery",
    description: "Learn science-backed techniques to sustain your drive and overcome procrastination.",
    href: "/lists",
    icon: <ChartBarIcon className="w-8 h-8 text-amber-500" />,
    color: "bg-amber-50 hover:bg-amber-100"
  },
  {
    title: "Mindset Training",
    description: "Cultivate a growth mindset for continuous learning and improvement.",
    href: "/duhigg",
    icon: <AcademicCapIcon className="w-8 h-8 text-emerald-500" />,
    color: "bg-emerald-50 hover:bg-emerald-100"
  },
  {
    title: "Emotional Intelligence",
    description: "Master the neuroscience behind habit formation and behavior change.",
    href: "/community",
    icon: <ArrowsRightLeftIcon className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-50 hover:bg-purple-100"
  }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 pt-10"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <SparklesIcon className="w-8 h-8 text-indigo-500 mr-2" />
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
              Performance Psychology Hub
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Build Unstoppable Grit & Motivation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Evidence-based tools to develop resilience, sustain motivation, and achieve your most ambitious goals.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow-sm text-center"
          >
            <div className="text-2xl font-bold text-indigo-600">36+</div>
            <div className="text-sm text-gray-500">Grit Exercises</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow-sm text-center"
          >
            <div className="text-2xl font-bold text-amber-600">89%</div>
            <div className="text-sm text-gray-500">Success Rate</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow-sm text-center"
          >
            <div className="text-2xl font-bold text-emerald-600">2.4K</div>
            <div className="text-sm text-gray-500">Members</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow-sm text-center"
          >
            <div className="text-2xl font-bold text-purple-600">120+</div>
            <div className="text-sm text-gray-500">Studies Cited</div>
          </motion.div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={card.href}
                className={`block h-full p-6 rounded-xl shadow-sm transition-all duration-300 ${card.color}`}
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* About + Highlights Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left side: About the website */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">The Science of Achievement</h2>
            <p className="text-gray-700 mb-6">
              Our platform combines cutting-edge psychology research with practical tools to help you develop the grit and motivation needed for extraordinary achievement. Based on work by Angela Duckworth, Carol Dweck, and other leading researchers in performance psychology.
            </p>
            <p className="text-gray-600 italic text-sm">
              "Grit is passion and perseverance for long-term goals." - Angela Duckworth
            </p>
          </div>

          {/* Right side: Highlights or key features */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start">
              <BoltIcon className="w-6 h-6 text-indigo-500 flex-shrink-0 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900">Grit Development</h3>
                <p className="text-sm">Proven exercises to strengthen your perseverance and passion for goals.</p>
              </div>
            </div>
            <div className="flex items-start">
              <ChartBarIcon className="w-6 h-6 text-amber-500 flex-shrink-0 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900">Motivation Systems</h3>
                <p className="text-sm">Sustain drive through neuroscience-backed techniques.</p>
              </div>
            </div>
            <div className="flex items-start">
              <AcademicCapIcon className="w-6 h-6 text-emerald-500 flex-shrink-0 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-900">Deliberate Practice</h3>
                <p className="text-sm">Master skills faster with research-validated practice methods.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Unshakable Grit?</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Join our community of high achievers and get access to all our motivation and resilience-building tools.
          </p>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}