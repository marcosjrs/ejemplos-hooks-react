import React from 'react'
import { useUserForm } from '../../hooks/useUserForm';

export const SimpleFormConCustomHook = () => {

  const [formulario, handleInputChange] = useUserForm({nombre:'',email:'',pass:''});
  const {nombre, email, pass} = formulario;

  const handleSubmit = (e) => {
     e.preventDefault();
     console.log('submit', formulario);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="inputNombreCustom" className="form-label">Nombre</label>
      <input value={nombre} onChange={handleInputChange} name="nombre" type="text" className="form-control" id="inputNombreCustom" placeholder="Nombre" />
    </div>
    <div className="mb-3">
      <label htmlFor="inputEmailCustom" className="form-label">Email</label>
      <input value={email} onChange={handleInputChange} name="email" type="email" className="form-control" id="inputEmailCustom" placeholder="nombre@ejemplo.com" />
    </div>
    <div className="mb-3">
      <label htmlFor="inputPassCustom" className="form-label">Pass</label>
      <input value={pass} onChange={handleInputChange} name="pass" type="password" className="form-control" id="inputPassCustom" placeholder="*******" />
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-3">Enviar</button>
    </div>

    </form>
  )
}
