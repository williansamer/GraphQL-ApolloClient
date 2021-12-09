import './App.css';
import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <Contato />
      </main>
    </div>
  );
}

export default App;
