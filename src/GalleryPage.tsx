import { useState } from 'react';
import { ImageWithFallback } from './components/ImagewithFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';

interface Photo {
  id: number;
  url: string;
  title?: string;
  date: string;
}

export function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1768796371633-ba921e535c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlYW0lMjBjb21wZXRpdGlvbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTYxODQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Regional Competition 2026',
      date: 'March 2026',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBidWlsZGluZyUyMHJvYm90fGVufDF8fHx8MTc3MTYxODQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Build Season 2026',
      date: 'January 2026',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1581916102388-eae1149ca53f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMG1lY2hhbmljYWwlMjBwYXJ0cyUyMGdlYXJzfGVufDF8fHx8MTc3MTYxODQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Robot Mechanism Detail',
      date: 'February 2026',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1643732774973-ff2d0e610d7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzcxNTUxNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Electronics Assembly',
      date: 'January 2026',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1759446334429-bb1f2d1d9f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY2VsZWJyYXRpb24lMjB0cm9waHklMjBhd2FyZHxlbnwxfHx8fDE3NzE2MTg0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Championship Victory',
      date: 'April 2025',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHdvcmtzaG9wJTIwdG9vbHN8ZW58MXx8fHwxNzcxNjE4NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Workshop Tools',
      date: 'December 2025',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlYW13b3JrJTIwY29sbGFib3JhdGlvbiUyMHByb2plY3R8ZW58MXx8fHwxNzcxNTEzMDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Team Collaboration',
      date: 'November 2025',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1705579609431-a07e6c4b149b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xkZXJpbmclMjBlbGVjdHJvbmljcyUyMGNsb3NldXB8ZW58MXx8fHwxNzcxNjE4NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Precision Soldering',
      date: 'January 2026',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1768323102303-62da2858bd5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwcm9ib3QlMjBhcm0lMjBkZXNpZ258ZW58MXx8fHwxNzcxNjE4NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Robot Arm Assembly',
      date: 'February 2026',
    },
  ];

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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <div className="w-32 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl">
            Capturing our journey in robotics
          </p>
        </div>

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
                alt={photo.title}
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
                  alt={selectedPhoto.title}
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