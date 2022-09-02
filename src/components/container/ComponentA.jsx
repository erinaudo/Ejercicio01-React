import React from 'react';
import { Contacto } from '../../models/contact.class';
import { ComponentB } from "../pure/ComponentB";

const ComponentA = () => {

    const contacto1 = new Contacto('Emilio', 'Rinaudo', 'erinaudo1@hotmail.com', true);

    return (
        <div>
            <h1>Estado de Contactos:</h1>
            <ComponentB contacto={contacto1} ></ComponentB>
        </div>
    );
};


export default ComponentA;
