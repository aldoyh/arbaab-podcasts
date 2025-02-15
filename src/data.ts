import { Podcast } from './types';

export const podcasts: Podcast[] = [
  {
    id: '1',
    title: 'صباح الخير تكنولوجيا',
    host: 'أحمد محمد',
    coverArt: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80',
    description: 'بودكاست تكنولوجي يناقش أحدث التطورات في عالم التقنية',
    rating: 4.8,
    categories: ['تكنولوجيا', 'أخبار'],
    episodes: [
      {
        id: 'e1',
        title: 'مستقبل الذكاء الاصطناعي',
        duration: '45:00',
        date: '2024-03-15',
        description: 'نناقش تأثير الذكاء الاصطناعي على حياتنا اليومية'
      }
    ]
  },
  {
    id: '2',
    title: 'حديث المساء',
    host: 'سارة أحمد',
    coverArt: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80',
    description: 'حوارات ثقافية متنوعة مع شخصيات ملهمة',
    rating: 4.6,
    categories: ['ثقافة', 'مجتمع'],
    episodes: [
      {
        id: 'e2',
        title: 'الأدب العربي المعاصر',
        duration: '50:00',
        date: '2024-03-14',
        description: 'نستكشف روائع الأدب العربي المعاصر'
      }
    ]
  }
];