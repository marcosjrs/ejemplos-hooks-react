import React, { useLayoutEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setstate] = useState({
    datos: null,
    cargando: true,
    error: null,
  });

  useLayoutEffect(() => {
    setstate({ datos: null,
      cargando: true,
      error: null
    });
    const res = fetch(url)
      .then(resp => resp.json())
      .then((datos) => {
        setstate({
          cargando: false,
          error: null,
          datos,
        });
        console.log(datos);
      });
  }, [url]);

  return state;
};
