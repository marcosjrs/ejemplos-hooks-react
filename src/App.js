import './App.css';
import Contadores from './components/contadores/Contadores';
import ContadorConCustomHook from './components/contadorConCustomHook/ContadorConCustomHook';


function App() {
  return (
    <div className="App">
      <h2>Contadores</h2>
      <Contadores />
      <h2>Varios ContadorConCustomHook</h2>
      <ContadorConCustomHook valorInicial={1} />
      <ContadorConCustomHook valorInicial={2} />
      <ContadorConCustomHook valorInicial={3} />
    </div>
  );
}

export default App;