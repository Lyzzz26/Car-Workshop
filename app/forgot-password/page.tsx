"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Blur */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bmw.jpg"
          alt="Luxury car background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Header */}
      <header className="w-full bg-black/80 text-white py-4 shadow-lg z-20 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/garage (1).png"
                  alt="Workshop Logo"
                  width={130}
                  height={30}
                  className="object-contain"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8 ml-16">
              <Link href="/" className="relative group text-sm font-medium tracking-wider">
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 z-10 relative">
        <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">Reset Password</h1>
          <p className="text-gray-300 text-sm text-center mb-6">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-red-800 text-white rounded-lg hover:bg-red-900 transition font-medium"
            >
              Send Reset Instructions
            </button>
          </form>
          <p className="mt-4 text-center text-gray-300 text-sm">
            Remember your password?{' '}
            <Link href="/login" className="text-red-500 hover:text-red-400">
              Back to Login
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black/90 text-gray-400 text-center py-2 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center space-x-4 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span>•</span>
            <span>© Copyright 2025 CAR GARAGE. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 