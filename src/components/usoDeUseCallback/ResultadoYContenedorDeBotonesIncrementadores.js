import React, { useCallback, useState } from "react";
import { BotonIncrementador } from "./BotonIncrementador";

export const ResultadoYContenedorDeBotonesIncrementadores = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);
  console.log("[ResultadoYContenedorDeBotonesIncrementadores] Cargado");

  //La idea del useCallback es solucionar un comportamiento, por el cual react cuando se le cambia el valor de un estado
  //  vuelve a instanciarse el compo, por que la funcion encargada de hacer un setValor... se volvería a crear y por tanto
  //  la referencia, a la misma cambiaría, que se le pasa al BotonIncrementador tabmien lo haría y esto supondría el renderizado de nuevo de
  //  cada BotonIncrementador otra vez...
  //Englobando en useCallback no lo hace, la referencia a incrementar será siempre la misma (en segundo parametro, por norma general, ponemos funcion a la que referencia dentro, como dependencia)
  const incrementar = useCallback(
    (num) => {  setValor((v) => v + num); },
    [setValor]
  );

  return (
    <div>
      <p> Total acumulado: {valor} </p>
      <hr />
      {numeros.map((n) => (
        <BotonIncrementador key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};
