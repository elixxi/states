import React, { useState, useEffect } from 'react';
import './App.css';

const flechaUrl = 'https://cdn-icons-png.flaticon.com/512/860/860774.png';
const segundoLogoUrl = 'https://cdn-icons-png.flaticon.com/512/54/54531.png';

function ButtonsArriba({ cantidadAvancesArriba, incrementarCantidadAvancesArriba, decrementarCantidadAvancesArriba }) {
  return (
    <div className="mb-3">
      <img
        src={flechaUrl}
        alt="Botón de Disminución"
        onClick={decrementarCantidadAvancesArriba}
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
      />   
      <span className="mx-3">{cantidadAvancesArriba}</span>
      <img
        src={segundoLogoUrl}
        alt="Botón de Aumento"
        onClick={incrementarCantidadAvancesArriba}
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
      />
    </div>
  );
}
function ButtonsAbajo({ cantidadAvancesAbajo, avanzarDiasConCantidad, retrocederDiasConCantidad }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img
        src={flechaUrl}
        alt='Flecha izquierda'
        onClick={() => retrocederDiasConCantidad(cantidadAvancesAbajo)}
        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
      />
      <span className="mx-3">{cantidadAvancesAbajo}</span>
      <img
        src={segundoLogoUrl}
        alt='Flecha derecha'
        onClick={() => avanzarDiasConCantidad(cantidadAvancesAbajo)}
        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
      />
    </div>
  );
}

function App() {
  // Estados para los botones de arriba y abajo
  const [cantidadAvancesArriba, setCantidadAvancesArriba] = useState(0);
  const [cantidadAvancesAbajo, setCantidadAvancesAbajo] = useState(0);
  // Estado para almacenar la hora actual
  const [horaActual, setHoraActual] = useState(new Date().getHours());

  // Estado para almacenar la URL de la imagen del sol o la luna
  const [imagenUrl, setImagenUrl] = useState('');

  // Estado para almacenar la fecha actual
  const [fecha, setFecha] = useState(new Date());

  // Estado para almacenar la cantidad de avances (steps)
  const [cantidadAvances, setCantidadAvances] = useState(0);

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
    <div className="App mt-5">
      <div className="content-container">
        <h1 className="titulo-bienvenida">Bienvenidos</h1>
        <ButtonsArriba
          cantidadAvancesArriba={cantidadAvancesArriba}
          incrementarCantidadAvancesArriba={() => setCantidadAvancesArriba(cantidadAvancesArriba + 1)}
          decrementarCantidadAvancesArriba={() => setCantidadAvancesArriba(cantidadAvancesArriba - 1)}
        />
        <ButtonsAbajo
          cantidadAvancesAbajo={cantidadAvancesAbajo}
          avanzarDiasConCantidad={() => setCantidadAvancesAbajo(cantidadAvancesAbajo + cantidadAvancesArriba)}
          retrocederDiasConCantidad={() => setCantidadAvancesAbajo(cantidadAvancesAbajo - cantidadAvancesArriba)}
        />
 <p className="fecha-actual">{fecha.toLocaleDateString()}</p>
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
