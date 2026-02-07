import { Play } from 'lucide-react';

export function VideoPlayer() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Team Video
        </h2>
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border-4 border-pink-500">
          {/* Placeholder for video - replace with actual video URL */}
          <video
            className="w-full h-full"
            controls
            poster="https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlYW0lMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NzA0NzczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          >
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play button overlay - shown until video is played */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors cursor-pointer group">
            <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/50">
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-gray-400">
          Watch our team in action at the regional competition
        </p>
      </div>
    </section>
  );
}