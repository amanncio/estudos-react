import { useState, useEffect } from 'react';



function App() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${numero} vezes`;

    return () => {
      
    }

  }, [numero])

  return (
    <div>
      <h1>Entendendo useEffect</h1>
      <button onClick={() => setNumero(item => item + 1)}>Aumentar</button>
      <br/><br/>
      <h2>Número {numero}</h2>
    </div>
  );
}

export default App;
