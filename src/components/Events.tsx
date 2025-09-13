import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: '🎓 Crack SIH with CSI | Exclusive Mentorship Session 🎓',
      date: '2025-09-14',
      time: '2:00 PM to 3:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      description:
        '🎯 Discover the journey of a SIH winner as we explore proven strategies to crack SIH, effective team building and collaboration tips, and methods for crafting innovative solutions and MVPs. ⚡ Learn powerful pitching techniques to impress judges, and don’t miss the 💡 live Q&A session with an exclusive mentorship opportunity.',
      image: '/images/icons/image.png',
      featured: true,
    },
    {
      id: 2,
      title: 'SIH Webinar',
      date: '2025-09-24',
      time: '2:00 PM to 3:00 PM',
      location: 'Online',
      type: 'Webinar',
      description: 'Latest trends and threats in cybersecurity landscape.',
      image:
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Tech Innovation Summit',
      date: '2024-10-05',
      time: '09:00 AM - 06:00 PM',
      location: 'Mumbai, India',
      attendees: 500,
      type: 'Summit',
      description: 'Bringing together industry leaders and innovators.',
      image:
        'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Events, Workshops & Webinars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community events to learn, network, and grow in your
            professional journey.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Upcoming Events
          </h3>

          {/* Featured Event */}
          {upcomingEvents
            .filter((event) => event.featured)
            .map((event) => (
              <div
                key={event.id}
                className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 mb-8 text-white"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image first on mobile, second on desktop */}
                  <div className="relative order-1 lg:order-2">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>

                  {/* Content second on mobile, first on desktop */}
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured Event
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <h4 className="text-3xl font-bold mb-4">{event.title}</h4>
                    <p className="text-blue-100 mb-6">{event.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <a
                      href="https://forms.gle/5qgBVoB3tWT244rm8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                    >
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
