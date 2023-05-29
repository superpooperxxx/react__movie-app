import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.scss';

// Pages
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { useState } from 'react';
import { Movies } from './pages/Movies';
import { TvShows } from './pages/TvShows';
import { Bookmarks } from './pages/Bookmarks';
import { Auth } from './pages/Auth';

const App = () => {
  const [auth, setAuth] = useState(false);
  const { pathname } = useLocation();

  if (pathname === '/auth' || pathname === '/404') {
    return (
      <Routes>
        <Route path="/auth" element={<Auth />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    );
  } else {
    return (
      <>
        <nav>Navigation</nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          {auth && <Route path="/bookmarks" element={<Bookmarks />} />}

          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </>
    );
  }
};

export default App;
