"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">

       {/* Header */}
       <header className="w-full bg-black/80 text-white py-4 shadow-lg z-20 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/stealthx.png"
                  alt="StealthX Logo"
                  width={110}
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
              <Link href="/services" className="relative group text-sm font-medium tracking-wider">
                SERVICES
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/gallery" className="relative group text-sm font-medium tracking-wider">
                GALLERY
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="relative group text-sm font-medium tracking-wider">
                ABOUT US
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="relative group text-sm font-medium tracking-wider">
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/location" className="flex items-center space-x-2 hover:text-white transition-colors">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-300">Location</span>
            </Link>
            <Link href="/login" className="flex items-center space-x-2 hover:text-white transition-colors">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm text-gray-300">Account</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Address</h3>
                <p className="text-gray-600">123 Performance Street</p>
                <p className="text-gray-600">Automotive District</p>
                <p className="text-gray-600">City, State 12345</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-gray-600">(555) 987-6543</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Email</h3>
                <p className="text-gray-600">info@cargarage.com</p>
                <p className="text-gray-600">support@cargarage.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black/90 text-gray-400 text-center py-6 z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-left">
              <h4 className="text-white text-sm font-medium mb-4">ABOUT STEALTHX</h4>
              <p className="text-sm">Premium automotive service and performance tuning for luxury vehicles.</p>
            </div>
            <div className="text-left">
              <h4 className="text-white text-sm font-medium mb-4">QUICK LINKS</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/services" className="text-sm hover:text-white transition-colors">Services</Link>
                <Link href="/gallery" className="text-sm hover:text-white transition-colors">Gallery</Link>
                <Link href="/location" className="text-sm hover:text-white transition-colors">Location</Link>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-white text-sm font-medium mb-4">CONNECT WITH US</h4>
              <div className="flex space-x-4">
                {/* Social media links removed */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm">© Copyright 2025 CAR GARAGE. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 