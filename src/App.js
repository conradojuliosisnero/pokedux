import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import "./App.css";
import logo from "./static/logo.svg";
import { useState, useEffect } from "react";
import getPokemons from "./api/index";

function App() {
  const [pokemos, setpokemos] = useState([]);
  
  useEffect(() => {
    const fetch = async () => {
      const data = await getPokemons(setpokemos);
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemos} />
    </div>
  );
}

export default App;
