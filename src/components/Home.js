import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import swal from 'sweetalert';
import {  usuarioLocal } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Navbar from "./Navbar";

const Home = () => {

/* importante para no permitir mostrar la página */
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
          timer: 1000,
          icon: "info",
          timerProgressBar: true,
    })
     // direcciona a la página principal
     navigate('/login')
   
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
        <h2> Página de Inicio </h2>
        <p>
          Bienvenido  &nbsp;   {usuario!== null ? <span style={{color:"#black"}}> <b>{usuario.nombres} , {usuario.apellidos} </b>  </span>: <> </>}
        </p>
      </div>
    </div>
     

    </div>

   </>
   
  );
};
export default Home;

/*
  <button onClick={() => [signout(), navigate("/")]}> SALIR </button>

   <Header/>
      <h2>HOME</h2>
      <button onClick={CerrarSesion} className="btn btn-danger" > CerrarSesion </button>
*/
