import "./App.css";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg justify-content-start">
        <Link className="p-2 text-light" to="/">
          Catálogo
        </Link>
        <Link className="p-2 text-light" to="/dados">
          Novo
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </div>
  );
}

export default App;
