import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { podcasts } from '../data';
import { Star } from 'lucide-react';

const PodcastGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.podcast-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef}>
      <h1 className="text-4xl font-bold mb-8 text-center">اكتشف أفضل البودكاست</h1>
      <div className="podcast-grid">
        {podcasts.map((podcast) => (
          <Link to={`/podcast/${podcast.id}`} key={podcast.id}>
            <div className="podcast-card card">
              <img
                src={podcast.coverArt}
                alt={podcast.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{podcast.title}</h2>
                <p className="text-gray-400 mb-2">{podcast.host}</p>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span>{podcast.rating}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {podcast.categories.map((category) => (
                    <span
                      key={category}
                      className="text-sm bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PodcastGrid;