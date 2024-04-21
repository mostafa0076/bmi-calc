import { useState } from 'react'
import './App.css'

function App() {
  const [height, setheight] = useState('')
  const [Weight, setWeight] = useState('')
  const [message, setMessage] = useState('')
  const [bmi, setBMI] = useState('')
  function calculateBMI(){
    let h= height /100;
    let bmi = Weight/ (h*h);
    if (bmi < 16) {
      setMessage('Severe Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 16 && bmi < 17) {
      setMessage('Moderate Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 17 && bmi < 18.5) {
      setMessage('Mild Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 18.5 && bmi < 25) {
      setMessage('Healthy weight. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 25 && bmi < 30) {
      setMessage('Overweight. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 30 && bmi < 35) {
      setMessage('Obese Class I. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 35 && bmi < 40) {
      setMessage('Obese Class II. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 40) {
      setMessage('Obese Class III. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    }

  }

  return (
    <div className="app">
    <h1>BMI Calculator</h1>
    
    <span>Let's calculate your Body Mass Index. <br></br> Type the values below</span>
    <div className="area-input">
    <input type="text" value={height} placeholder='Height(cm)' onChange={e => setheight(e.target.value)}/>
    <br/>
    <input type="text" value={Weight} placeholder='Weight(kg)' onChange={e => setWeight(e.target.value)}/>
    <br/>
    <button onClick={calculateBMI}>Calculate BMI</button>
    </div>

    <h2>{message}  {bmi}</h2>
    </div>
  )
}

export default App
