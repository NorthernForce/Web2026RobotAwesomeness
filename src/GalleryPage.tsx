import { useState } from 'react';
import { ImageWithFallback } from './components/ImagewithFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LinksSection } from './components/LinksSection';
import { useRef } from 'react';
import { FolderClosed } from "lucide-react";

interface Photo {
  id: number;
  url: string;
}



export function GalleryPage() {
  const photosRef = useRef<HTMLDivElement | null>(null); 
  const videosRef = useRef<HTMLDivElement | null>(null);

  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Dynamically load all images from Gallery Photos folder
  const imageModules = import.meta.glob('/public/images/Gallery Photos/**/*', { eager: true });

  const folderMap: Record<string, Photo[]> = {};

  Object.keys(imageModules)
    .filter(path => /\.(jpg|jpeg|png|gif|webp)$/i.test(path))
    .forEach((path, index) => {
      const cleanPath = path.replace('/public', '');
      const parts = cleanPath.split('/');

      // Folder name is the second-to-last part
      // e.g. /public/images/Gallery Photos/2026/photo.jpg
      const folderName = parts[parts.length - 2];

      if (!folderMap[folderName]) folderMap[folderName] = [];

      folderMap[folderName].push({
        id: index,
        url: cleanPath,
      });
  });

  const imagePaths = Object.keys(imageModules)
    .filter(path => /\.(jpg|jpeg|png|gif|webp)$/i.test(path))
    .map(path => path.replace('/public', ''))
    .sort();

  const photos = imagePaths.map((path, index) => ({
    id: index,
    url: path,
  }));

  const filteredPhotos = photos;

  // Dynamically load all videos from Gallery Videos folder
  const videoModules = import.meta.glob('/public/images/Gallery Videos/*', { eager: true });
  const videoPaths = Object.keys(videoModules)
    .filter(path => /\.(mp4|webm|mov|avi|mkv)$/i.test(path))
    .map(path => path.replace('/public', ''))
    .sort();

  const videos = videoPaths.map((path, index) => {
    // Extract filename without extension for title
    const fileName = path.split('/').pop() || '';
    const title = fileName.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
    return {
      id: index,
      url: path,
      title: title,
    };
  });

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
// Scroll functions for Photos and Videos sections
  const scrollToPhotos = () => {
    if (!photosRef.current) return;
    const y = photosRef.current.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const scrollToVideos = () => {
    if (!videosRef.current) return;
    const y = videosRef.current.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };


  return (
    <>
    <Navigation />

    {/* Side Navigation Buttons */}
    <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col gap-10 z-50 text-white text-4xl">
      <button
        onClick={scrollToPhotos}
        className="px-10 py-5 
                  rounded-2xl 
                  bg-pink-600 
                  text-white 
                  font-bold 
                  shadow-[0_0_15px_rgba(236,72,153,0.8)] 
                  hover:shadow-[0_0_25px_rgba(236,72,153,1)] 
                  hover:bg-pink-500 
                  border-4 
                  border-pink-400 
                  transition-all 
                  duration-300"
      >
        Photos
      </button>

      <button
        onClick={scrollToVideos}
        className="px-10 py-5 
                  rounded-2xl 
                  bg-pink-600 
                  text-white 
                  font-bold 
                  shadow-[0_0_15px_rgba(236,72,153,0.8)] 
                  hover:shadow-[0_0_25px_rgba(236,72,153,1)] 
                  hover:bg-pink-500 
                  border-4 
                  border-pink-400 
                  transition-all 
                  duration-300"
      >
        Videos
      </button>
    </div>

    <div className="min-h-screen bg-black text-white" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
      <div className="max-w-7xl mx-auto px-4" ref={photosRef}>
        <h2 className="text-4xl font-bold mb-4 text-center">Photos</h2>
        <div className="w-60 h-1 bg-pink-500 mx-auto mb-8"></div>

        {/* Folder Grid */}
        {!activeFolder && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(folderMap).sort().map(folder => (
              <div
                key={folder}
                onClick={() => setActiveFolder(folder)}
                className="group relative overflow-hidden rounded-lg border-2 border-gray-800 hover:border-pink-500 transition-all cursor-pointer aspect-square flex flex-col items-center justify-center gap-4"
              >
                <FolderClosed className="w-20 h-20 text-pink-400 group-hover:text-pink-500 transition-colors" />

                <p className="text-2xl font-bold text-center">
                  {folder}
                </p>
              </div>
            ))}
          </div>
        )}


        {/* Photo Grid */}
        {activeFolder && (
          <>
            <h3 className="text-3xl font-bold mb-4 text-center">{activeFolder}</h3>
            <button
              onClick={() => setActiveFolder(null)}
              className="mb-6 px-6 py-3 bg-pink-600 rounded-lg"
            >
              Back to Folders
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {folderMap[activeFolder].map(photo => (
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
          </>
        )}

        {/* Videos Section */}
        {videos.length > 0 && (
          <div className="mt-16" ref={videosRef}>
            <h3 className="text-3xl font-bold mb-4 text-center">Videos</h3>
            <div className="w-52 h-1 bg-pink-500 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg border-2 border-gray-800 hover:border-pink-500 transition-all"
                >
                  <div className="relative aspect-video bg-gray-900">
                    <video
                      src={video.url}
                      controls
                      className="w-full h-full object-cover"
                      controlsList="nodownload"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <p className="text-sm font-semibold truncate">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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