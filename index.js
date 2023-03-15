import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import './index.css';


import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Alien from "./pages/Alien";
import BoRaiCho from "./pages/BoRaiCho";
import CassieCage from "./pages/CassieCage";
import Dvorah from "./pages/Dvorah";
import Ermac from "./pages/Ermac";
import ErronBlack from "./pages/ErronBlack"; 
import FerraTorr from "./pages/FerraTorr"
import Goro from "./pages/Goro"
import JacquiBriggs from "./pages/JacquiBriggs";
import Jason from "./pages/Jason";
import Jax from "./pages/Jax"; 
import JohnnyCage from "./pages/JohnnyCage";
import Kano from "./pages/Kano";
import Kenshi from "./pages/Kenshi";
import Kitana from "./pages/Kitana";
import KotalKahn from "./pages/KotalKahn";
import KungJin from "./pages/KungJin"
import KungLao from "./pages/KungLao";
import Leatherface from "./pages/Leatherface";
import LiuKang from "./pages/LiuKang";
import Mileena from "./pages/Mileena";
import Predator from "./pages/Predator";
import QuanChi from "./pages/QuanChi";
import Raiden from "./pages/Raiden";
import Reptile from "./pages/Reptile";
import Scorpion from "./pages/Scorpion";
import Shinnok from "./pages/Shinnok";
import SonyaBlade from "./pages/SonyaBlade";
import SubZero from "./pages/Sub-Zero";
import Takeda from "./pages/Takeda";
import Tonya from "./pages/Tonya";
import Tremor from "./pages/Tremor";
import Triborg from "./pages/Triborg";






export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Alien" element={<Alien />} />
          <Route path="Boraicho" element={<BoRaiCho />} />
          <Route path="Cassiecage" element={<CassieCage />} />
          <Route path="Dvorah" element={<Dvorah />} />
          <Route path="Ermac" element={<Ermac />} />
          <Route path="ErronBlack" element={<	ErronBlack />} />
          <Route path="FerraTorr" element={<FerraTorr />} />
          <Route path="Goro" element={<Goro />} />
          <Route path="JacquiBriggs" element={<JacquiBriggs />} />
          <Route path="Jason" element={<Jason />} />
          <Route path="Jax" element={<Jax />} />
          <Route path="JohnnyCage" element={<JohnnyCage />} />
          <Route path="Kano" element={<Kano />} />
          <Route path="Kenshi" element={<Kenshi />} />
          <Route path="Kitana" element={<Kitana />} />
          <Route path="KotalKahn" element={<KotalKahn />} />
          <Route path="KungJin" element={<KungJin />} />
          <Route path="Kunglao" element={<KungLao />} />
          <Route path="Leatherface" element={<Leatherface />} />
          <Route path="LiuKang" element={<LiuKang />} />
          <Route path="Mileena" element={<Mileena />} />
          <Route path="Predator" element={<Predator />} />
          <Route path="QuanChi" element={<QuanChi />} />
          <Route path="Raiden" element={<Raiden />} />
          <Route path="Reptile" element={<Reptile />} />
          <Route path="Scorpion" element={<Scorpion />} />
          <Route path="Shinnok" element={<	Shinnok />} />
          <Route path="SonyaBlade" element={<SonyaBlade />} />
          <Route path="SubZero" element={<SubZero />} />
          <Route path="Takeda" element={<Takeda />} />
          <Route path="Tonya" element={<Tonya />} />
          <Route path="Tremor" element={<Tremor />} />
          <Route path="Triborg" element={<Triborg />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


