import React from "react";
import TableRow from "./CrudTableRow";

function CrudTable ({data,setDataToEdit,deleteData}){
  return(
<div>
<h3>Tabla de datos</h3>
<table>
 <thead>
  <tr>
   <th>Nombre</th>
   <th>Email</th>
   <th>Phone</th>
   <th>Website</th>
   <th>Acciones </th>
  </tr>
  </thead>
  <tbody>
 {data.length===0?<tr><td colSpan={5}>Sin datos</td></tr>:data.map(el=>
 <TableRow 
 key={el.id} 
 el={el}
 setDataToEdit={setDataToEdit}
 deleteData={deleteData}
 />)}
  </tbody>
 
</table>

</div>
)
}


export default CrudTable