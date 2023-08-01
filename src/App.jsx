import * as React from "react";
import './App.css';
import './index.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from "./components/Loading.jsx";
import LandingPage from "./components/Landingpage.jsx";
import NaszaFundacja from './components/Naszafundacja.jsx'
import ProfDrCM from './components/ProfDrCM.jsx'
import Zarzad from './components/Zarzad.jsx'
import Poczatki from './components/Poczatki.jsx'
import Laureaci from './components/Laureaci.jsx'
import Podanie from './components/Podanie.jsx'
import Edmonton from './components/Edmonton.jsx'
import Galeria from './components/Galeria.jsx'
import Particles from './components/particles.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
      <div className="App">
        <Particles/>
    <Router>
      <div className="flex-auto text-red-600 content-center justify-center place-content-center">
        <Navbar />
        <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Nasza Fundacja" element={<NaszaFundacja />} />
          <Route path="/ProfDrCM" element={<ProfDrCM />} />
          <Route path="/Zarzad" element={<Zarzad />} />
          <Route path="/Poczatki" element={<Poczatki />} />
          <Route path="/Laureaci" element={<Laureaci />} />
          <Route path="/Podanie" element={<Podanie />} />
          <Route path="/Edmonton" element={<Edmonton />} />
          <Route path="/Galeria" element={<Galeria />} />
        </Routes>
        </React.Suspense>
        </div>
        </Router>
    </div>
  );
}

export default App;
