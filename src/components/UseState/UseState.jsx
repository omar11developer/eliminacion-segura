import React, { useState, useEffect } from "react";

const SECURITY_CODE = 'admin123'

export const UseState = ({ name }) => {
    const [state, setState] = useState({
      value: '',
      error: false,
      loading: false,
    });

    useEffect(() => {

      if(state.loading) {
        setTimeout(() =>{
          if(state.value === SECURITY_CODE){
            setState({
              ...state,              
              loading:false})
           
          }else {
            setState({...state, loading:false, error:true})
          }
        }, 3000)
      }

    },[state.loading])

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>
        Por favor, escriba el codigo de seguridad para comprobar que quiere
        eliminar.
      </p>
      {(state.error && !state.loading) && (
        <p>Error: El codigo es incorrecto </p>
      )}
      { state.loading && (
        <p>Cargando...</p>
      )

      }
      <form>

      <input placeholder="Codigo de seguridad"
        value={state.value}
        onChange={(event) => {
          //setError(false);
          setState({
            ...state,
            value: event.target.value
          })
        }}
        />
      <button
      onClick={(e) => {
        e.preventDefault()
        setState({...state, loading:true, error:false})
      }}
      >
        Comprobar</button>
        </form>
    </div>
  );
};
