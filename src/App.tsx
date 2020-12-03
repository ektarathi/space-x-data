import React from 'react';
import './App.scss';
import './assets/styles/base.scss';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="page-content">
        <Home/>
      </main>
    </div>
  );
}

export default App;
