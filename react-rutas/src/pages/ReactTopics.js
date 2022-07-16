import { Route, Link, Routes } from "react-router-dom";

const ReactTopics = () => {
  //Path nos pertmite construir rutas relativas <Route>, mientras que url nos permite construir enlaces relativos <Link> o <NavLink>
  return (
    <div>
      <h2>Temas de React</h2>
      <ul>
        <li>
          <Link to="/react/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/react/props">Props</Link>
        </li>
        <li>
          <Link to="/react/estado">Estado</Link>
        </li>
        <li>
          <Link to="/react/componentes">Componentes</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path=""
          element={
            <>
              <h4>Elige un tema de React</h4>
              <p>LALALALA LALALA COSAS COSAS etc</p>
            </>
          }
        />

        <Route
          path="/jsx"
          element={
            <>
              <h2>Contenido Jsx</h2>
            </>
          }
        />

        <Route
          path="/props"
          element={
            <>
              <h2>Contenido Props</h2>
            </>
          }
        />

        <Route
          path="/estado"
          element={
            <>
              <h2>Contenido Estado</h2>
            </>
          }
        />

        <Route
          path="/componentes"
          element={
            <>
              <h2>Contenido Componentes</h2>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default ReactTopics;
