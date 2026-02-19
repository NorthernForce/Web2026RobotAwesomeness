export function VideoPlayer() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Competition Example
        </h2>
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border-4 border-[#db3e79]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_fybREErgyM?autoplay=1&mute=1"
            title="Northern Force Robotics Team Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="text-center mt-4 text-gray-400">
          Watch our team in action at the regional competition!
        </p>
      </div>
    </section>
  );
}