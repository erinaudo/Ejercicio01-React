import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';
import ComponentB from '../pure/ComponentB';


const ComponentA = ({contact}) => {

    const contacto1 = new Contacto('Emilio','Rinaudo','erinaudo@hotmail.com', true)

    return (
        <div>
            <h1>
                Tus Contactos
            </h1>
            <h2>
                Nombre: { contacto1.nombre } { contacto1.apellido } -
            </h2>
            <h4>
                Email: { contacto1.email }
            </h4>
            <ComponentB></ComponentB>
        </div>
    );
};


ComponentA.propTypes = {

};


export default ComponentA;
