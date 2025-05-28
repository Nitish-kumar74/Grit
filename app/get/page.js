'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Dynamically import icons with SSR disabled and fallbacks
const BookOpen = dynamic(() =>
  import('lucide-react').then((mod) => mod.BookOpen).catch(() => () => <span>📘</span>),
  { ssr: false }
);
const Star = dynamic(() =>
  import('lucide-react').then((mod) => mod.Star).catch(() => () => <span>⭐</span>),
  { ssr: false }
);
const ArrowLeft = dynamic(() =>
  import('lucide-react').then((mod) => mod.ArrowLeft).catch(() => () => <span>←</span>),
  { ssr: false }
);

export default function GetYourCopyPage() {
  const books = [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'Learn how tiny changes can create remarkable results',
      rating: 4.8,
      link: 'https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834',
      cover: '/etom.jpeg',
    },
    {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      description: 'Explore the two systems that drive how we think',
      rating: 4.6,
      link: 'https://www.flipkart.com/thinking-fast-slow/p/itmfc5bbgfezbwcp',
      cover: '/thinking.jpeg',
    },
    {
      title: 'Emotional Intelligence',
      author: 'Daniel Goleman',
      description: 'Master the skills that lead to greater success',
      rating: 4.7,
      link: 'https://www.amazon.in/Emotional-Intelligence-Daniel-Goleman/dp/9382563792',
      cover: '/emo.jpeg',
    },
    {
      title: 'The Power of Habit',
      author: 'Charles Duhigg',
      description: 'Understand how habits work and how to change them',
      rating: 4.7,
      link: 'https://www.flipkart.com/power-habit/p/itmfyfhhkzbdusqd',
      cover: '/power.jpeg',
    },
  ];

  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Generate random prices only on the client
    const generated = books.map(() => Math.floor(Math.random() * 500) + 300);
    setPrices(generated);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
     
      

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 mb-8"
        >
          Expand Your Mind
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
        >
          {books.map((book, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{book.title}</h3>
                <p className="text-sm text-gray-500 mt-1">by {book.author}</p>
                <p className="mt-3 text-gray-600 text-sm">{book.description}</p>
                <div className="flex items-center bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold mt-4 w-fit">
                  <Star className="h-3 w-3 mr-1" />
                  {book.rating}
                </div>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Purchase - ₹{prices[index] || '...'}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </motion.div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-500">
              &copy; {new Date().getFullYear()} Wisdom Library. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
