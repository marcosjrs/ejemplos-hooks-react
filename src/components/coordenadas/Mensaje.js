import React, { useLayoutEffect, useState } from 'react'

//Al montarse escuchará el movimiento del ratón y mostrará las coordenadas
//Al desmontarse dejará de escuchar el movimiento
const Mensaje = ({mostrar=true}) => {

  const [coord, setCoord] = useState({x:0,y:0});
  const {x,y} = coord;

  const listenCoord = (e) => {
     setCoord({x: e.x, y:e.y});
  };

  useLayoutEffect(() => {
    window.addEventListener('mousemove', listenCoord);  
    return () => {
      window.removeEventListener('mousemove', listenCoord);
    };
  }, [coord])


  return (
    <>
      <div>Mensaje de Coordenadas</div>
      <div>Coordenadas (x,y): {x} , {y} </div>
    </>
  )
}

export default Mensaje