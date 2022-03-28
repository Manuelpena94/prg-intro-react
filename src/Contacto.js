import React from 'react'

function Contacto() {
  return (
      <form>
          
         <h1>Contacto</h1> 
         <labe1 for="email">Correo electronico</labe1><br/>
         <input id="email" type= "email" required />
         <br/><br/>

         <labe1 for="mensaje">Correo electronico</labe1>
         <br/>
         <textarea id="mensaje"></textarea>
         <br/><br/>
         <button type="button">Enviar</button>
          </form>
    
  )
}

export default Contacto