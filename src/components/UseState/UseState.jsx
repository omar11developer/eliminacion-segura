import React, { useState } from "react";

export const UseState = ({ name }) => {
    const [error, setError] = useState(true);
  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>
        Por favor, escriba el codigo de seguridad para comprobar que quiere
        eliminar.
      </p>
      {error && (
        <p>Error: El codigo es incorrecto </p>
      )}
      <input placeholder="Codigo de seguridad" />
      <button
      onClick={() => setError(!error)}
      >
        Comprobar</button>
    </div>
  );
};
