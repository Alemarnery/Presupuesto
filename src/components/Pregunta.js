import React, { useState } from "react";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  //definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(0);

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
    }

    //si se pasa la validacion
    setError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <>
      <h2>Gasto Semanal</h2>
      {error ? <Error mensaje={"El presupuesto es incorrecto"} /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="definir presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
