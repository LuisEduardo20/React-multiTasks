import './App.css';

import { Routes, Route, Link } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Alarm from './views/Alarm/Alarm';
import Calculator from './views/Calculator/Calculator';
import Stopwatch from './views/Stopwatch/Stopwatch';
import Timer from './views/Timer/Timer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Stopwatch />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/temporizador" element={<Timer />} />
        <Route path="/alarme" element={<Alarm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
