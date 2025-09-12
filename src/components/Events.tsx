import React from 'react';
import { Calendar, MapPin, Users, Clock, ExternalLink, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: '🎓 Crack SIH with CSI | Exclusive Mentorship Session 🎓',
      date: '2025-09-24',
      time: '2:00 PM to 3:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      description: '🎯 Discover the journey of a SIH winner as we explore proven strategies to crack SIH, effective team building and collaboration tips, and methods for crafting innovative solutions and MVPs. ⚡ Learn powerful pitching techniques to impress judges, and don’t miss the 💡 live Q&A session with an exclusive mentorship opportunity.'
,
      image: '/images/icons/sih webinar.jpg',
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
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const pastEvents = [
    {
      title: 'Cloud Computing Workshop',
      date: '2024-08-15',
      attendees: 120,
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Data Science Bootcamp',
      date: '2024-07-20',
      attendees: 180,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Mobile App Development',
      date: '2024-06-10',
      attendees: 95,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Workshop': return 'bg-blue-100 text-blue-800';
      case 'Webinar': return 'bg-teal-100 text-teal-800';
      case 'Summit': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Events, Workshops & Webinars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community events to learn, network, and grow in your professional journey.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
          
          {/* Featured Event */}
          {upcomingEvents.filter(event => event.featured).map(event => (
            <div key={event.id} className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 mb-8 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Event
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white`}>
                      {event.type}
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold mb-4">{event.title}</h4>
                  <p className="text-blue-100 mb-6">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* <Users className="w-4 h-4" />
                      <span className="text-sm">{event.attendees} registered</span> */}
                    </div>
                  </div>
                  
                  {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button> */}
                </div>
                
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Regular Events Grid */}
          {/* <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => !event.featured).map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{event.attendees} registered</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center space-x-2">
                    <span>Register</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Past Events */}
        {/* <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Events; 