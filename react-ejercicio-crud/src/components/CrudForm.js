import React,{useState,useEffect} from 'react'

const initialForm ={
 name:"",
 email:"",
 phone:"",
 website:"",
 id:null
}

function CrudForm ({createData,updateData,dataToEdit,SetDataToEdit}){

 const [form,setForm]= useState(initialForm)

 useEffect(()=>{
      if(dataToEdit){
       setForm(dataToEdit)
      }else{
       setForm(initialForm)
      }
 },[dataToEdit]);


 const handleChange=(e)=>{
 setForm({
  ...form,
  [e.target.name]:e.target.value,
      });
 },
 handleSubmit=(e)=>{
      e.preventDefault();
  if(!form.name||!form.email||!form.phone||!form.website){
      alert("Datos incompletos")
  }
  if(form.id===null){
      createData(form);
  }else{
      updateData(form);
  }
  handleReset();
 },
  handleReset=(e)=>{
      setForm(initialForm);
      SetDataToEdit(null);
  }

 return(
  
  <div>
  <h3>{dataToEdit ?"Editar":"Agregar"}</h3>
  <form onSubmit={handleSubmit}>
   <input type={"text"} name="name" placeholder="Nombre" onChange={handleChange} value={form.name}></input>
   <input type={"text"} name="email" placeholder='Email' value={form.email} onChange={handleChange}></input>
   <input type={"text"} name="phone" placeholder="Telefono" onChange={handleChange} value={form.phone}></input>
   <input type={"text"} name="website" placeholder="Sitio web" onChange={handleChange} value={form.website}></input>

   <input type="submit"></input>
   <input type="reset" onClick={handleReset}></input>
  
  </form>
  </div>
 )

}

export default CrudForm