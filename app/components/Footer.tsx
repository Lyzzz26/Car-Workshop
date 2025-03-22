import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 z-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/garage (1).png"
              alt="CAR GARAGE"
              width={150}
              height={40}
              className="object-contain mb-4"
            />
            <p className="text-sm mb-4">Premium automotive service and performance tuning for luxury vehicles since 2010.</p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Book Appointment', href: '/booking' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Performance Tuning', href: '/services#performance-tuning' },
                { name: 'Diagnostics', href: '/services#diagnostics' },
                { name: 'Maintenance', href: '/services#maintenance' },
                { name: 'Brake Service', href: '/services#brake-service' },
                { name: 'Suspension', href: '/services#suspension' },
                { name: 'Engine Rebuilds', href: '/services#engine-rebuilds' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                <span className="text-sm">123 Performance Drive<br />Miami, FL 33101</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@cargarage.com</span>
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-red-600 mr-3" />
                <div className="text-sm">
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Sat: 9AM-3PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} CAR GARAGE. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-xs text-gray-500 hover:text-gray-400">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="text-xs text-gray-500 hover:text-gray-400">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 