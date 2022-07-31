# LOGIN REACT API
###### ES UN LOGIN REALIZADO EN REACT JS, ADEMÁS USANDO UNA API ( HECHO EN PHP Y MYSQL(BASE DE DATOS))

#### LIBRERIAS USADAS:
#### REACT ROUTER DOM V6.0 npm i react-router-dom
#### BOOTSTRAP  npm i bootstrap
#### SWEETALERT npm install sweetalert --save
#### FONT AWESOME (ICONOS)
#### npm i --save @fortawesome/fontawesome-svg-core
#### npm install --save @fortawesome/free-solid-svg-icons
#### npm install --save @fortawesome/react-fontawesome


#### CAPTURAS

##### PUEDEN USAR EL SIGUIENTE PARA PRUEBA
##### USUARIO: demo 
##### CLAVE:demo 
#### LOGIN 
![image](https://user-images.githubusercontent.com/71619972/182044287-d26d9d3d-7e13-4328-bc0a-48ddb183fda2.png)

#### HOME
![image](https://user-images.githubusercontent.com/71619972/182044201-47e05e18-9092-4f73-b2b7-5b5d18ffe92e.png)


#### SCRIPT API - CONEXION.PHP


```markdown

<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$server = "localhost";
$user = " ";
$pass = " ";
$bd = " ";

$conexion = mysqli_connect($server, $user, $pass,$bd) 

?>

```
#### SCRIPT API - LOGIN.PHP 

```markdown
<?php
	require_once("conexion.php");
	$usuario = $_REQUEST["usuario"];
	$clave = md5($_REQUEST["clave"]);
	$rs = mysqli_query($conexion,
		"select * from usuario where usuario='".$usuario."'");
	if(mysqli_num_rows($rs)==1){
	    $row = mysqli_fetch_assoc($rs);
	    if($row["clave"]==$clave){
	        $res[] = array_map("utf8_encode",$row);
	        echo json_encode($res);
	    }
	    else{
	        echo "-2";
	    }
	}
	else{
		echo "-1";
	}
	mysqli_close($conexion);
?>

```

#### ADICIONAL: 
PARA LAS RUTAS DINÁMICAS CON REACT ROUTER DOM REEMPLAZAR BrowserRouter POR HashRouter , COMO SE MUESTRA EN LA IMAGEN

![image](https://user-images.githubusercontent.com/71619972/182043820-38455f43-35d3-49cf-9c9a-8b356f0e8db1.png)


## LINK 
https://pedromanueljm.github.io/LOGIN-REACT-API/#/login 
