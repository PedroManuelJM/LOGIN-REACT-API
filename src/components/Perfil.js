import React, { useState, useEffect  } from "react";
import {  useNavigate } from "react-router-dom";
import { usuarioLocal } from "../utils";
import swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./Navbar";
const Perfil = () => {

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);  
  const usuarioL = usuarioLocal();
  const [showNav,setShowNav] =useState(false); // para el navbar
  
  useEffect(()=> {
    if (usuarioL !== null) {
       setUsuario(usuarioL)
     }else{
       swal({
            title: `Página no Permitida`,
            text: ' ¡ Debes iniciar sesión. !',
            timer: 2000,
            icon: "info",
            timerProgressBar: true,
      })
       // direcciona a la página principal
       navigate('/')
     }
   }, [])
  


  return (
    <>
    <div className=''>
      <header> <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} onClick={()=> setShowNav(!showNav)} /> </header>
      <Navbar show={showNav}/>
    </div>
    <div className="container">
    <div className="row">
      <div className="col-md-2">

      </div>
      <div className="col-md-10">
        <h2> Perfil </h2>
      </div>
    </div>
    </div>
   </>
  );
};
export default Perfil;

