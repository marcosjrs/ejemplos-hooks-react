import React, { useState } from 'react'
import Mensaje from './Mensaje'

//Simplemente tiene un switch para mostrar o no el Mensaje de coordenadas
//El mensaje de cordenadas es el encargado de borrar sus addEventListeners...
export const ContenedorMensaje = () => {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <div className="form-check form-switch">
        <input onChange={(e)=>setMostrar(e.target.checked)} checked={mostrar}  className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Mostrar/Ocultar Mensaje Coordenadas</label>
      </div>
      {mostrar && <Mensaje />}
    </div>
  )
}
