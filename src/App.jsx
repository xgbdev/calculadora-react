import { useState } from 'react';
import Display from '../src/components/Display';
import Button from '../src/components/Button';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const handleKeyPress = (e) => {
    const validKeys = '0123456789+-*/.=';
    if (validKeys.includes(e.key)) {
      handleInput(e.key);
    } else if (e.key === 'Backspace') {
      handleInput('DEL');
    } else if (e.key === 'Enter') {
      handleInput('=');
    }
  };

  return (
    <body className='my-20'>
      <h1 className='text-white font-bold text-4xl text-center'>Calculadora</h1>
      <h4 className='text-yellow-200 font-semibold text-lg text-pretty text-center mt-4 [text-shadow:_0_0px_10px_rgb(255_255_0_/_100%)]'>Hecha con React y TailwindCSS, diseño simple y minimalista.</h4>
      <div 
        className="w-96 mx-auto mt-12 p-5 bg-white rounded-lg shadow-lg shadow-white/20 " 
        tabIndex="0"
        onKeyDown={handleKeyPress}>
        <Display value={input} />
        <div className="grid grid-cols-4 gap-2 h-auto">
          {/* <Button key="1" value="1" onClick={() => handleInput("1")} /> */}
          {['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', 'AC', '0', '/', '*', '='].map((btn) => (
            <Button key={btn} value={btn} onClick={() => handleInput(btn)} />
          ))}
        </div>
      </div>
      <footer className=''>
        <h4 className='text-white font-semibold text-lg text-center my-12'>Creado por <a className='underline text-yellow-200 hover:text-yellow-400 transition-all duration-200' href="https://github.com/xgbdev">@xgbdev</a></h4>
      </footer>
    </body>
  );
};

export default Calculator;
