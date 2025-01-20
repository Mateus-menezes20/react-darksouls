import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// Página Principal
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <h1>Bem-vindo à lore dos chefes de Dark Souls!</h1>
      <img
        src="https://media1.tenor.com/m/Rmf7TFaNkKcAAAAd/dark-souls-souls.gif"
        alt="GIF animado"
        className="gif"
      />
      <button className="navigate-button" onClick={() => navigate("/lore-artorias")}>
        Clique Aqui
      </button>
    </div>
  );
};

// Página de Lore: Artorias
const LoreArtorias = () => (
  <div className="lore-page">
    <h1>Artorias (Dark Souls 1)</h1>
    <p>
      Artorias é um dos cavaleiros de Gwyn, o Deus Rei de Anor Londo, a grande cidade dos deuses! Ele tinha uma missão especial: parar e extinguir o abismo que estava infectando tudo à sua volta. Ele, junto de seu companheiro fiel Sif, um lobo gigante, enfrentava suas batalhas com bravura. No entanto, ao lutar contra Manus, o Pai do Abismo, Artorias acabou sendo derrotado. Em seus últimos momentos, usou sua magia para salvar Sif.
    </p>
    <img
      src="https://media1.tenor.com/m/zGWi0m6NxPYAAAAd/artorias-dark-souls.gif"
      alt="GIF animado"
      className="gif"
    />
    <div>
      <Link to="/" className="nav-link">Voltar para a página principal</Link>
      <Link to="/lore-kalameet" className="nav-link">Próxima Página</Link>
    </div>
  </div>
);

// Página de Lore: Kalameet
const LoreKalameet = () => (
  <div className="lore-page">
    <h1>Kalameet (Dark Souls 1)</h1>
    <p>
      Black Dragon Kalameet é um Boss em Dark Souls. Ele é um descendente dos Primordial Archdragons e é conhecido por seu olho laranja único. Com resistência a magia, fogo e relâmpago, Kalameet é um dos dragões mais poderosos ainda existentes.
    </p>
    <img
      src="https://media1.tenor.com/m/fH0ow3NL0PAAAAAd/kalameet-dragon.gif"
      alt="GIF animado"
      className="gif"
    />
    <div className="navigation-links">
      <Link to="/lore-artorias" className="nav-link">Página Anterior</Link>
      <Link to="/lore-soul-of-cinder" className="nav-link">Próxima Página</Link>
    </div>
  </div>
);

// Página de Lore: Soul of Cinder
const LoreSoulOfCinder = () => (
  <div className="lore-page">
    <h1>Soul of Cinder (Dark Souls 3)</h1>
    <p>
      A Soul of Cinder não é uma entidade única, mas sim a personificação coletiva de todos aqueles que linkaram a Chama ao longo da história. Isso inclui desde Gwyn, o Primeiro Lorde, até outros seres que seguiram o mesmo caminho.
    </p>
    <img
      src="https://media1.tenor.com/m/ZfuLQ8-VNuEAAAAd/dark-souls-bonfire.gif"
      alt="GIF animado"
      className="gif"
    />
    <div className="navigation-links">
      <Link to="/lore-kalameet" className="nav-link">Página Anterior</Link>
      <Link to="/" className="nav-link">Página Inicial</Link>
    </div>
  </div>
);

// App Principal
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lore-artorias" element={<LoreArtorias />} />
        <Route path="/lore-kalameet" element={<LoreKalameet />} />
        <Route path="/lore-soul-of-cinder" element={<LoreSoulOfCinder />} />
      </Routes>
    </Router>
  );
}

export default App;
