import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Login } from './components/Login';
import { Board } from './components/Board';
import './styles/App.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {
  const [hasAuthenticated, setHasAuthenticated] = useState<boolean>(false);
  return (
   <Router>
    <div className='App'>
    
    
        <Routes>
    {
      !hasAuthenticated ? 
      <Route path="/" element={<Login/>}/>
       
      :
      <Route path="/board" element={<Board/>}/>
  
    }
    </Routes> 
    </div>
   </Router>
  );
}

export default App;
