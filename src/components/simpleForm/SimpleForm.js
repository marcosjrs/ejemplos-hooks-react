import React, { useEffect, useState } from 'react'
import './SimpleForm.css'

export const SimpleForm = () => {

  const [formulario, setFormulario] = useState({nombre:'',email:''});
  const {nombre, email} = formulario;

  //Al montar y desmontar el compo:
  useEffect(() => {
    console.log('=== Montado el componente SimpleForm ===');  
    return () => { console.log('=== Desmontado SimpleForm ==='); }
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
  


  return (
    <>
    <div className="mb-3">
      <label htmlFor="inputNombre" className="form-label">Nombre</label>
      <input value={nombre} onChange={handleInputChange} name="nombre" type="text" className="form-control" id="inputNombre" placeholder="Nombre" />
    </div>
    <div className="mb-3">
      <label htmlFor="inputEmail" className="form-label">Email</label>
      <input value={email} onChange={handleInputChange} name="email" type="email" className="form-control" id="inputEmail" placeholder="nombre@ejemplo.com" />
    </div>

    </>
  )
}
