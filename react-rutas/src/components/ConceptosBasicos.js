import { BrowserRouter as Router, Route, Routes,Navigate, HashRouter, Link } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Index from "../pages/Index";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <hr/>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Routes>
        <Route index element={<Index />} />
        <Route path="/acerca" element={<Acerca />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    

      <h2>Conceptos Basicos</h2>
      <Router>
      <MenuConceptos/>
        <Routes>
          <Route path="/acerca" element={<Acerca />} />

          <Route path="/contacto" element={<Contacto />} />

          <Route path="*" element={<Error404 />} />
          
          <Route path="/usuario/:username" element={<Usuario />} />

          <Route index element={<Index />} />
          
          <Route path="/productos" element={<Productos/>}/>
          
          <Route path="/about" element={<><Navigate to="/acerca"/></>}/>  

          <Route path="/react/*" element={<ReactTopics/>}/>

          <Route path="/login" element={<Login/>}/>
           
          <Route path='/dashboard' element={<PrivateRoute/>}>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                    </Route>
          
          {/*<Route path="/dashboard" element={<Dashboard/>}/>*/}

          <Route path="/contact" element={<><Navigate to="/contacto"/></>}/>

          
        </Routes>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;


{
  /*El componente <Outlet>
  Este elemento es usado dentro del componente declarado en la ruta padre para renderizar sus elementos
   <Route> hijos. Esto permite a la interfaz anidada mostrar las rutas hijas cuando son renderizadas.
Si la ruta seleccionada es la raíz, se renderizará la <Route index> hija. Si la ruta no está mapeada, se renderizará la <Route path='*'> hija.*/
}



/*const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <Routes>
          <Route path="acerca" element={<Acerca/>}/>
            
          
          <Route path="contacto" element={<Contacto/>}/>
          
          
          <Route index element={<Index/>}/>
            
          
        </Routes>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;*/
