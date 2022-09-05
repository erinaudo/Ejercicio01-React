import './App.css';
import ComponentA from './components/ComponentA'
import { Contacto } from './models/contact.class';

function App() {

    const contacto1 = new Contacto ('Mateo', 'Rinaudo', 'mate@hotmail.com', false)
/*   const contacto1 = {
    nombre: 'Emilio',
    apellido: 'Rinaudo',
    email: 'erinaudo@hotmail.com',
    conectato: true
  } */

  return (
    <div className="App">
      <header className="App-header">
        <ComponentA contacto= { contacto1 } />
      </header>
    </div>
  );
}

export default App;
