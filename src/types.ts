export interface Podcast {
  id: string;
  title: string;
  host: string;
  coverArt: string;
  description: string;
  rating: number;
  categories: string[];
  episodes: Episode[];
}

export interface Episode {
  id: string;
  title: string;
  duration: string;
  date: string;
  description: string;
}