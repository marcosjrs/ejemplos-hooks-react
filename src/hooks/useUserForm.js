import React, { useEffect, useState } from 'react'

export const useUserForm = (datosIniciales) => {

  const [formulario, setFormulario] = useState(datosIniciales);

  //Al montar y desmontar el compo:
  useEffect(() => {
    console.log('=== Montado el componente useUserForm ===');  
    return () => { console.log('=== Desmontado useUserForm ==='); }
  }, []); // con [] es solo cuando se monta el compo (y se desmonta)

  //Al modificarse los datos del state de formulario  (tambien se podría hacer de la propiedad, por ejemplo de email )
  useEffect(() => {
    console.log('Montado/Modificando algo del formulario...');  
    return () => { console.log('Desmontando algo de formulario'); }
  }, [formulario]); // con [formulario] es solo cuando se modifica el state de formulario (inicialmente se "monta" y al modificar se "desmonta" y se vuelve a "montar")

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);     
    setFormulario({...formulario, [e.target.name]: e.target.value })
  };
  
  const resetForm = () => {
    setFormulario(datosIniciales);
  }
  
  return [formulario, handleInputChange, resetForm];
}
