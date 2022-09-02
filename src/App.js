import './App.css';
import ComponentA from './components/container/ComponentA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Llamamos al ComponentA */}  
        <ComponentA></ComponentA>
      </header>
    </div>
  );
}

export default App;
