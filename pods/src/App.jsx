import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import LandingPage from './pages/LandingPage';
import CreatePodPage from './pages/CreatePodPage';
import PodListPage from './pages/PodListPage';
import EditPodPage from './pages/EditPodPage';
import PodDetailPage from './pages/PodDetailPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} /> {/* Default route to LandingPage */}
          <Route path="/create" element={<CreatePodPage />} />
          <Route path="/pods" element={<PodListPage />} />
          <Route path="/pods/:id/edit" element={<EditPodPage />} /> {/* Route to edit a specific pod */}
          <Route path="/pods/:id" element={<PodDetailPage />} />   {/* Route to view details of a specific pod */}
        </Route>
      </Routes>
  );
}

export default App;