import React, { useLayoutEffect, useRef } from 'react'

export const BlockQuote = ({frase='', autor=''}) => {
  //Guardamos una referencia
  const blockQuoteDeBreakingBad = useRef();
  //Lo mismo que useEffect, pero espera a terminar modificaciones del DOM
  //Y así poder mostrar info sobre el
  useLayoutEffect(() => {
    console.log(blockQuoteDeBreakingBad.current.getBoundingClientRect());
  }, [frase])

  return (
    <figure>
      <blockquote className="blockquote">
        <p ref={blockQuoteDeBreakingBad}>{frase}</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        <cite title="Source Title">{autor}</cite>
      </figcaption>
    </figure>
  )
}
