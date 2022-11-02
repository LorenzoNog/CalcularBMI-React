import React, {useState} from 'react';
import './App.css';

//import 'healty.png' from './assets';
function App(){
  let Reload = ()=>{
    window.location.reload();
  }
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [mensaje, setMensaje] = useState('');

  const calcularBmi = (event =>{
    event.preventDefault();

    if(weight === 0 && height === 0){
      alert('Por favor ingrese los datos solicitados');
    }else{
      let bmi = (weight / ((height*0.01) * (height*0.01)));
      setBmi(bmi.toFixed(1))

      // mensaje
      if(bmi < 25){
        setMensaje('Peso inferior al normal'); 
      }else if(bmi >= 25 && bmi <=30){
        setMensaje('Peso normal');
     }else{
        setMensaje('Sobrepeso');
      }
    }
  })

  let imgSrc;

  if(bmi < 1){
    imgSrc = null;
  }else {
    if(bmi < 25){
      imgSrc = require('./assets/underweight.png');
    }else if(bmi >= 25 && bmi <=30){
      imgSrc = require('./assets/healthy.png');
    }else{
      imgSrc = require('./assets/overweight.png');
    }
  }

  return (
      <div className="App">
          <div className='container'>
              <h2>BMI calculator</h2>
              <form onSubmit={calcularBmi}>
                  <label>Weight (kg)</label>
                    <input value={weight} onChange = {(e) => setWeight(e.target.value)}/>
                  <label>Height (cm)</label>
                    <input value={height} onChange = {(event) => setHeight(event.target.value)} />
                  <div className='botones'>
                      <button className='btn' type='submit'>
                          Calcular BMI
                      </button>
                      <button className='btn btn-outline ' type='submit' onClick={Reload}>
                          Reload
                      </button>
                  </div>
              </form>

              <div className='resultado'>
                  <h2 className='bmi'>Tu BMI es: {bmi}</h2>
                  <p className='mensaje'>{mensaje}</p>
              </div>

              <div className='img-container'> 
                  <img className='imagen' src={imgSrc} alt='imagen' />
              </div>

          </div>
      </div>
  );
} 

export default App;
