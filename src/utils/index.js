export const usuarioLocal=()=>{
    if(localStorage.getItem('DatosUsuario')!==null){
        return JSON.parse(localStorage.getItem('DatosUsuario'))
    }else{
        return null
    }
}