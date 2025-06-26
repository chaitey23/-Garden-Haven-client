import React, { useState } from 'react';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';


const slides = [
  {
    image: banner1,
    title: " Gardening Services",
    description: "Professional landscaping & maintenance for your dream garden.",
    btn1: "Get a Quote",
    btn2: "Learn More"
  },
  {
    image: banner2,
    title: " Flower Bed Designing",
    description: "Bring color and life to your garden with expert floral planning.",
    btn1: "Book Now",
    btn2: "View Gallery"
  },
  {
    image: banner3,
    title: "Organic Vegetable Gardens",
    description: "Grow your own food with our sustainable gardening solutions.",
    btn1: "Start Growing",
    btn2: "See Plans"
  }
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="relative w-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="!z-10 h-full"
        onSlideChange={(Swiper)=>setActiveIndex(Swiper.realIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-screen md:h-[600px] bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 p-8 md:p-16 text-center rounded-lg">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white">
                  {slide.title}
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-200">
  {activeIndex === idx ? (
    <Typewriter
      words={[slide.description]}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={30}
      delaySpeed={1000}
    />
  ) : (
    slide.description
  )}
</p>

                <div className="mt-6 space-x-4">
                 <Link to='/browseTips'>
                  <button className="btn bg-lime-600 text-white btn-lg">{slide.btn1}</button>
                 </Link>
                <Link to='/browseTips'>
                  <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black btn-lg">{slide.btn2}</button>
                </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
