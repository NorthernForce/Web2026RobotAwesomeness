import { Calendar, Clock } from 'lucide-react';
import { EventCalendar } from './components/EventCalendar';
import { Navigation } from './components/Navigation';
import { LinksSection } from './components/LinksSection';
import { Footer } from './components/Footer';

export function NewsPage() {
  // Define calendar events
  const events = [
    // month is 0-indexed, so 1 = February
    { 
      date: new Date(2040, 1, 4), 
      title: 'why r u here',
      time: '6:00 PM - 8:00 PM',
      location: 'Example Location',
      description: 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah', 
    },

    // Pine Tree - Falmouth, ME
    { 
      startDate: new Date(2026, 2, 6), 
      endDate: new Date(2026, 2, 8), 
      title: 'Week 1 - Pine Tree',
      color: 'bg-purple-600',
      time: 'All Day',
      location: 'Falmouth, ME',
      description: 'FIRST Robotics Week 1 Competition - our team will compete against 20+ alliences from across the region. Good luck Northern Force!',
      moreInfoLink: 'https://www.thebluealliance.com/event/2026mefal#teams',
    },

    // UNH - Durham, NH
    { 
      startDate: new Date(2026, 2, 27), 
      endDate: new Date(2026, 2, 29), 
      title: 'Week 4 - UNH',
      color: 'bg-purple-600',
      time: 'All Day',
      location: 'Durham, NH',
      description: 'FIRST Robotics Week 4 Competition - our team will compete against 35+ alliences from across the region. Good luck Northern Force!',
      moreInfoLink: 'https://www.thebluealliance.com/event/2026nhdur'
    },

    // World Championship - Houston, TX
    { 
      startDate: new Date(2026, 4, 27), 
      endDate: new Date(2026, 4, 29), 
      title: 'World Championship - Houston, TX',
      color: 'bg-purple-600',
      time: 'All Day',
      location: 'Houston, TX',
      description: 'If our team qualifies, we will compete in the FIRST Robotics World Championship against the top alliences. This will take a lot of effort, and donations would be appreciated \(no current donation tab\)! Good luck Northern Force!',
    },
  ];

  const newsItems = [
    {
      title: 'example news item',
      date: 'January 4, 2040',
      content: 'text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example text example',
    },
  ];

  // Get the three closest upcoming events after today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const upcomingEvents = events
    .filter(event => {
      const eventDate = event.startDate || event.date;
      return eventDate > today;
    })
    .sort((a, b) => {
      const dateA = a.startDate || a.date;
      const dateB = b.startDate || b.date;
      return dateA.getTime() - dateB.getTime();
    })
    .slice(0, 3);

  const formatEventDate = (event: typeof events[0]) => {
    const startDate = event.startDate || event.date;
    if (event.endDate) {
      return `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${event.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    }
    return startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <div className="max-w-[1800px] mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Team News & Events
        </h1>

        {/* Full Page Calendar Section */}
        <div className="mb-8">
          <div className="bg-gray-900 border-4 rounded-xl p-8 lg:p-16 shadow-2xl" style={{ borderColor: '#db3e79', boxShadow: '0 25px 50px -12px rgba(219, 62, 121, 0.2)' }}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Calendar className="w-12 h-12" style={{ color: '#db3e79' }} />
              <h2 className="text-4xl font-bold text-white">Event Calendar</h2>
            </div>
            
            <EventCalendar events={events} />
          </div>
        </div>

        {/* Upcoming Events and News in Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div className="bg-gray-900 border-2 rounded-lg p-8" style={{ borderColor: '#db3e79' }}>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-7 h-7" style={{ color: '#db3e79' }} />
              <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
            </div>
            <ul className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <li key={index} className="border-l-4 border-pink-500 pl-4 py-2">
                  <div className="text-pink-500 font-bold text-lg">{formatEventDate(event)}</div>
                  <div className="text-white text-lg">{event.title}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div className="bg-gray-900 border-2 rounded-lg p-8" style={{ borderColor: '#db3e79' }}>
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