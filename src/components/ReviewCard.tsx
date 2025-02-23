import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300 mb-4">{review.content}</p>
      <p className="text-gray-400 text-sm">- {review.author}</p>
    </div>
  );
}