import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ComponentB = ({estado}) => {
    
    const [conectado, setState] = useState (estado)
    
    return (
        <div>
            <p>
               Estade de Conexión: <br/>
               <strong>{ conectado === false ? 'Contacto No Disponible' : 'Contacto En Línea' }</strong>
            </p>
            <button onClick={() => setState(!conectado)}>
                {conectado === false ? 'Conectar' : 'Desconectar'}
            </button>
        </div>
    );
};


ComponentB.propTypes = {
    estado : PropTypes.bool
};


export default ComponentB;

