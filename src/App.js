import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';

import { Counter } from './features/counter/Counter';
import Home from './pages/Home';
import Video from './pages/Video';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:videoId' element={<Video />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
