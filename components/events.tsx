'use client'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventsCarousel() {
  const posters = [
    {
      id: 1,
      title: "Medical School Admission Talk",
      image: "/events/medical_talk.png"
    },
    {
      id: 2,
      title: "Investment Seminar",
      image: "/events/investment_seminar.png"
    },
    {
      id: 3,
      title: "Taster Lessons",
      image: "/events/taster.png"
    },
    {
      id: 4,
      title: "Free LPA",
      image: "/events/free_lpa.png"
    },

    {
      id: 5,
      title: "Intro to JC Life",
      image: "/events/taster2.png"
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(Math.floor(posters.length / 2));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posters.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        py-8 sm:py-16 md:py-24 lg:py-32 flex flex-col items-center w-full">
      <div className="max-w-6xl w-full">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Upcoming Events
        </h1>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
            {posters.map((poster, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;

              return (
                <div
                  key={poster.id}
                  className={`absolute transition-all duration-500 ease-out ${isActive ? 'z-20 scale-100 opacity-100' : 'z-10 scale-75 opacity-0 md:opacity-40'
                    }`}
                  style={{
                    transform: `translateX(${offset * 320}px) scale(${isActive ? 1 : 0.75})`,
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-64 sm:w-72 md:w-80">
                    <img
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-contain"
                    />
                    <div className="p-4 mb-4 text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-black">
                        {poster.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous poster"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next poster"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {posters.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                  ? 'bg-yellow-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to poster ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}