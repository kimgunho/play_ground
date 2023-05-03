import { useState } from 'react';

import { a } from 'shared-components';

import viteLogo from 'public/vite.svg';

import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{a}</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((x) => x + 1)}>
          count is {count}ss
        </button>
        <p>{a}</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;