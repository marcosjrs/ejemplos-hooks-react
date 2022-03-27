import { useState } from "react";

export const useContador = (valorInicial) => {

  const [state, setState] = useState(valorInicial);

  const incrementar = ( ) => {
     setState(s => s + 1);
  };
  const decrementar = ( ) => {
     setState(s => s - 1);
  };
  const resetear = ( ) => {
     setState(valorInicial);
  };

  return {state , incrementar, decrementar, resetear};

}