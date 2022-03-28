import './App.css';
import Contadores from './components/contadores/Contadores';
import ContadorConCustomHook from './components/contadorConCustomHook/ContadorConCustomHook';
import { SimpleForm } from './components/simpleForm/SimpleForm';
import { ContenedorMensaje } from './components/coordenadas/ContenedorMensaje';
import { SimpleFormConCustomHook } from './components/simpleFormConCustomHook/SimpleFormConCustomHook';
import { UsandoVariosHooks } from './components/usandoVariosHooks/UsandoVariosHooks';
import { UsandoUseMemo } from './components/usandoUseMemo/UsandoUseMemo';
import { ResultadoYContenedorDeBotonesIncrementadores } from './components/usoDeUseCallback/ResultadoYContenedorDeBotonesIncrementadores';

function App() {
  return (
    <div className="App">
      <h2>Contadores</h2>
      <Contadores />
      <h2>Varios ContadorConCustomHook</h2>
      <ContadorConCustomHook valorInicial={1} />
      <ContadorConCustomHook valorInicial={2} />
      <ContadorConCustomHook valorInicial={3} />
      <hr />
      <h2>SimpleForm</h2>
      <SimpleForm />
      <h2>SimpleForm con custom hook</h2>
      <SimpleFormConCustomHook />
      <h2>Mensaje Coordenadas</h2>
      <h3>useEffect: addEventListener y removeEventListener</h3>
      {/* <Mensaje /> */}
      <ContenedorMensaje />
      <hr />
      <UsandoVariosHooks />
      <hr />
      <UsandoUseMemo />
      <hr />
      <ResultadoYContenedorDeBotonesIncrementadores />
    </div>
  );
}

export default App;