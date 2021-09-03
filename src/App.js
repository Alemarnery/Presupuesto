import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

const App = () => {
  //definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  //Cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = (gasto) => {
    guardarGastos([...gastos, gasto]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={setPresupuesto}
              guardarRestante={setRestante}
              actualizarPregunta={setMostrarpregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
              </div>

              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
