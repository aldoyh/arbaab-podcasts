import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { podcasts } from '../data';
import { Star, Clock, Calendar, Play } from 'lucide-react';

const PodcastDetail = () => {
  const { id } = useParams();
  const podcast = podcasts.find(p => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.gsap-reveal', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!podcast) {
    return <div className="text-center text-2xl">لم يتم العثور على البودكاست</div>;
  }

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="gsap-reveal">
          <img
            src={podcast.coverArt}
            alt={podcast.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="gsap-reveal text-4xl font-bold">{podcast.title}</h1>
          <div className="gsap-reveal flex items-center space-x-4 space-x-reverse">
            <Star className="h-6 w-6 text-yellow-400 fill-current" />
            <span className="text-xl">{podcast.rating}</span>
          </div>
          <p className="gsap-reveal text-gray-300">{podcast.description}</p>
          <div className="gsap-reveal">
            <h3 className="text-xl font-bold mb-2">المقدم</h3>
            <p className="text-indigo-400">{podcast.host}</p>
          </div>
          <button className="gsap-reveal btn-primary">
            اشترك الآن
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="gsap-reveal text-2xl font-bold mb-6">الحلقات</h2>
        <div className="space-y-4">
          {podcast.episodes.map((episode) => (
            <div
              key={episode.id}
              className="gsap-reveal card p-4 hover:bg-[var(--primary)] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Play className="h-8 w-8 text-indigo-500" />
                  <div>
                    <h3 className="font-bold">{episode.title}</h3>
                    <p className="text-gray-400">{episode.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 ml-1" />
                    <span>{episode.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 ml-1" />
                    <span>{episode.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;