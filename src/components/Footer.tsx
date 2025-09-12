import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Magazine', href: '#magazine' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const resources = [
    { name: 'Membership', href: '#' },
    { name: 'Downloads', href: '#' },
    { name: 'Research Papers', href: '#' },
    { name: 'Career Center', href: '#' },
    { name: 'Industry Reports', href: '#' },
    { name: 'Certification', href: '#' },
  ];

  const community = [
    { name: 'Student Chapters', href: '#' },
    { name: 'Professional Groups', href: '#' },
    { name: 'Special Interest Groups', href: '#' },
    { name: 'Awards & Recognition', href: '#' },
    { name: 'Conference Proceedings', href: '#' },
    { name: 'Technical Standards', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with CSI Forum</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest updates on events, workshops, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/20 focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
             <div className="flex items-center space-x-3 mb-6">
  <img
    src="\images\icons\csi_logo.png"   // replace with your photo path
    alt="CSI Forum"
    className="w-24 h-24 rounded-lg object-cover"
  />
  <span className="text-xl font-bold">CSI Student Chapter</span>
</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
               The CSI Student Chapter at St. Vincent Pallotti College of Engineering & Technology is a platform for students and faculty to connect, share knowledge, and explore innovation together.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">csi.svpcetngp@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span className="text-sm">+91 95291 23561</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-400 mt-0.5" />
                  <span className="text-sm">St.Vincent Pallotti<br />College of Engineering and Techology, Nagpur</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center space-x-1 group"
                    >
                      <span>→</span>
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors text-sm flex items-center space-x-1 group"
                    >
                      <span>→</span>
                      <span className="group-hover:translate-x-1 transition-transform">{resource.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-lg font-bold mb-6">Community</h4>
              <ul className="space-y-3 mb-8">
                {community.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center space-x-1 group"
                    >
                      <span>→</span>
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h5 className="font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-400">
              <span>© {currentYear} Computer Society of India. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Code of Conduct</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the tech community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;