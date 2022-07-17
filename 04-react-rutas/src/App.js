import "./App.css";
import ConceptosBasicos from "./components/ConceptosBasicos";
import SongSearch from "./components/SongSearch"
import CrudApi from "./components/CrudApi"
function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noreferrer"
      >
        Documentacion
      </a>
      <hr/>

      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>  
      <hr/>
      <ConceptosBasicos/>
    </div>
  );
}

export default App;
