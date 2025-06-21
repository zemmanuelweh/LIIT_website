import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Enrollment from './pages/Enrollment';
import Consulting from './pages/Consulting';
import News from './pages/News';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import StudentPortal from './pages/StudentPortal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/student-portal" element={<StudentPortal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;