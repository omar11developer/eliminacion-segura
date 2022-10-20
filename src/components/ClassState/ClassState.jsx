import React from "react";
class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }
  
  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>Eliminar {name} </h2>
        <p>
          Por favor, escriba el codigo de seguridad para comprobar que quiere
          eliminar.
        </p>
        {this.state.error && <p>Error: El codigo es incorrecto </p>}
        {this.state.loading && <p>Loading... </p>}
        <input placeholder="Codigo de seguridad" />
        <button
        onClick={() => this.setState({loading: true})}
        >Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
