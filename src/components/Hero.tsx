import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  // Smooth scroll function
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16 sm:pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Gallery */}
          <div className="relative order-1 lg:order-2 -mx-4 sm:mx-0">
            <div className="relative z-10 bg-white lg:rounded-2xl lg:shadow-2xl lg:p-4">
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="rounded-none lg:rounded-lg"
              >
                {[
                  { src: "/images/event_photos/event1.jpg", alt: "Event 1" },
                  { src: "/images/event_photos/event2.jpg", alt: "Event 2" },
                  { src: "/images/event_photos/workshop3.jpg", alt: "Workshop 3" },
                  { src: "/images/event_photos/workshop.jpg", alt: "Workshop" },
                ].map((slide, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-none lg:rounded-xl shadow-none lg:shadow-xl transition-all duration-500 hover:scale-105"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                CSI
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  {" "}Student Chapter{" "}
                </span>
                <br />
                SVPCET
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                "The CSI Student Chapter at St. Vincent Pallotti College of
                Engineering & Technology is a platform for students and faculty
                to connect, share knowledge, and explore innovation together."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* About Us → scrolls to #about */}
              <button
                onClick={() => scrollToSection("#about")}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
              >
                <span>About Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Explore Events → scrolls to #events */}
              <button
                onClick={() => scrollToSection("#events")}
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Explore Events
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
