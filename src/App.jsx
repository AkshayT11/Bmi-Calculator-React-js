import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BmiCalc from './components/BmiCalc';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BmiCalc />
    </div>
  );
}

export default App;
