import React from 'react';
import { Mail, Linkedin, Award, Users } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Priyanshu Raut',
      role: 'CSI MENTOR',
      image: '/images/1.jpg',
      email: 'president@csi.org',
      linkedin: '#',
    },
    {
      name: 'Shantanu Mangalkar',
      role: 'PRESIDENT',
      image: '/images/2.jpg',
      email: 'vp@csi.org',
      linkedin: '#',
    },
    {
      name: 'Bhakti Hiwase',
      role: 'VICE PRESIDENT',
      image: '/images/3.jpg',
      email: 'secretary@csi.org',
      linkedin: '#',
    },
  ];

  const coreTeam = [
    {
      name: 'Sanika Yerpude',
      role: 'Secretary',
      image: '/images/4.jpg',
      email: 'sanika@csi.org',
      linkedin: '#',
    },
    {
      name: 'Shreya Ghodmare',
      role: 'Joint Secretary',
      image: '/images/5.jpg',
      email: 'shreya@csi.org',
      linkedin: '#',
    },
    {
      name: 'Sejal Nimkar',
      role: 'Event Coordinator',
      image: '/images/6.jpg',
      email: 'sejal@csi.org',
      linkedin: '#',
    },
    {
      name: 'Pranav Shende',
      role: 'Technical Head',
      image: '/images/7.jpg',
      email: 'pranav@csi.org',
      linkedin: '#',
    },
    {
      name: 'Shreya Deshmukh',
      role: 'Editorial Head',
      image: '/images/8.jpg',
      email: 'shreyad@csi.org',
      linkedin: '#',
    },
    {
      name: 'Bhumika Verma',
      role: 'Publicity Head',
      image: '/images/9.jpg',
      email: 'bhumika@csi.org',
      linkedin: '#',
    },
    {
      name: 'Karan Pawde',
      role: 'Media Head',
      image: '/images/10.jpg',
      email: 'karan@csi.org',
      linkedin: '#',
    },
    {
      name: 'Mohit Kumar',
      role: 'Discipline Head',
      image: '/images/11.jpg',
      email: 'mohit@csi.org',
      linkedin: '#',
    },
    {
      name: 'Jennifer Joseph',
      role: 'Treasurer',
      image: '/images/12.jpg',
      email: 'jennifer@csi.org',
      linkedin: '#',
    },
    {
      name: 'Siona Babu',
      role: 'Joint Treasurer',
      image: '/images/13.jpg',
      email: 'siona@csi.org',
      linkedin: '#',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals and volunteers who drive CSI Forum's mission of technological excellence and community building.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900">Leadership Team</h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                <p className="text-blue-600 font-semibold text-lg mb-4">{leader.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${leader.email}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-teal-600" />
              <h3 className="text-3xl font-bold text-gray-900">Core Team</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-teal-200 transition-all group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-3 border-gray-100 group-hover:border-teal-200 transition-colors"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
