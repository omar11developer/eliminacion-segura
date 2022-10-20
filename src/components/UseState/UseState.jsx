import React, { useState, useEffect } from "react";

export const UseState = ({ name }) => {
    const [error, setError] = useState(true)
    const [loading, setLoading] = useState(false)
    useEffect(() => {

      if(loading) {
        setTimeout(() =>{
          setLoading(false)
        }, 3000)
      }

    },[loading])
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
      { loading && (
        <p>Cargando...</p>
      )

      }
      <input placeholder="Codigo de seguridad" />
      <button
      onClick={() => setLoading(true)}
      >
        Comprobar</button>
    </div>
  );
};
