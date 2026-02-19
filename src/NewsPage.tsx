import { Calendar, Clock } from 'lucide-react';
import { EventCalendar } from './components/EventCalendar';
import { Navigation } from './components/Navigation';
import { LinksSection } from './components/LinksSection';
import { Footer } from './components/Footer';

export function NewsPage() {
  // Define calendar events
  const events = [
    // month is 0-indexed, so 1 = February
    { date: new Date(2026, 1, 25), title: 'example' },

    // Pine Tree - Falmouth, ME
    { 
      startDate: new Date(2026, 2, 6), 
      endDate: new Date(2026, 2, 8), 
      title: 'Week 1 - Pine Tree (Falmouth, ME)',
      color: 'bg-purple-600'
    },

    // UNH - Durham, NH
    { 
      startDate: new Date(2026, 2, 27), 
      endDate: new Date(2026, 2, 29), 
      title: 'Week 4 - UNH',
      color: 'bg-purple-600'
    },
  ];

  const newsItems = [
    {
      title: 'example news item 1',
      date: 'January 4, 2026',
      content: 'text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <div className="max-w-[1800px] mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Team News & Events
        </h1>

        {/* Full Page Calendar Section */}
        <div className="mb-8">
          <div className="bg-gray-900 border-4 border-pink-500 rounded-xl p-8 lg:p-16 shadow-2xl shadow-pink-500/20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Calendar className="w-12 h-12 text-pink-500" />
              <h2 className="text-4xl font-bold text-white">Event Calendar</h2>
            </div>
            
            <EventCalendar events={events} />
          </div>
        </div>

        {/* Upcoming Events and News in Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div className="bg-gray-900 border-2 border-pink-500 rounded-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-7 h-7 text-pink-500" />
              <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
            </div>
            <ul className="space-y-4">
              <li className="border-l-4 border-pink-500 pl-4 py-2">
                <div className="text-pink-500 font-bold text-lg">Example Date</div>
                <div className="text-white text-lg">Example</div>
                <div className="text-gray-400 text-sm mt-1">Example Time</div>
              </li>
            </ul>
          </div>

          {/* Latest News */}
          <div className="bg-gray-900 border-2 border-pink-500 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Latest News</h3>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <article
                  key={index}
                  className="border-l-4 border-pink-500 pl-4 py-2"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LinksSection />
      <Footer />
    </div>
  );
}