import Inicio from './Inicio'
import Encabezado from './Encabezado'
import { Route, Routes } from  'react-router-dom';
import Contacto from './Contacto';
import Productos from './Productos';

function App() {
  return (
    <>
 <Encabezado />
 <Routes>
   <Route path='/' element = {<Inicio />} />
   <Route path='/Contacto' element = {<Contacto />} />
   <Route path='/Productos' element = {<Productos />} />
 </Routes>
 
 </>
  );
}

export default App;
