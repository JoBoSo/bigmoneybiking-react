import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BikeTours from './BikeTours';
import BikeTour from './BikeTour';
import Hikes from './Hikes';
import Blog from './Blog';
import Subscribe from './Subscribe';

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
