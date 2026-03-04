import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Assets/Navigation';
import Hero from './Pages/Hero';
import Gallery from './Pages/Gallery';
import ProductDetails from './Pages/ProductDetails';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;