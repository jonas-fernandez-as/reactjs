import React, { createRef, useRef } from "react";

export default function Referencias() {
  //let refMenu=createRef(),//para los componentes de clase
  let refMenu = useRef(),
      refMenuBtn = useRef(); //para los componentes funcionales

  //console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    /*const $menu=document.getElementById("menu");
  if(e.target.textContent==="Menu"){
   e.target.textContent="Cerrar";
   $menu.style.display ="Block"
  }else{
   e.target.textContent="Menu";
   $menu.style.display ="None"
  }*/
    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "Block";
    } else {
      refMenuBtn.current.textContent = "Menu";
      refMenu.current.style.display = "None";
    }
  };
    return (
      <>
        <h2>Referencias</h2>
        <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
          Menu
        </button>
        <nav id="menu" ref={refMenu} style={{ display: "none" }}>
          <a href="#">Seccion 1</a>
          <br />
          <a href="#">Seccion 2</a>
          <br />
          <a href="#">Seccion 3</a>
          <br />
          <a href="#">Seccion 4</a>
          <br />
          <a href="#">Seccion 5</a>
          <br />
        </nav>
        <br/>
      </>
    );
  
}
