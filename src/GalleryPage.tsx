import { useState } from 'react';
import { ImageWithFallback } from './components/ImagewithFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';

interface Photo {
  id: number;
  url: string;
}

export function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const imageFileNames = [
    'IMG_5080.JPG', 'IMG_5082.JPG', 'IMG_5083.JPG', 'IMG_5084.JPG',
    'IMG_5085.JPG', 'IMG_5088.JPG', 'IMG_5089.JPG',
    'IMG_5090.JPG', 'IMG_5091.JPG', 'IMG_5092.JPG', 'IMG_5093.JPG', 'IMG_5094.JPG',
    'IMG_5096.JPG', 'IMG_5097.JPG', 'IMG_5098.JPG', 'IMG_5099.JPG',
    'IMG_5100.JPG', 'IMG_5102.JPG', 'IMG_5103.JPG', 'IMG_5104.JPG',
    'IMG_5105.JPG', 'IMG_5106.JPG', 'IMG_5107.JPG', 'IMG_5108.JPG', 'IMG_5109.JPG',
    'IMG_5110.JPG', 'IMG_5111.JPG', 'IMG_5112.JPG', 'IMG_5114.JPG',
    'IMG_5115.JPG', 'IMG_5116.JPG', 'IMG_5118.JPG', 'IMG_5119.JPG',
    'IMG_5120.JPG', 'IMG_5121.JPG', 'IMG_5122.JPG', 'IMG_5123.JPG', 'IMG_5124.JPG',
    'IMG_5125.JPG', 'IMG_5126.JPG', 'IMG_5127.JPG', 'IMG_5128.JPG', 'IMG_5129.JPG',
    'IMG_5132.JPG', 'IMG_5133.JPG', 'IMG_5134.JPG', 'IMG_5135.JPG', 'IMG_5136.JPG',
    'IMG_5137.JPG', 'IMG_5138.JPG', 'IMG_5139.JPG', 'IMG_5140.JPG', 'IMG_5141.JPG',
    'IMG_5142.JPG', 'IMG_5143.JPG', 'IMG_5144.JPG', 'IMG_5145.JPG', 'IMG_5146.JPG',
    'IMG_5147.JPG', 'IMG_5148.JPG', 'IMG_5149.JPG', 'IMG_5150.JPG', 'IMG_5151.JPG',
    'IMG_5152.JPG', 'IMG_5153.JPG', 'IMG_5154.JPG', 'IMG_5155.JPG', 'IMG_5156.JPG',
    'IMG_5157.JPG', 'IMG_5158.JPG', 'IMG_5159.JPG', 'IMG_5160.JPG', 'IMG_5161.JPG',
    'IMG_5162.JPG', 'IMG_5163.JPG', 'IMG_5164.JPG', 'IMG_5165.JPG', 'IMG_5166.JPG',
    'IMG_5167.JPG',
  ];

  const photos = imageFileNames.map((fileName, index) => ({
    id: index,
    url: `/images/Gallery%20Photos/${fileName}`,
  }));

  const filteredPhotos = photos;

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-black text-white" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Photo Gallery</h2>
        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative overflow-hidden rounded-lg border-2 border-gray-800 hover:border-pink-500 transition-all cursor-pointer aspect-square"
            >
              <ImageWithFallback
                src={photo.url}
                alt="Gallery photo"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-pink-500 transition-colors z-50"
            >
              <X className="w-10 h-10" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('prev');
              }}
              className="absolute left-4 text-white hover:text-pink-500 transition-colors z-50"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('next');
              }}
              className="absolute right-4 text-white hover:text-pink-500 transition-colors z-50"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Image and Info */}
            <div 
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <ImageWithFallback
                  src={selectedPhoto.url}
                  alt="Gallery photo"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    <LinksSection />
    <Footer />
    </>
  );
}