"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { MapPinIcon, UserIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to determine if a section is active based on the current path
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Contact Bar */}
      <div className="bg-black text-gray-300 text-xs py-2 z-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <PhoneIcon className="h-3 w-3 text-red-600 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="hidden md:flex items-center">
              <MapPinIcon className="h-3 w-3 text-red-600 mr-2" />
              <span>123 Performance Drive, Miami, FL</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ClockIcon className="h-3 w-3 text-red-600 mr-2" />
              <span>Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="w-full bg-black/80 text-white py-3 shadow-xl z-20 sticky top-0 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/garage (1).png"
                  alt="CAR GARAGE"
                  width={130}
                  height={30}
                  className="object-contain"
                />
              </Link>
            </div>
            <nav className="hidden lg:flex space-x-8 ml-16">
              {[
                { name: 'HOME', href: '/', id: 'home' },
                { name: 'SERVICES', href: '/services', id: 'services' },
                { name: 'GALLERY', href: '/gallery', id: 'gallery' },
                { name: 'ABOUT US', href: '/about', id: 'about' },
                { name: 'CONTACT', href: '/contact', id: 'contact' },
              ].map((item) => (
                <Link 
                  key={item.id}
                  href={item.href} 
                  className={`relative group text-sm font-medium tracking-wider ${isActive(item.href) ? 'text-white' : 'text-gray-300 hover:text-white'} transition-colors duration-200`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/location" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
              <MapPinIcon className="w-5 h-5 text-red-600" />
              <span className="text-sm">Find Us</span>
            </Link>
            <Link href="/login" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
              <UserIcon className="w-5 h-5 text-red-600" />
              <span className="text-sm">Account</span>
            </Link>
            <Link 
              href="/booking" 
              className="px-4 py-2 bg-red-700 text-white text-sm rounded hover:bg-red-800 transition-colors duration-200 shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 mt-2" ref={dropdownRef}>
            <div className="px-4 pt-2 pb-4 space-y-1">
              {[
                { name: 'HOME', href: '/' },
                { name: 'SERVICES', href: '/services' },
                { name: 'GALLERY', href: '/gallery' },
                { name: 'ABOUT US', href: '/about' },
                { name: 'CONTACT', href: '/contact' },
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`block px-3 py-2 text-base font-medium ${isActive(item.href) ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-900'} rounded-md`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-800 mt-2 flex justify-between">
                <Link href="/location" className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white">
                  <MapPinIcon className="w-5 h-5 text-red-600 mr-2" />
                  Find Us
                </Link>
                <Link href="/login" className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white">
                  <UserIcon className="w-5 h-5 text-red-600 mr-2" />
                  Account
                </Link>
              </div>
              <Link 
                href="/booking" 
                className="block text-center w-full mt-2 px-4 py-2 bg-red-700 text-white font-medium rounded hover:bg-red-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
} 