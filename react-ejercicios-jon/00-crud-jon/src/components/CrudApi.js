import CrudFrom from './CrudForm'
import CrudTable from './CrudTable'
import React,{ useState } from 'react';



const CrudApi=()=>{
 const [db,setDb]=useState([]);
 const [dataToEdit,setDataToEdit]=useState(null);

 const createData = (data)=>{
  data.id=Date.now();
  //console.log(data)
  setDb([...db,data])
 };

 const updateData = (data)=>{
  let newData=db.map(el=>
   el.id=== data.id?data:el)
   setDb(newData);
 };

 const deleteData = (id)=>{
  let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id '${id}'?`);

  if(isDelete){
   let newData=db.filter(el=>el.id!==id);
   setDb(newData)
  }else{
   return;
  }
 };
 return(
  <div>
   <h2>CRUD Api</h2>
   <article className='grid-1-2'>
   <CrudFrom 
   createData={createData} 
   updateData={updateData} 
   dataToEdit={dataToEdit} 
   setDataToEdit={setDataToEdit}/>

   <CrudTable 
   data={db} 
   setDataToEdit={setDataToEdit} 
   deleteData={deleteData}/>
  </article>
  </div>
 )
}

export default CrudApi