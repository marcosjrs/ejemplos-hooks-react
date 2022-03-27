import React from "react";
import { useContador } from "../../hooks/useContador";
import { useFetch } from "../../hooks/useFetch";
import { BlockQuote } from "../blockQuote/BlockQuote";

export const UsandoVariosHooks = () => {  
  const {state:num, incrementar} = useContador(1);
  //Al modificar el state, vuelve a llamar al useFetch
  const { datos, cargando } = useFetch( `https://www.breakingbadapi.com/api/quotes/${num}`);

  return (
    <div className="UsandoVariosHooks">
      <h2>Frase de Breaking Bad</h2>
      <h3>Uso de hook custom: useFetch (con parámetro variable)</h3>
      {
        cargando ? 
        (<div className="spinner-border spinner-border-md" />) : 
        (<BlockQuote autor={datos[0].author} frase={datos[0].quote} />)
      }
      <p>
      <button onClick={incrementar} className="btn btn-primary btn-sm" > Siguiente frase </button>
      </p>
    </div>
  );
};
