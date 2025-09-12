import React from 'react';
import { Target, Eye, Award, Users, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Professional Community',
      description: 'Connect with like-minded professionals and industry experts in computer science and IT.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to international conferences, collaborations, and knowledge sharing opportunities.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Platform for showcasing innovative ideas, research, and technological breakthroughs.',
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Awards and recognition for outstanding contributions to the field of computing.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About CSI Forum</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Computer Society of India is the premier organization for computing professionals, 
            dedicated to advancing the art and science of computing.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed"> 
           To promote knowledge sharing and skill development in the field of information technology and emerging domains.

            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-orange-50 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To foster a community of excellence in computing and information technology by nurturing innovation, collaboration, and professional growth among students.

            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* History & Achievements */}
        {/* <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">1965 - Foundation</h4>
                    <p className="text-gray-600">Established as India's first professional society for computing professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">1990s - Digital Revolution</h4>
                    <p className="text-gray-600">Played a key role in India's digital transformation and IT industry growth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2020s - Future Ready</h4>
                    <p className="text-gray-600">Leading initiatives in AI, ML, cybersecurity, and emerging technologies.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">58+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">72</div>
                <div className="text-gray-600">Chapters Nationwide</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">100K+</div>
                <div className="text-gray-600">Members Strong</div>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-gray-600">Events Annually</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;