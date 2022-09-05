import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contact.class";
import ComponentB from "./ComponentB";

const ComponentA = ({ contacto }) => {
  return (
    <div>
      <h1>Estado de Contacto</h1>
      <h2>
        Nombre: {contacto.nombre} {contacto.apellido}
      </h2>
      <h4>Direccion de email: {contacto.email}</h4>

      <ComponentB estado={ contacto.estado } />
    </div>
  );
};

ComponentA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponentA;
