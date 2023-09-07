
import './App.css';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Customer from './Pages/Customer';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Planning from './Pages/Planning';
import Profit from './Pages/Profit';
import Client from './Pages/Client';
import Carts from './Pages/Carts';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
    <Header/>
     <Home/>
     <Carts/>
     <Planning/>
     <Services/>
     <Profit/>
     <Client/>
     <Customer/>
     <Contact/>
     <Footer/>
    
    </div>
  );
}

export default App;
