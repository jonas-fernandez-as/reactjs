import { useLocation , useNavigate } from "react-router-dom";

const Productos = () => {
  //let location = useLocation();
  //console.log(location);
  let {search} = useLocation();
  let querry=new URLSearchParams(search)
  
  
  //console.log(querry)
  
  const LIMIT=20

  let start = parseInt(querry.get("inicio"))||1;
  let end = parseInt(querry.get("fin"))||LIMIT;
  //console.log(start,end)

  let navigate = useNavigate()
 // console.log(navigate)

 

  const handlePrev=(e)=>{
   {start > LIMIT && navigate(`?inicio=${start-LIMIT}&fin=${end-LIMIT}`)}


  }
  const handleNext=(e)=>{
   navigate(`?inicio=${start+LIMIT}&fin=${end+LIMIT}`)
  }
  return (
    <div>
      <h3>Productos</h3> 
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      <button onClick={handlePrev}>Atras</button>
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};
export default Productos;
