import React, { useState, useMemo } from 'react';
import { procesoPesado } from '../../services/procesoPesado';
import { useContador } from '../../hooks/useContador';



export const UsandoUseMemo = () => {

    const { state:numero, incrementar } =  useContador( 5000 );
    const [ mostrar, setMostrar ] = useState(true);
    
    const memoProcesoPesado = useMemo(() => procesoPesado(numero), [ numero ]);


    return (
        <div>
            <h1>Usando useMemo</h1>
            <h3>Contador: <small>{ numero }</small>  </h3>
            <hr />

            {/* En lugar de llamar a : */}
            {/* <p> { procesoPesado(numero) } </p> */}

            {/* Creamos un useMemo, para cachear la solución, y sino cambia la variable "numero"
            no volverá a ejecutarse */}
            <p> { memoProcesoPesado } </p>

            <button 
                className="btn btn-primary"
                onClick={ incrementar }
            >
                +1
            </button>

            {/* Tal como está, al cambiar el valor de "mostrar" volvería a ejecutarse: procesoPesado(numero)
            Pero, gracias al useMemo, no lo hará */}
            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setMostrar( !mostrar );
                }}
            >
                Mostrar/Ocultar { JSON.stringify( mostrar ) }
            </button>

        </div>
    )
}
