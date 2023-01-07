import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BikeTours from './components/BikeTours';
import BikeTour from './components/BikeTour';
import Hikes from './components/Hikes';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<BikeTours />} />
            <Route path="/:id" element={<BikeTour />} />
            <Route path="/hikes" element={<Hikes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
