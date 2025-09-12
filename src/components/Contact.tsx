import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react'; // ⬅️ Removed MapPin

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['csi.svpcetngp@gmail.com', 'mangalkarshantanu@gmail.com'],
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9529123561', '+91 8788966154'],
      color: 'teal',
    },
    
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      teal: 'bg-teal-100 text-teal-600',
      purple: 'bg-purple-100 text-purple-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, suggestions, or want to get involved? We'd love to hear from you. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${getColorClasses(
                      item.color
                    )} flex items-center justify-center mb-4`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions only (removed Map) */}
          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-6 text-white shadow-md">
            <h4 className="font-bold text-xl mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <a
                href="#events"
                className="block hover:text-blue-200 transition-colors"
              >
                → Register for upcoming events
              </a>
              <a
                href="#magazine"
                className="block hover:text-blue-200 transition-colors"
              >
                → Download latest magazine
              </a>
              <a
                href="#team"
                className="block hover:text-blue-200 transition-colors"
              >
                → Learn about our team
              </a>
              <a
                href="#about"
                className="block hover:text-blue-200 transition-colors"
              >
                → Discover our mission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
