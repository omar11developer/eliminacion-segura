import React, { useState, useEffect } from "react";

const SECURITY_CODE = 'admin123'

export const UseState = ({ name }) => {
  const [loading, setLoading] = useState(false)
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    useEffect(() => {

      if(loading) {
        setTimeout(() =>{
          if(value === SECURITY_CODE){
            setLoading(false)
          }else {
            setError(true)
            setLoading(false)
          }
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
      {(error && !loading) && (
        <p>Error: El codigo es incorrecto </p>
      )}
      { loading && (
        <p>Cargando...</p>
      )

      }
      <input placeholder="Codigo de seguridad"
        value={value}
        onChange={(event) => {
          //setError(false);
          setValue(event.target.value)
        }}
      />
      <button
      onClick={() => {
        setLoading(true) 
        setError(false)//este es correcto
      }}
      >
        Comprobar</button>
    </div>
  );
};
