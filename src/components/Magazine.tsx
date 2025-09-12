import React from 'react';
import { Download, Eye, Calendar, BookOpen } from 'lucide-react';

const Magazine = () => {
  const magazines = [
    {
      id: 1,
      title: 'Innovision',
      issue: 'September 2025',
      volume: 'Vol. 1',
      coverImage:
        '/images/icons/magzine_png.png',
      topics: ['Artificial Intelligence', 'Quantum Computing', 'Cybersecurity'],
      pages: 64,
      featured: true,
      pdfUrl: '/magazines/september-2024.pdf',
    },
    {
      id: 2,
      title: 'CSI Communications',
      issue: 'August 2024',
      volume: 'Vol. 48, No. 5',
      coverImage:
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Cloud Computing', 'IoT Solutions', 'Digital Transformation'],
      pages: 58,
      pdfUrl: '/magazines/august-2024.pdf',
    },
    {
      id: 3,
      title: 'CSI Communications',
      issue: 'July 2024',
      volume: 'Vol. 48, No. 4',
      coverImage:
        'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Machine Learning', 'Data Science', 'Ethics in AI'],
      pages: 72,
      pdfUrl: '/magazines/july-2024.pdf',
    },
    {
      id: 4,
      title: 'CSI Communications',
      issue: 'June 2024',
      volume: 'Vol. 48, No. 3',
      coverImage:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Blockchain Technology', 'Fintech Innovation', 'Smart Cities'],
      pages: 66,
      pdfUrl: '/magazines/june-2024.pdf',
    },
    {
      id: 5,
      title: 'CSI Communications',
      issue: 'May 2024',
      volume: 'Vol. 48, No. 2',
      coverImage:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['5G Technology', 'Edge Computing', 'Mobile Development'],
      pages: 60,
      pdfUrl: '/magazines/may-2024.pdf',
    },
    {
      id: 6,
      title: 'Innovision',
      issue: 'September 2025',
      volume: 'Vol. 1',
      coverImage:
        'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Web3.0', 'Virtual Reality', 'Green Computing'],
      pages: 68,
      pdfUrl: '/magazines/april-2024.pdf',
    },
  ];

  const featuredMagazine = magazines.find((mag) => mag.featured);
  const regularMagazines = magazines.filter((mag) => !mag.featured);

  return (
    <section id="magazine" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Magazine</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our monthly publication featuring the latest insights,
            research, and trends in computing and technology.
          </p>
        </div>

        {/* Featured Magazine */}
        {featuredMagazine && (
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Latest Issue
                  </span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">{featuredMagazine.title}</h3>
                <p className="text-xl text-gray-600 mb-1">{featuredMagazine.issue}</p>
                <p className="text-gray-500 mb-6">{featuredMagazine.volume}</p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Featured Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredMagazine.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">

                    
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Published Yearly</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://drive.usercontent.google.com/u/0/uc?id=1r5Ncv50FSg9Zxx4RFbxInVM7t5wy21-6&export=download"
                    download={`${featuredMagazine.title}-${featuredMagazine.issue}.pdf`}
                    className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95"
                  >
                     <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1r5Ncv50FSg9Zxx4RFbxInVM7t5wy21-6/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview Online</span>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={featuredMagazine.coverImage}
                    alt={`${featuredMagazine.title} ${featuredMagazine.issue}`}
                    className="w-full h-90 object-cover rounded-lg"
                  />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scrollable Magazines */}
        {/* <h3 className="text-2xl font-bold text-gray-900 mb-6">Previous Issues</h3> */}
        {/* <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {regularMagazines.map((mag) => (
            <div
              key={mag.id}
              className="min-w-[250px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
            >
              <img
                src={mag.coverImage}
                alt={`${mag.title} ${mag.issue}`}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900">{mag.title}</h4>
                <p className="text-gray-600 text-sm">{mag.issue}</p>
                <p className="text-gray-400 text-xs mb-3">{mag.volume}</p>

                <div className="flex flex-col gap-2">
                  <a
                    href={mag.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 rounded-lg text-sm font-semibold text-center hover:shadow-md transition"
                  >
                    Preview
                  </a>
                  <a
                    href={mag.pdfUrl}
                    download={`${mag.title}-${mag.issue}.pdf`}
                    className="w-full border-2 border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold text-center hover:border-blue-500 hover:text-blue-600 transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Magazine;
