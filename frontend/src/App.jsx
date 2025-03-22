import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './comp/Nav'
import Add from './comp/Add';
import Display from './comp/Display';
import Update from './comp/Update';


function App()
{

  return(
    <div className='divApp'>

  
   

    <BrowserRouter>
    
      <Nav />
   

    
        <Routes>
          <Route path='/' element={<Display /> } />
          <Route path='/add' element={<Add/> } />
          <Route path='/update/:id' element={<Update/> } />
        </Routes>
  
    
      
   
    </BrowserRouter>

    </div>
  );

}

export default App
