import React from 'react';
import { ImageWithFallback } from './ImagewithFallback';

const products = [
  {
    id: 1,
    name: 'Aura Soundbar S1',
    price: '$450.00',
    image: 'https://images.unsplash.com/photo-1760597371609-d6359b370320?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Focus Headphones',
    price: '$199.00',
    image: 'https://images.unsplash.com/photo-1758348844306-5a0ba556db03?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Smart Desk Lamp',
    price: '$89.00',
    image: 'https://images.unsplash.com/photo-1770319810923-2944895fb5cb?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    name: 'Wireless Mouse Pro',
    price: '$129.00',
    image: 'https://images.unsplash.com/photo-1760597371609-d6359b370320?auto=format&fit=crop&q=80&w=400',
  },
];

export function RelatedProducts() {
  return (
    <section className="py-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden mb-4">
              <ImageWithFallback 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h4>
            <p className="text-sm text-gray-500 mt-1">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
