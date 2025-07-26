import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Assets/Navigation';
import Hero from './Pages/Hero';
import Gallery from './Pages/Gallery';
import Footer from './Pages/Footer';

function App() {
  const bestSellers = [
    { title: 'Antique Compass', description: 'A beautifully preserved brass compass from the 19th century.', price: '120', image: 'product1.jpg', rating: 4.5 },
    { title: 'Vintage Typewriter', description: 'Fully functional Remington typewriter, perfect for collectors.', price: '250', image: 'product2.jpg', rating: 5 },
    { title: 'Old World Map', description: 'Hand-drawn map of the world, circa 1750, framed.', price: '180', image: 'product3.webp', rating: 4.0 },
    { title: 'Victorian Locket', description: 'Gold-plated locket with intricate engravings, holds two photos.', price: '95', image: 'product4.webp', rating: 3.5 },
    { title: 'Pocket Watch', description: 'Swiss-made silver pocket watch, excellent working condition.', price: '200', image: 'product5.webp', rating: 4.5 },
    { title: 'Ceramic Vase', description: 'Hand-painted ceramic vase, unique design, perfect for home decor.', price: '75', image: 'product6.webp', rating: 4.0 },
    { title: 'Vintage Camera', description: 'Classic film camera, ideal for photography enthusiasts.', price: '150', image: 'product7.jpg', rating: 5 },
    { title: 'Leather Bound Book', description: 'Rare first edition novel, beautifully bound in leather.', price: '300', image: 'product8.jpg', rating: 4.0 },
    { title: 'Crystal Decanter', description: 'Elegant crystal decanter with matching glasses, perfect for spirits.', price: '110', image: 'product9.jpeg', rating: 3.5 }
  ];

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery bestSellers={bestSellers} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;