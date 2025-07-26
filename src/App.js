import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Assets/Navigation';
import Hero from './Pages/Hero';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import products from './Assets/products';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero bestSellers={products} />} />
          <Route path="/gallery" element={<Gallery bestSellers={products} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;