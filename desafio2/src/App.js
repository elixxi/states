import React, { useState, useEffect } from 'react';
import './App.css';

const flechaUrl = 'https://cdn-icons-png.flaticon.com/512/860/860774.png';
const segundoLogoUrl = 'https://cdn-icons-png.flaticon.com/512/54/54531.png';

function ButtonsArriba({ cantidadAvances, incrementarCantidadAvances, decrementarCantidadAvances }) {
  return (
    <div className="mb-3">
      <img
        src={flechaUrl}
        alt="Botón de Disminución"
        onClick={decrementarCantidadAvances}
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
      />   
      <span className="mx-3">{cantidadAvances}</span>
      <img
        src={segundoLogoUrl}
        alt="Botón de Aumento"
        onClick={incrementarCantidadAvances}
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
      />
    </div>
  );
}

function ButtonsAbajo({ cantidadAvancesArriba, avanzarDiasConCantidadAbajo, retrocederDiasConCantidadAbajo }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img
        src={flechaUrl}
        alt='Flecha izquierda'
        onClick={() => retrocederDiasConCantidadAbajo(cantidadAvancesArriba)}
        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
      />
      <span className="mx-3">{cantidadAvancesArriba}</span>
      <img
        src={segundoLogoUrl}
        alt='Flecha derecha'
        onClick={() => avanzarDiasConCantidadAbajo(cantidadAvancesArriba)}
        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
      />
    </div>
  );
}

function App() {
  // Estado para almacenar la cantidad de avances (steps) de los botones de arriba
  const [cantidadAvancesArriba, setCantidadAvancesArriba] = useState(0);
  // Estado para almacenar la cantidad de avances (steps) de los botones de abajo
  const [cantidadAvancesAbajo, setCantidadAvancesAbajo] = useState(0);

  // Estado para almacenar la hora actual
  const [horaActual, setHoraActual] = useState(new Date().getHours());

  // Estado para almacenar la URL de la imagen del sol o la luna
  const [imagenUrl, setImagenUrl] = useState('');

  // Estado para almacenar la fecha actual
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    // Función para determinar si es de día o de noche
    const esDeDia = (hora) => {
      return hora >= 6 && hora < 18;
    };

    // Determine si es de día o de noche y configure la URL de la imagen en consecuencia
    if (esDeDia(horaActual)) {
      setImagenUrl('https://th.bing.com/th/id/R.9bbd5cc5ac5226bf03e2a831e41e50c2?rik=lhI75j4b2iisQA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-7HKY4oaWeUc%2fU8LdNf6gmFI%2fAAAAAAACS8k%2fjMXyBdVzFf0%2fs1600%2fSOL+(56).png&ehk=SOEayHPlD4s3EMAT2Kw1LuUsUILBarF8G2566yUN7XY%3d&risl=&pid=ImgRaw&r=0'); // Cambia 'url_de_la_imagen_del_sol.jpg' por la URL de la imagen del sol
    } else {
      setImagenUrl('https://i.pinimg.com/originals/32/3e/9d/323e9d46bf8ea3a9f48637657feb104a.png'); // Cambia 'url_de_la_imagen_de_la_luna.jpg' por la URL de la imagen de la luna
    }
  }, [horaActual]);

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

  // Función para incrementar la cantidad de avances (steps) de los botones de arriba
  const incrementarCantidadAvancesArriba = () => {
    setCantidadAvancesArriba(cantidadAvancesArriba + 1);
  };

  // Función para decrementar la cantidad de avances (steps) de los botones de arriba
  const decrementarCantidadAvancesArriba = () => {
    if (cantidadAvancesArriba > 1) {
      setCantidadAvancesArriba(cantidadAvancesArriba - 1);
    }
  };

  // Función para avanzar la cantidad de días especificados en los botones de abajo
  const avanzarDiasConCantidadAbajo = (cantidad) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(fecha.getDate() + cantidad);
    setFecha(nuevaFecha);
    setCantidadAvancesAbajo(cantidadAvancesAbajo + cantidad);
  };

  // Función para retroceder la cantidad de días especificados en los botones de abajo
  const retrocederDiasConCantidadAbajo = (cantidad) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(fecha.getDate() - cantidad);
    setFecha(nuevaFecha);
    setCantidadAvancesAbajo(cantidadAvancesAbajo + cantidad);
  };

  return (
    <div className="App mt-5">
      <div className="content-container">
        <h1 className="titulo-bienvenida">Bienvenidos</h1>
        <ButtonsArriba
          cantidadAvances={cantidadAvancesArriba}
          incrementarCantidadAvances={incrementarCantidadAvancesArriba}
          decrementarCantidadAvances={decrementarCantidadAvancesArriba}
        />
        <ButtonsAbajo
          cantidadAvancesArriba={cantidadAvancesArriba}
          avanzarDiasConCantidadAbajo={avanzarDiasConCantidadAbajo}
          retrocederDiasConCantidadAbajo={retrocederDiasConCantidadAbajo}
        />
        <p className="fecha-actual">La fecha de hoy es {fecha.toLocaleDateString()}</p>
        <div className="image-container my-4">
          <img
            src={imagenUrl}
            alt="Imagen de día o noche"
            className="center-image small-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;