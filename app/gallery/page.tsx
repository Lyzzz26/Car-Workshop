"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Gallery categories
const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'tuning', name: 'Performance Tuning' },
  { id: 'maintenance', name: 'Maintenance' },
  { id: 'modifications', name: 'Modifications' },
  { id: 'cosmetic', name: 'Cosmetic' },
];

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

// Gallery items (you'll need to replace these with your actual images)
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'BMW M4 Performance Tuning',
    category: 'tuning',
    image: '/gallery/bmw-m4-tuning.jpg',
    description: 'Custom ECU tuning and performance optimization'
  },
  {
    id: 2,
    title: 'Mercedes-AMG GT Maintenance',
    category: 'maintenance',
    image: '/gallery/amg-gt-maintenance.jpg',
    description: 'Complete service and maintenance package'
  },
  {
    id: 3,
    title: 'Porsche 911 Modifications',
    category: 'modifications',
    image: '/gallery/porsche-911-mod.jpg',
    description: 'Exhaust and suspension upgrades'
  },
  {
    id: 4,
    title: 'Audi RS6 Cosmetic Enhancement',
    category: 'cosmetic',
    image: '/gallery/audi-rs6-cosmetic.jpg',
    description: 'Custom paint and body work'
  },
  // Add more items as needed
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageClick = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
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
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>

      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 py-8 z-10 relative">
        <div className="bg-black/50 backdrop-blur-md p-0 rounded-xl max-w-7xl w-full overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-red-900/80 to-black/80 p-6">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">OUR GALLERY</h1>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          {/* Category Filter */}
          <div className="p-6 border-b border-white/10">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                  onClick={() => handleImageClick(item, index)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-5xl mx-4">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={filteredItems[currentIndex].image}
                alt={filteredItems[currentIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">
                {filteredItems[currentIndex].title}
              </h3>
              <p className="text-gray-300 mt-2">
                {filteredItems[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      
    </div>
  );
}
