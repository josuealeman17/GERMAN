import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';


function App() {
  return (

    <>
      <Header />
      {/* Create a Website With Video Background | HTML & CSS */}

      <main className="main">
        <Home />
      </main>

      <About/>
      
    </>
  );
}

export default App;
