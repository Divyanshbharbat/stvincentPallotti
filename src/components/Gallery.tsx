import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Workshops', 'Conferences', 'Awards', 'Networking'];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'images/event_photos/workshop.jpg',
      title: 'AI Workshop 2024',
      category: 'Workshops',
      description: 'Participants engaged in hands-on AI programming session',
    },
    // {
    //   id: 2,
    //   type: 'image',
    //   src: 'images/event_photos/workshop1.jpg',
    //   title: 'AI Workshop 2024',
    //   category: 'Conferences',
    //   description: 'Keynote session at CSI Annual Conference 2024',
    // },
    // {
    //   id: 3,
    //   type: 'video',
    //   src: 'images/event_photos/workshop2.jpg',
    //   title: 'AI Workshop 2024',
    //   category: 'Conferences',
    //   description: 'Best moments from our Innovation Summit',
    // },
    {
      id: 4,
      type: 'image',
      src: 'images/event_photos/event1.jpg',
      title: 'Excellence Awards Ceremony',
      category: 'Awards',
      description: 'Recognizing outstanding contributions to computing',
    },
    {
      id: 5,
      type: 'image',
      src: 'images/event_photos/workshop5.jpg',
      title: 'AI Workshop 2024',
      category: 'Workshops',
      description: 'Members connecting and sharing ideas',
    },
    {
      id: 6,
      type: 'image',
      src: 'images/event_photos/workshop4.jpg',
      title: 'Data Science Workshop',
      category: 'Workshops',
      description: 'Interactive data science learning session',
    },
    {
      id: 7,
      type: 'image',
      src: 'images/event_photos/worksop2.jpg',
      title: 'Student Tech Fair',
      category: 'Conferences',
      description: 'Students showcasing innovative projects',
    },
    // {
    //   id: 8,
    //   type: 'video',
    //   src: 'images/event_photos/event2.jpg',
    //   title: 'Cloud Computing Demo',
    //   category: 'Workshops',
    //   description: 'Live demonstration of cloud technologies',
    // },
    {
      id: 9,
      type: 'image',
      src: 'images/event_photos/event3.jpg',
      title: 'Panel Discussion',
      category: 'Conferences',
      description: 'Industry experts discussing future of technology',
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredItems.length - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < filteredItems.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our visual journey through workshops, conferences, awards ceremonies, and networking events.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="max-w-4xl max-h-[90vh] relative">
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-white/90">
                  {filteredItems[selectedImage].description}
                </p>
              </div>
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {filteredItems.length}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to be featured?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Participate in our events and workshops to be part of our growing community. Share your photos and experiences with us!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Join Our Next Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;