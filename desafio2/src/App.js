import './App.css';
import { useState } from 'react';
import moment from 'moment';

export default function () {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [fecha, setFecha] = useState(moment());
  const [horaActual, setHoraActual] = useState(moment());
  let urlImg = 'https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-sun-orange-three-dimensional-illustration-png-image_6694186.png';

  function menos() {
    setIndex(index - 1);
  }
  function mas() {
    setIndex(index + 1);
  }
  function restar() {
    setIndex1(index1 - index);
    const newFecha = moment(fecha).subtract(index, 'day');
    setFecha(newFecha);
  }
  function sumar() {
    setIndex1(index1 + index);
    const newFecha = moment(fecha).add(index, 'day');
    setFecha(newFecha);
  }
  if (horaActual.hours() < 19) {
    urlImg = 'https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-sun-orange-three-dimensional-illustration-png-image_6694186.png';
  } 
  else {
    urlImg = 'https://static.vecteezy.com/system/resources/thumbnails/001/189/147/small/moon-crescent.png';
  }

  


  return (
    <div className="App">
    <header className="App-header">
      <h1 className="bienvenidos-title">bienvenidos</h1>
        <div className='steps'>
          <button onClick={menos}><img src='https://cdn-icons-png.flaticon.com/512/56/56891.png'/></button>
          <h1 className='index'>{index}</h1>
          <button onClick={mas}><img src='https://cdn-icons-png.flaticon.com/512/25/25606.png'/></button>
        </div>
        <div className='change'>
          <button onClick={restar}><img src='https://cdn-icons-png.flaticon.com/512/56/56891.png'/></button>
          <h2>{index1}</h2>
          <button onClick={sumar}><img src='https://cdn-icons-png.flaticon.com/512/25/25606.png'/></button>
        </div> 
        <p className="fecha-container">{fecha.format('DD-MM-YYYY')}</p> 
        <img src={urlImg} className="App-logo" />
      </header>
    </div>
  );
  }


