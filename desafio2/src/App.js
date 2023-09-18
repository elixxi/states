import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para almacenar la fecha actual
  const [fecha, setFecha] = useState(new Date());

  // Estado para almacenar la cantidad de avances (steps)
  const [cantidadAvances, setCantidadAvances] = useState(1);

  // Función para retroceder un día
  const retrocederDia = () => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(fecha.getDate() - 1);
    setFecha(nuevaFecha);
  };

  // Función para avanzar un día
  const avanzarDia = () => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(fecha.getDate() + 1);
    setFecha(nuevaFecha);
  };

  // Función para incrementar la cantidad de avances (steps)
  const incrementarCantidadAvances = () => {
    setCantidadAvances(cantidadAvances + 1);
  };

  // Función para decrementar la cantidad de avances (steps)
  const decrementarCantidadAvances = () => {
    if (cantidadAvances > 1) {
      setCantidadAvances(cantidadAvances - 1);
    }
  };

  // Función para avanzar la cantidad de días especificados
  const avanzarDiasConCantidad = (cantidad) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(fecha.getDate() + cantidad);
    setFecha(nuevaFecha);
  };

  // Función para retroceder la cantidad de días especificados
  const retrocederDiasConCantidad = (cantidad) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(fecha.getDate() - cantidad);
    setFecha(nuevaFecha);
  };

  return (
    <div className="App">
      <h1>Bienvenidos</h1>
      <p>Fecha Actual: {fecha.toLocaleDateString()}</p>
      <div>
        <button onClick={decrementarCantidadAvances}>-</button>
        <span>{cantidadAvances}</span>
        <button onClick={incrementarCantidadAvances}>+</button>
      </div>
      <button onClick={() => avanzarDiasConCantidad(cantidadAvances)}>Avanzar con Cantidad</button>
      <button onClick={() => retrocederDiasConCantidad(cantidadAvances)}>Retroceder con Cantidad</button>
    </div>
  );
}

export default App;