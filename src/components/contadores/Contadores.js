import React, { useState } from 'react'
import './Contadores.css';

const Contadores = () => {

  const [state, setState] = useState({
    contador1: 0,
    contador2: 0,
  });

  return (
    <div className='Contador'>
      <ul>
        <li>Contador1: {state.contador1}</li>
        <li>Contador2: {state.contador2}</li>
      </ul>
      <button onClick={()=>setState({...state, contador1: state.contador1 + 1})} className="btn btn-primary btn-sm" >
        Contador1 ++
      </button>
      <button onClick={()=>setState({...state, contador2: state.contador2 + 1})} className="btn btn-primary btn-sm" >
        Contador2 ++
      </button>
    </div>
  )

}

export default Contadores