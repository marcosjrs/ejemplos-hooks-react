import React, { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const [state, setstate] = useState({
    datos: null,
    cargando: true,
    error: null,
  });

  //Lo usamos para que en caso de que se interrumpa por el medio (por descarga del compo)
  //no dea un error. Su cambio de valor no supone ningún tipo de renderización, para eso se usa el useRef.
  const peticionViva = useRef(true);

  useEffect(() => {
    return () => {
      peticionViva.current = false;
    }
  }, [])
  

  useEffect(() => {
    setstate({ datos: null,
      cargando: true,
      error: null
    });
    const res = fetch(url)
      .then(resp => resp.json())
      .then((datos) => {
        if(peticionViva){
          setstate({
            cargando: false,
            error: null,
            datos,
          });
          console.log(datos);
        }       
      });
  }, [url]);

  return state;
};
