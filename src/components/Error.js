import React from "react";
import {  useNavigate } from "react-router-dom";


const Error = () => {
const navigate = useNavigate();
const redireccionar= () => {
    navigate("/login");
};

  return (
    <div className="container text-center">
       <br></br><br></br>
       <button className="btn btn-warning"  onClick={redireccionar}> Ir al inicio  </button>
       <h2>Página no encontrada</h2>
    </div>
  );
};
export default Error;

