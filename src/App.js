import { useState } from 'react';
import './App.css';

function App() {
const [weight, setWeight] = useState (90);
const [intensity, setIntensity] = useState (1.7);
const [gender, setGender] = useState ('male');
const [result, setResult] = useState (0);

//function calculate()
const calculate = () => {
  let calories = 0 
  if (gender === 'male') {
    calories =(879 + 10.2 * weight) * intensity
  } else { //nainen
    calories = (795 + 7.18 * weight) * intensity
  }
  setResult(calories);
}

  return (
    <div id ="container">
      <h3>Calories</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Intensity</label>
        <select value={intensity} onChange={e => setIntensity(e.target.value)}>
          <option value="1.3">Light</option>
          <option value="1.5">Usual</option>
          <option value="1.7">Moderate</option>
          <option value="2">Hard</option>
          <option value="2.2">Very hard</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input><label>Male</label>
        <input type="radio" name="gender" value ="female" onChange={e => setGender(e.target.value)}></input> <label>Female</label>
      </div>
      <div>
        <label>Result</label>
        <output>{result.toFixed(0)}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}> Calculate</button>
      </div>
    </div>
  );
}

export default App;
