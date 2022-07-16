import React from "react";
import { Navigate, Outlet } from "react-router-dom";

/*const PrivateRoute=(props)=>{
 return( <Route path={props.path} component={props.component}/>
  
 )
}*/



{/*const PrivateRoute = (props) => {
  
  return <Route {...props} />;
};*/}


const PrivateRoute = () => {
let auth;
    auth=true;
    auth=false 
  return auth?<Outlet/>:<Navigate to="/login"/>;
}
    



export default PrivateRoute;
