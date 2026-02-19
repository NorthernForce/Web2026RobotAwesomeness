import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 !bg-[#db3e79]/80 hover:!bg-[#ab305e] text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 !bg-[#db3e79]/80 hover:!bg-[#ab305e] text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

export function HeroCarousel() {
  const images = [
    'https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlYW0lMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzA0NzczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwcm9ib3RzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwNDc3MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcwNDc3MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative bg-black">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <div className="h-[600px] relative">
              <img
                src={image}
                alt={`Robotics team ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-semi-bold text-white mb-4">
            Northern Force
          </h1>
          <p className="text-3xl md:text-5xl text-[#db3e79] font-semi-bold">
            Team 172
          </p>
        </div>
      </div>
    </div>
  );
}