import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Features from "./components/Features";
import Subscribe from "./components/Subscribe";
import Galeria from "./components/Galeria";

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <div className="f-heading">
        <h1>Proyecto</h1>
        <p>No se trata de exclusión, si no de ayudar a favorecer su propio entorno</p>
      </div>
      <Features/>
      <Galeria/>
      <Subscribe/>
    </div>
  );
}

export default App;
