import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponentB = (estado) => {
  const [conectado, setConectado] = useState(estado);

  return (
    <div>
      <h4>
        Estado de conexion: <br />
        {conectado === true ? "En Línea" : "Fuera De Línea"}
      </h4>
      <button onClick={() => setConectado(!conectado)}>
        {conectado === false ? "CONECTAR" : "DESCONECTAR"}
      </button>
    </div>
  );
};

ComponentB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponentB;
