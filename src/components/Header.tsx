import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-slate-800/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">O</span>
            </div>
            <span className="text-white text-xl font-bold">Oberig</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">HOME</a>
            <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">ABOUT</a>
            <a href="#offerings" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">OFFERINGS</a>
            <a href="#blog" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">BLOG</a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">CONTACT</a>
          </nav>

          <button className="hidden md:block bg-transparent border border-gray-400 text-gray-300 px-4 py-2 text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
            CALL TO ACTION
          </button>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">HOME</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">ABOUT</a>
              <a href="#offerings" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">OFFERINGS</a>
              <a href="#blog" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">BLOG</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">CONTACT</a>
              <button className="bg-transparent border border-gray-400 text-gray-300 px-4 py-2 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200 w-fit">
                CALL TO ACTION
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;