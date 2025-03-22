import Link from 'next/link';
import Image from 'next/image';

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
        <p className="text-sm">© Copyright 2025 StealthX Performance. All Rights Reserved.</p>
      </div>
    </div>
  </footer> 