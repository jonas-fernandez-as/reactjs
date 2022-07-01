import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>
          <section>
            <Componente msg="Hola soy un componente Funcional expresado desde una prop" />
            <hr/>
            <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero={45}
            booleano={true}
            arreglo={[1,2,3]}
            objeto={{nombre:"jo",correo:"hemm_@hotmail.com" }}
            funcion={numero=>numero*numero}
            elementoReact={<i>Esto es un elemento react</i>}
            componenteReact={<Componente msg="Soy un componente pasado como prop"/>}
            />
            <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
