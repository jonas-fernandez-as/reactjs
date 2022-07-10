import React, {Component} from 'react';


class Reloj extends Component{
 constructor(props){
  super(props)
 }
  
 componentWillUnmount(){
 // console.log(3,"El componente ha sido eliminado del DOM");
 }

 render(){
  return(
   <h3>{this.props.hora}</h3>
  )
 }


}



export default class CicloVida extends Component {
 constructor(props){
  super(props);
  //console.log(0, "El componente se inicializa, aún NO está en el DOM")
  this.state={
   hora:new Date().toLocaleTimeString(),
   visible:false
  };
  this.temporizador=null;
 }

 tictac=()=>{
  this.temporizador=setInterval(() => {
   this.setState({
    hora:new Date().toLocaleTimeString()
   })
  },1000);
 };

 //Cuando component did mount se ejecuta significa que
 //los elementos ya se encuentran cargados en el DOM
 //para poder interactuar(que requiera que previamente esten insertados en el DOM)
 componentDidMount(){
  //console.log(1, "El componente ya se encuentra en el DOM")
 }
 //permite pasar  estados previos y prop previas antes de actualizar
 //el nuevo estado por si se necesita interactuar con esos valores
 //antes de actualizar al nuevo estado
 //RECIBE 2 PARAMETROS(prop previas y estado previo)
 componentDidUpdate(prevProps,prevState){
  //console.log(2,"El estado o las props del componente han cambiado");
  console.log(prevProps)
  console.log(prevState)
 }

 
 iniciar=()=>{
  this.tictac()
  this.setState({
   visible:true
  })
 }
 detener=()=>{
  clearInterval(this.temporizador);
  this.setState({
   visible:false
  })
 }

 render(){
  //console.log(4,"El componente se dibuja (o redibuja por algun cambio) en el DOM");
  return(
   <>
   <h2>Ciclo de vida de los componentes de Clase</h2>
   {this.state.visible && <Reloj hora={this.state.hora}/>}
   <button onClick={this.iniciar}>Iniciar</button>
   <button onClick={this.detener}>Detener</button>
   </>
  )
 }
}