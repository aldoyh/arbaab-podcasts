import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import PodcastGrid from './components/PodcastGrid';
import PodcastDetail from './components/PodcastDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--primary)]">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<PodcastGrid />} />
            <Route path="/podcast/:id" element={<PodcastDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;