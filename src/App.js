
import { Routes,Route } from "react-router-dom";
import './App.css';
import Error from "./components/Error";
import Home from "./components/Home";
import Perfil from "./components/Perfil";
import Login from "./components/Login";


function App() {

  return (
    
    <div>
      <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/perfil" element={ <Perfil/>}/>
          <Route path="/login"  element={<Login/>}/>
          <Route path="*"  element={<Error/>}/>
        </Routes>
    </div>
      
  );
}

export default App;


/*
        <Route path="*"  element={<Error/>}/>
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <ProtectedRoute> <Home/> </ProtectedRoute>}/>
          <Route path="/info" element={ <ProtectedRoute> <Info/> </ProtectedRoute>}/>
          <Route path="/login"  element={<Login/>}/>
        </Routes>
       
      </AuthProvider>

*/