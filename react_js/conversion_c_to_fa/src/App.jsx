import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [celcius, setCelius] = useState(0)
  const [resultado, setResultado] = useState(0)

  const convertion = () => {

    let farengei = 0

    farengei = celcius * 1.8
    setResultado(farengei)
  } 

  return (
    <>
      <section id="center">
        <div>
          <h1>Conversión en React CELCIUS A FARENGEI</h1>          
        </div>
        <input type='number' placeholder='Numero grado celcius'
        onChange={(e)=> { 
         
          setCelius(e.target.value)
           console.log(celcius)
          } }>
        </input>
        <button
          className="counter"
          onClick={convertion}
        >
          Calcular
        </button>
            <div>Resultado: {resultado}</div>
      </section>
  

    </>
  )
}

export default App
