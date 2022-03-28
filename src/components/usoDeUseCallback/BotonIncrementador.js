import React from "react";

export const BotonIncrementador = React.memo(({ numero, incrementar }) => {
  console.log("[BotonIncrementador] Cargado");
  return (
    <button className="btn" onClick={() => incrementar(numero)}>
      {numero}
    </button>
  );
});
