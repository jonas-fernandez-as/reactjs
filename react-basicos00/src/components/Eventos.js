import React,{Component} from "react";

export class EventosES6 extends Component{
  constructor(props){
    super(props);
    this.state={
      contador:0,
    };
    this.sumar =this.sumar.bind(this)
    this.restar =this.restar.bind(this)
  }
  //DEFINIDOS CON ARROW FUNCTION
  sumar(e){
    console.log("Sumando")
    console.log(this);
    this.setState({
      contador:this.state.contador+1,
    })
  }

  restar(e){
    console.log("Restando")
    console.log(this);
    this.setState({
      contador:this.state.contador-1,
    })
  }


  render(){
   return(
    <div>
     <h2>Eventos en componentes de ClaseES6</h2>
     <nav>
     <button onClick={this.sumar}>+</button>
     <button onClick={this.restar}>-</button>
     </nav>
     <h3>{this.state.contador}</h3>
    </div>
   )
  }

}

//Properties initializer
export class EventosES7 extends Component{
    state = {
     contador:0,
    };

//Los eventos los definimos con arrow functions
//(heredan el this del contexto en el que se crearon)    
  sumar=(e)=>{
    console.log("Sumando")
    console.log(this);
    this.setState({
      contador:this.state.contador+1,
    })
  }

  restar =(e)=>{
    console.log("Restando")
    console.log(this);
    this.setState({
      contador:this.state.contador-1,
    })
  }


  render(){
   return(
    <div>
     <h2>Eventos en componentes de Clase ES7</h2>
     <nav>
     <button onClick={this.sumar}>+</button>
     <button onClick={this.restar}>-</button>
     </nav>
     <h3>{this.state.contador}</h3>
    </div>
   )
  }

}


/*function Boton(props){
  return(<button onClick={props.myOnClick}>Boton hecho componente</button>)
}*/

/*const Boton = (props) =>(
    <button onClick = {props.myOnClick}>Boton hecho componente</button>
);*/

//SIMPLIFICANDO LA ESCRITURA DE LA FUNCION CON 
//CONOCIMIENTOS DE JS


const Boton= ({myOnClick}) =>(
  <button onClick={myOnClick}>Boton hecho componente</button>
);

export class MasSobreEventos extends Component{
  handleClick = (e,mensaje) => { //pasando 1 o mas  parametros en un evento
    console.log(e)//evento sintetico de react
    console.log(e.target)//evento sintetico de react
    console.log(e.nativeEvent.target)//evento nativo de js
    console.log(e.nativeEvent)//evento nativo de js
    console.log(mensaje)
  }
  
  
  render(){
    return(
      <div>
      <h2>Mas sobre Eventos</h2>
      <button 
        onClick ={(e) =>
        this.handleClick(e,"Hola pasando un parametro desde un evento")
        }
        >
        Saludar
        </button>
        {/*Evento personalizado*/}
        {/*<Boton onClick={(e) =>
        this.handleClick(e,"Hola pasando un parametro desde un evento")
        } />*/}
        
        <Boton myOnClick={(e) =>
        this.handleClick(e,"Hola pasando un parametro desde un evento")
        }
        />
      </div>
    )
  }
}