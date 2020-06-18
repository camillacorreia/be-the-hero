import React, { useState } from 'react';
import Header from './Header';

function App() {
  // Array [valor, funçãoDeAtualização]
  const [ counter, setCounter] = useState (0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );

}

export default App;

//JSX (JavaScript XML) Quando o HTML está escrito dentro do JavaScript
//Componente é uma função que retorna HTML
//Estado é uma informação que vai ser mantida pelo componente