import React from "react";
import { Navigate, Outlet } from "react-router-dom";

/*const PrivateRoute=(props)=>{
 return( <Route path={props.path} component={props.component}/>
  
 )
}*/

{
  /*const PrivateRoute = (props) => {
  
  return <Route {...props} />;
};*/
}

const PrivateRoute = () => {
  let auth;
  auth = true;
  auth = false;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

{
  /*El componente <Outlet>
  Este elemento es usado dentro del componente declarado en la ruta padre para renderizar sus elementos
   <Route> hijos. Esto permite a la interfaz anidada mostrar las rutas hijas cuando son renderizadas.
Si la ruta seleccionada es la raíz, se renderizará la <Route index> hija. Si la ruta no está mapeada, se renderizará la <Route path='*'> hija.*/
}

export default PrivateRoute;
