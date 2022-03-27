import React from 'react'
import {useContador} from '../../hooks/useContador';
import './ContadorConCustomHook.css';

const ContadorConCustomHook = ({valorInicial=0}) => {

  const {state, incrementar, decrementar, resetear} = useContador(valorInicial);

  return (
    <div className='ContadorConCustomHook'>
      <button onClick={()=>decrementar(valorInicial)} className="btn btn-primary btn-sm" > - </button>
      <span>{state}</span>
      <button onClick={()=>incrementar(valorInicial)} className="btn btn-primary btn-sm" > + </button>
      <button onClick={resetear} className="btn btn-primary btn-sm" > R </button>
    </div>
  )

}

export default ContadorConCustomHook