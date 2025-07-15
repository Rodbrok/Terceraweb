import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <div className="text-center my-4">        
      </div>
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
