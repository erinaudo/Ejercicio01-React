import './App.css';
import ComponentA from './components/container/ComponentA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hola</p>
        {/* Llamamos al ComponentA */}  
        <ComponentA></ComponentA>
      </header>
    </div>
  );
}

export default App;
