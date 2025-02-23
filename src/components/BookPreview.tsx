import React from 'react';
import { BookPage } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookPreviewProps {
  pages: BookPage[];
}

export function BookPreview({ pages }: BookPreviewProps) {
  const [currentPage, setCurrentPage] = React.useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      <div className="aspect-[3/4] relative">
        <img
          src={pages[currentPage].imageUrl}
          alt={pages[currentPage].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-xl font-semibold text-white">{pages[currentPage].title}</h3>
          <p className="text-gray-300 mt-2 line-clamp-3">{pages[currentPage].content}</p>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={prevPage}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextPage}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}