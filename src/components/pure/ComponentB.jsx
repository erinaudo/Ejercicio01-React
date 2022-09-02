import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';

const ComponentB = ({contacto}) => {
    return (
        <div>
            <h1> { contacto.nombre } { contacto.apellido }</h1>
            <h3>Direccion de email: { contacto.email } </h3>
            <br/>
            <h4>Estado: { contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible" } </h4>
        </div>
    );
};


ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponentB;
