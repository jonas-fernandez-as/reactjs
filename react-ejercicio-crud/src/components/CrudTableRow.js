import React from 'react'

function TableRow ({el,setDataToEdit,deleteData}){
let {id,name,email,phone,website}=el

return(
<tr>
 <td>{name}</td>
 <td>{email}</td>
 <td>{phone}</td>
 <td>{website}</td>

 <td>
  <button onClick={()=>setDataToEdit(el)}>Editar</button>
  <button onClick={()=>deleteData(id)}>Eliminar</button>
 </td>
 
</tr>
 )
}

export default TableRow