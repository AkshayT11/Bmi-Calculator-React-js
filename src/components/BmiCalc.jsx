import { useState } from 'react';

const BmiCalc = () => {
  const [height, setHeight] = useState('');
  const [wieght, setWeight] = useState('');
  const [bmiValue, setBmiValue] = useState([]);
  const [report, setReport] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && wieght) {
      const heightMeters = height / 100;

      const bmi = (wieght / (heightMeters * heightMeters)).toFixed(2);
      // console.log(bmi);
      setBmiValue(bmi);

      // To show message of report of bmi value
      let message = '';

      if (bmi < 18.5) {
        message = 'You are Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'You are Normal weight';
      } else if (bmi >= 25 && bmi > 30) {
        message = 'You are Overweight';
      } else {
        message = 'You are Obese';
      }

      setReport(message);
    } else {
      setBmiValue('');
      setReport('');
    }

    // console.log('height', height, 'wieght', wieght);
  };

  return (
    <div className="container">
      <div className="input_box">
        <h1>Bmi Calculator</h1>
        <div className="input_values">
          <label htmlFor="height">Enter Your Height</label>
          <input
            type="text"
            onChange={(e) => setHeight(e.target.value)}
            value={height}
            placeholder="Height..."
          />
        </div>
        <div className="input_values">
          <label htmlFor="height">Enter Your Weight</label>
          <input
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            value={wieght}
            placeholder="Weight..."
          />
          <button onClick={handleSubmit} className="calc_btn">
            Calculate Bmi
          </button>

          {bmiValue && report && (
            <div className="showResult">
              <p> Your BMI is : {bmiValue} </p>
              <p> Your Report is : {report} </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BmiCalc;
