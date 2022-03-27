import React from 'react'

export const BlockQuote = ({frase='', autor=''}) => {
  return (
    <figure>
      <blockquote className="blockquote">
        <p>{frase}</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        <cite title="Source Title">{autor}</cite>
      </figcaption>
    </figure>
  )
}
