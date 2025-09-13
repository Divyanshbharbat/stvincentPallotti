import React from 'react';
import { Mail, Linkedin, Award, Users } from 'lucide-react';

// Import images from src/images/team folder
import img1 from '../team/d.jpg';
import img2 from '../team/2.jpg';
import img3 from '../team/3.jpg';
import img4 from '../team/4.jpg';
import img5 from '../team/5.jpg';
import img6 from '../team/6.jpg';
import img7 from '../team/7.jpg';
import img8 from '../team/8.jpg';
import img9 from '../team/9.jpg';
import img10 from '../team/10.jpg';
import img11 from '../team/11.jpg';
import img12 from '../team/12.jpg';
import img13 from '../team/13.jpg';

const Team: React.FC = () => {
  const leadership = [
    { name: 'Priyanshu Raut', role: 'CSI MENTOR', image: img1, email: 'president@csi.org', linkedin: '#' },
    { name: 'Shantanu Mangalkar', role: 'PRESIDENT', image: img2, email: 'vp@csi.org', linkedin: '#' },
    { name: 'Bhakti Hiwase', role: 'VICE PRESIDENT', image: img3, email: 'secretary@csi.org', linkedin: '#' },
  ];

  const coreTeam = [
    { name: 'Sanika Yerpude', role: 'Secretary', image: img4, email: 'sanika@csi.org', linkedin: '#' },
    { name: 'Shreya Ghodmare', role: 'Joint Secretary', image: img5, email: 'shreya@csi.org', linkedin: '#' },
    { name: 'Sejal Nimkar', role: 'Event Coordinator', image: img6, email: 'sejal@csi.org', linkedin: '#' },
    { name: 'Pranav Shende', role: 'Technical Head', image: img7, email: 'pranav@csi.org', linkedin: '#' },
    { name: 'Shreya Deshmukh', role: 'Editorial Head', image: img8, email: 'shreyad@csi.org', linkedin: '#' },
    { name: 'Bhumika Verma', role: 'Publicity Head', image: img9, email: 'bhumika@csi.org', linkedin: '#' },
    { name: 'Karan Pawde', role: 'Media Head', image: img10, email: 'karan@csi.org', linkedin: '#' },
    { name: 'Mohit Kumar', role: 'Discipline Head', image: img11, email: 'mohit@csi.org', linkedin: '#' },
    { name: 'Jennifer Joseph', role: 'Treasurer', image: img12, email: 'jennifer@csi.org', linkedin: '#' },
    { name: 'Siona Babu', role: 'Joint Treasurer', image: img13, email: 'siona@csi.org', linkedin: '#' },
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
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-4 border-gray-100 group-hover:border-teal-200 transition-colors"
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
