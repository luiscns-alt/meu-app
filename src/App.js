import './App.css';
import Contador from './components/MeuComponente/Contador.js'

function App() {
  const nome = 'Luis Carlos';
  return (
    <div>
      <Contador a={nome} />
    </div>
  );
}

export default App;
