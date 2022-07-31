import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import logo from '../assets/images/logo.png';
import { usuarioLocal } from '../utils';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed, faHome, faComputer } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({show})=>{
   
/* importante para no permitir mostrar la página */
const navigate = useNavigate();
const [usuario, setUsuario] = useState(null);  
const usuarioL = usuarioLocal();

const CerrarSesion= () => {
        localStorage.removeItem("DatosUsuario")
        setUsuario(null)
        swal({
          title: `Cerrando Sesión`,
          text: ' Usted '+ usuario.usuario +' ha cerrado sesión.',
          timer: 2000,
          icon: "success",
          timerProgressBar: true,
        })
        navigate('/login')
};
      
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

    return(
       <div className={show ? 'sidenav active': 'sidenav'}>
        <img src={logo} alt="logo" className="logo"/> &nbsp;   {usuario!== null ? <span style={{color:"#FFF"}}> {usuario.nombres}</span>: <> </>}
            <ul>
                <li> <Link to="/"> <FontAwesomeIcon icon={faHome}/>  Inicio </Link></li>
                <li> <Link to="/perfil"> <FontAwesomeIcon icon={faComputer}/> Perfil </Link></li>
                <button className="btn btn-outline-dark" onClick={CerrarSesion} style={{color:"#FFF"}}>  <FontAwesomeIcon  icon={faDoorClosed}  /> Cerrar Sesión  </button>
            </ul>

       </div> 
    )
}

export default Navbar