// App.jsx
import './style.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import WhoWeAre from "./components/WhoWeAre";
import Contactus from './components/contactus';
import Ourservices from './components/ourservices';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header /> {/* Navbar component with Links */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
      <Route path='/contactus' element={<Contactus/>}/>
         <Route path="/ourservices" element={<Ourservices />} />
      </Routes>
    </Router>
  );
}

export default App;
