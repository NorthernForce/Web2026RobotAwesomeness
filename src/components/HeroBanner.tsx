import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import printer from '../../public/images/Gallery Photos/IMG_5094.jpg';
import group from '../../public/images/Gallery Photos/IMG_5086.jpg'; // Replace with actual group photo
import robot from '../../public/images/Gallery Photos/IMG_5136.jpg';


export default function HeroBanner() {
  const images = [
    printer,
    group,
    robot,
  ];

  return (
    <div className="relative bg-black hero-banner-swiper">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[520px] md:h-[700px]">
              <img src={src} alt={`slide-${i}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-semi-bold mb-4">
            Northern Force
          </h1>
          <p className="text-[#db3e79] text-3xl md:text-5xl lg:text-6xl font-semi-bold">
            Team 172
          </p>
        </div>
      </div>
    </div>
  );
}
