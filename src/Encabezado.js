import React from 'react'
import { Link } from  'react-router-dom';
function Encabezado(){
return (
    <div>
         <h1>Programacion III</h1>
         <u1>
             <l1>
              <Link to ="/">Inicio</Link>   
             </l1>
             <l1>
              <Link to ="/contacto">Contacto</Link>   
             </l1>
             <l1>
             <Link to ="/productos">Productos</Link> 
             </l1>
         </u1>
         <hr></hr>
    </div>



)

}

export default Encabezado;