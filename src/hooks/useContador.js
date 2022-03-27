import { useState } from "react";

export const useContador = (valorInicial) => {

  const [state, setState] = useState(valorInicial);

  const incrementar = ( inc = 1 ) => {
     setState(s => s + inc);
  };
  const decrementar = ( dec = 1 ) => {
     setState(s => s - dec);
  };
  const resetear = ( ) => {
     setState(valorInicial);
  };

  return {state , incrementar, decrementar, resetear};

}