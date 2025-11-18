import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      type: "video",
      src: "https://cdn.pixabay.com/video/2015/11/10/1303-145340146_medium.mp4",
      title: "Making Every Wedding a Dream Come True",
    },
    // {
    //   type: "image",
    //   src: "https://www.shutterstock.com/shutterstock/photos/1551296567/display_1500/stock-photo-jodhpur-rajasthan-india-october-th-indian-hindu-bride-dancing-with-turmeric-paste-on-1551296567.jpg",
    //   title: "Celebrate Your Haldi in Royal Style",
    // },
    // {
    //   type: "image",
    //   src: "https://www.shutterstock.com/shutterstock/photos/2467919205/display_1500/stock-photo-mumbai-maharashtra-may-elegant-indian-wedding-stage-decor-featuring-flowers-coverings-2467919205.jpg",
    //   title: "Corporate & Cultural Events with Perfection",
    // },
  ];

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen overflow-hidden">
              {/* Background Media */}
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <Link to="/booknow">
  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all">
    Book Now
  </button>
</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
