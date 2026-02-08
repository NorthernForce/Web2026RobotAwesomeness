import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroBanner() {
  const images = [
    'https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlYW0lMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzA0NzczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwcm9ib3RzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwNDc3MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcwNDc3MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            Northern Force
          </h1>
          <p className="text-pink-500 text-3xl md:text-5xl lg:text-6xl font-bold">
            Team 172
          </p>
        </div>
      </div>
    </div>
  );
}
