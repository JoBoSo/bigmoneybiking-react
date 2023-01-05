import BikeTours from './BikeTours';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        <BikeTours />
      </div>
      <Footer />
    </div>
  );
}

export default App;
