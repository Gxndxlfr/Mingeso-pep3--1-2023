import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PruebaFacilComponent from './Components/PruebaFacilComponent';
import PruebaMediaComponent from './Components/PruebaMediaComponent';
import PruebaDificilComponent from './Components/PruebaDificilComponent';
import NuevaPreguntaComponent from './Components/NuevaPreguntaComponent'
import HomeComponent from './Components/HomeComponent';
import ResultadosComponent from './Components/ResultadosComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/prueba-facil" element={<PruebaFacilComponent />} />
          <Route path="/prueba-media" element={<PruebaMediaComponent />} />
          <Route path="/prueba-dificil" element={<PruebaDificilComponent />} />
          <Route path="/agregar-pregunta" element={<NuevaPreguntaComponent />} />          
          <Route path="/resultados" element={<ResultadosComponent/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
