import React from 'react';
import { BookMarked, Gift, Instagram, ChevronRight, Star, BookOpen } from 'lucide-react';
import { BookPreview } from './components/BookPreview';
import { BookPage } from './types';

// IMG - VITE
import bookFrontImg from '../img/book-front-cover.png';


const SAMPLE_PAGES: BookPage[] = [
  {
    id: 1,
    title: "Chapter 1: The Beginning",
    content: "In the depths of the digital realm, where code meets creativity, a story begins to unfold...",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Chapter 2: The Journey",
    content: "Through valleys of algorithms and mountains of data, our protagonist ventures forth...",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Chapter 3: The Discovery",
    content: "Hidden within the ancient codebase, a secret waited to be uncovered...",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            The Art of Code
          </div>
          <div className="flex items-center gap-6">
            <a href="#preview" className="text-gray-300 hover:text-white transition-colors">Preview</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a 
              href="https://instagram.com/theartofcode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
      
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
          <img src={bookFrontImg} alt="Sak Yant" className="w-full h-full object-cover opacity-30"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-yellow-500">High Definition Vectorial Images</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Sak Yant
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Stencil Book
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
            The Art of Sacred Thai Tattoos.
            </p>
            <div className="flex flex-wrap gap-4">
              <form action="https://www.paypal.com/donate" method="post" target="_blank" className="inline-block">
                <input type="hidden" name="business" value="your-paypal-email@example.com" />
                <input type="hidden" name="currency_code" value="USD" />
                <button type="submit" className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Support via PayPal
                </button>
              </form>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-30 blur-lg"></div>
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <BookPreview pages={SAMPLE_PAGES} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">300+ Pages</h3>
              <p className="text-gray-400">Comprehensive coverage of essential concepts, patterns, and best practices in software development.</p>
              <ChevronRight className="w-6 h-6 mt-6 text-blue-500 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300">
              <BookMarked className="w-12 h-12 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Practical Examples</h3>
              <p className="text-gray-400">Real-world applications and code samples that demonstrate effective problem-solving techniques.</p>
              <ChevronRight className="w-6 h-6 mt-6 text-purple-500 group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300">
              <Gift className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Bonus Content</h3>
              <p className="text-gray-400">Additional resources, exercises, and exclusive access to our community of developers.</p>
              <ChevronRight className="w-6 h-6 mt-6 text-yellow-500 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 Sak Yant Stencil Book. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#preview" className="text-gray-400 hover:text-white transition-colors">Preview</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a 
                href="https://instagram.com/theartofcode" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow us</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
