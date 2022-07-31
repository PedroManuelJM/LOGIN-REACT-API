import React, { useState,useEffect} from 'react';
import { usuarioLocal } from '../utils';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const Login = () => {

const navigate = useNavigate();
const [usuario, setUsuario] = useState(null);  
const usuarioL = usuarioLocal();
const [username, setUsername] = useState('');  
const [clave, setClave] = useState('');  


const iniciarsesion = () =>{
  if (username === "") return alert("Ingrese su usuario")
  if (clave === "") return alert("Ingrese su contraseña")
  
  //const rutaServicio = "http://localhost/api_inventario/login.php";//  RUTA DE MI API
  const rutaServicio = "https://prueba12320211.000webhostapp.com/prueba/login.php";
  var formData = new FormData();
  formData.append("usuario", username)
 // formData.append("clave",md5(clave))
  formData.append("clave",clave)
  //Asi se agregan todos los parámetros que el servicio requiera (nombre del parámetro , valor que se envía)  
  fetch(rutaServicio, {
      method: 'POST',
      body: formData
  })
      .then(
          res => res.json()
      )
      .then(
          (result) => {
              console.log(result);
              evaluarInicioSesion(result);
          }
      )
}

const evaluarInicioSesion = (result) => {
  if (result === -1) {
      return swal({
          title: `El usuario no existe `,
          text: 'Por favor registrarse a la plataforma.',
          timer: 2000,
          icon: "error",
          timerProgressBar: true,
      })
  } else if (result === -2) {

      return swal({
          title: `Contraseña incorrecta`,
          text: 'Ingrese su contraseña correcta.',
          timer: 2000,
          icon: "error",
          timerProgressBar: true,
      })
  }
  localStorage.setItem("DatosUsuario", JSON.stringify(result[0]))

  navigate('/')

  swal({
      title: `Bienvenido: ${result[0].usuario}`,
      text: 'Ahora puede acceder a su información',
      timer: 2000,
      icon: "success",
      timerProgressBar: true,
  })

}

useEffect(()=> {

  if (usuarioL !== null) {
     setUsuario(usuarioL)
     navigate('/')

   }

 }, [])
 
return (
    <>
    <div id="inicioSesion" className="">
     
     <br></br>   <br></br>   <br></br>    <br></br>   <br></br>   <br></br>    <br></br>    <br></br>    <br></br>   <br></br>    <br></br>
     
        <div className="container">
          <div className="row">
            <div className="col-md-4">
  
            </div>
            <div className="col-md-4">
              <div className="contenedor-login">
              <form>
                <div className="">
                  <label htmlFor="email" className="">
                    Usuario
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="">
                    Clave
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                    className="form-control"
                    placeholder="*************"
                  />
                </div>
  
                <div className="text-center">
                  <button className="btn btn-success" type="button" onClick={iniciarsesion}>
                   Iniciar Sesión
                  </button>
                </div>
              </form>
              </div>
       
            </div>
          </div>
        </div>
      </div>

      
      
    </>
  );
};
export default Login;

