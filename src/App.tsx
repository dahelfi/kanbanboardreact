import { useState } from 'react';
import { Login } from './components/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Board } from './components/Board';
import './styles/App.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { BackendContextProvider } from './context/BackendContext';

function App() {
  const [hasAuthenticated, setHasAuthenticated] = useState<boolean>(false);
  
  return (
   <Router>
    <BackendContextProvider>
    <div className='App'>
    
    
        <Routes>
    {
      !hasAuthenticated ? 
      <Route path="/" element={<Login logInOrLogOut={()=>setHasAuthenticated(!hasAuthenticated)}/>}/>
       
      :
      <Route path="/board" element={<Board/>}/>
  
    }
    </Routes> 
    </div>
    </BackendContextProvider>
   </Router>
  );
}

export default App;
