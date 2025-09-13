  import React, { useState, useEffect } from 'react';
  import { Menu, X, Home, Users, Calendar, BookOpen, Image, Phone, Info } from 'lucide-react';


  const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
      { name: 'Home', href: '#home', icon: Home },
      { name: 'About', href: '#about', icon: Info },
      { name: 'Events', href: '#events', icon: Calendar },
      { name: 'Magazine', href: '#magazine', icon: BookOpen },
      { name: 'Gallery', href: '#gallery', icon: Image },
      { name: 'Team', href: '#team', icon: Users },
      { name: 'Contact', href: '#contact', icon: Phone },
    ];

    const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    };

    return (
    <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        
        {/* Logo Section */}
  <div className="flex items-center">
  <img
    src="/images/icons/CSI_pallotti_logo-removebg-preview.png"
    alt="CSI Logo"
    className="w-14 h-14 object-contain"
  />
  <h1 className="text-xl font-bold text-gray-800 ml-1">CSI SVPCET</h1>
</div>



        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <item.icon className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>

    );
  };

  export default Navigation;