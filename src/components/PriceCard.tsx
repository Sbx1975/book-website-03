import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import { ExchangeData } from '../types';

interface PriceCardProps {
  data: ExchangeData;
}

export function PriceCard({ data }: PriceCardProps) {
  const chartData = data.sparkline_in_7d.price.map((price, index) => ({
    price,
    timestamp: index,
  }));

  const formatPrice = (price: number) => {
    if (typeof price !== 'number' || isNaN(price)) return '$0.00';
    return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{data.name}</h3>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div>
          <p className="text-xs text-gray-500">Current</p>
          <p className="font-bold">{formatPrice(data.current_price)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Min</p>
          <p className="font-semibold">{formatPrice(data.low_24h)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Max</p>
          <p className="font-semibold">{formatPrice(data.high_24h)}</p>
        </div>
      </div>

      <div className="h-24 mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`gradient-${data.name}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip 
              formatter={(value: number) => [formatPrice(value), 'Price']}
              contentStyle={{ background: 'rgba(255, 255, 255, 0.9)', border: 'none', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#3b82f6"
              fillOpacity={1}
              fill={`url(#gradient-${data.name})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}