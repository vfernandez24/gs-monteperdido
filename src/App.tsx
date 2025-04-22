import Header from "./components/common/Header";
import Index from "./routes/Index";
import Footer from "./components/common/Footer";
import InfoMonteperdido from "./routes/info/InfoMonteperdido";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import InfoPage from "./routes/info/InfoPage";
import Shop from "./routes/Shop";
import Contacto from "./routes/Contacto";
import Unete from "./routes/Unete";
import Redes from "./routes/Redes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/info/monteperdido" element={<InfoMonteperdido />}></Route>
        <Route
          path="/info/manada"
          element={<InfoPage seccionName="manada" />}
        ></Route>
        <Route
          path="/info/tropa"
          element={<InfoPage seccionName="tropa" />}
        ></Route>
        <Route
          path="/info/esculta"
          element={<InfoPage seccionName="esculta" />}
        ></Route>
        <Route
          path="/info/kraal"
          element={<InfoPage seccionName="kraal" />}
        ></Route>
        <Route path="/recuerdos" element={<Shop />}></Route>
        <Route path="/redes" element={<Redes />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/unete" element={<Unete />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
