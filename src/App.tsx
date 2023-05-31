import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.scss';

// Pages
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { useState } from 'react';
import { Movies } from './pages/Movies';
import { TvSeries } from './pages/TvSeries';
import { Bookmarks } from './pages/Bookmarks';
import { Auth } from './pages/Auth';
import { Page } from './components/Page';

const App = () => {
  // Temporary
  const [auth, setAuth] = useState(false);
  const { pathname } = useLocation();

  if (pathname === '/auth' || pathname === '/404') {
    return (
      <Routes>
        {!auth && <Route path="/auth" element={<Auth />} />}

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    );
  } else {
    return (
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<TvSeries />} />
          {auth && <Route path="/bookmarks" element={<Bookmarks />} />}

          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Page>
    );
  }
};

export default App;
