import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface CalendarEvent {
  date?: Date;
  startDate?: Date;
  endDate?: Date;
  title: string;
  color?: string;
  description?: string;
  time?: string;
  location?: string;
  moreInfoLink?: string;
}

interface EventCalendarProps {
  events: CalendarEvent[];
}

export function EventCalendar({ events }: EventCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];
    
    // Add empty cells for days before the month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const getEventsForDate = (day: number | null) => {
    if (!day) return [];
    
    const dateToCheck = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    return events.filter(event => {
      // Check for single-day events
      if (event.date) {
        return (
          event.date.getDate() === dateToCheck.getDate() &&
          event.date.getMonth() === dateToCheck.getMonth() &&
          event.date.getFullYear() === dateToCheck.getFullYear()
        );
      }
      
      // Check for date range events
      if (event.startDate && event.endDate) {
        const checkTime = dateToCheck.getTime();
        const startTime = new Date(event.startDate.getFullYear(), event.startDate.getMonth(), event.startDate.getDate()).getTime();
        const endTime = new Date(event.endDate.getFullYear(), event.endDate.getMonth(), event.endDate.getDate()).getTime();
        return checkTime >= startTime && checkTime <= endTime;
      }
      
      return false;
    });
  };

  const isToday = (day: number | null) => {
    if (!day) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const formatEventDate = (event: CalendarEvent) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    if (event.date) {
      return `${monthNames[event.date.getMonth()]} ${event.date.getDate()}, ${event.date.getFullYear()}`;
    }
    
    if (event.startDate && event.endDate) {
      return `${monthNames[event.startDate.getMonth()]} ${event.startDate.getDate()} - ${monthNames[event.endDate.getMonth()]} ${event.endDate.getDate()}, ${event.endDate.getFullYear()}`;
    }
    
    return '';
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="w-full">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={goToPreviousMonth}
          className="text-pink-500 hover:bg-pink-500/20 rounded-lg p-3 transition-colors"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
        <h2 className="text-4xl font-bold text-white">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={goToNextMonth}
          className="text-pink-500 hover:bg-pink-500/20 rounded-lg p-3 transition-colors"
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {daysOfWeek.map(day => (
          <div
            key={day}
            className="text-center text-gray-400 font-bold text-xl py-4"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => {
          const dayEvents = getEventsForDate(day);
          const todayHighlight = isToday(day);

          return (
            <div
              key={index}
              className={`
                min-h-[140px] border-2 rounded-lg p-3 
                ${day ? 'bg-gray-800 border-gray-700' : 'bg-transparent border-transparent'}
                ${todayHighlight ? 'border-pink-500 bg-pink-500/10' : ''}
                hover:border-pink-500/50 transition-colors
              `}
            >
              {day && (
                <>
                  <div className={`text-xl font-bold mb-2 ${todayHighlight ? 'text-pink-500' : 'text-white'}`}>
                    {day}
                  </div>
                  <div className="space-y-1">
                    {dayEvents.slice(0, 3).map((event, eventIndex) => (
                      <button
                        key={eventIndex}
                        className={`text-xs px-2 py-1 rounded truncate w-full text-left ${
                          event.color || 'bg-pink-500'
                        } text-white font-medium cursor-pointer hover:opacity-80 transition-opacity`}
                        title={event.title}
                        onClick={() => handleEventClick(event)}
                      >
                        {event.title}
                      </button>
                    ))}
                    {dayEvents.length > 3 && (
                      <div className="text-xs text-gray-400 px-2">
                        +{dayEvents.length - 3} more
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Event Modal */}
      {isModalOpen && selectedEvent && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-900 border-4 border-pink-500 p-8 rounded-xl shadow-2xl shadow-pink-500/30 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-bold text-white mb-4">{selectedEvent.title}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">Date:</span>
                <span className="text-white">{formatEventDate(selectedEvent)}</span>
              </div>
              {selectedEvent.time && (
                <div className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">Time:</span>
                  <span className="text-white">{selectedEvent.time}</span>
                </div>
              )}
              {selectedEvent.location && (
                <div className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">Location:</span>
                  <span className="text-white">{selectedEvent.location}</span>
                </div>
              )}
              {selectedEvent.description && (
                <div className="flex items-start gap-2">
                  <span className="text-white">{selectedEvent.description}</span>
                </div>
              )}
              {selectedEvent.moreInfoLink && (
                <div className="flex items-center justify-center gap-2 text-center">
                  <span className="text-pink-500 font-bold"><a href={selectedEvent.moreInfoLink} target="_blank" rel="noopener noreferrer"><u>MORE</u></a></span>
                </div>
              )}
            </div>
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}