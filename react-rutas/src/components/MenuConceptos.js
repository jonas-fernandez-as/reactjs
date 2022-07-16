import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HTML(no recomendado) </span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link </span>
          <Link to="index">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink </span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/acerca" activeclassname="active">
            Acerca
          </NavLink>
          <NavLink to="/contacto" activeclassname="active">
            Contacto
          </NavLink>
        </li>
        <li>
       <span>Parametros: </span>
       <Link to="usuario/jonas">Jonas</Link>
       <Link to="usuario/piri">Piri</Link>
        </li>
        <li>
         <span>Parametros de consulta </span>
         <Link to="/productos">Productos</Link>
        </li>
        <li>
         <span>Redirecciónes </span>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
        </li>
        <li>
         <span>Rutas Anidadas </span>
         <Link to="/react">React</Link>
        </li>
        <li>
         <span>Rutas Privadas: </span>
         <Link to="/login">Login</Link>
         <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
