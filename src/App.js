import React from 'react';
import NavHeader from './components/NavHeader/NavHeader';
import MatchUp from './components/MatchUp/MatchUp';
import './App.css';

const App = () => {
  return (
    <main className="App">
      <NavHeader />
      <MatchUp />
      <MatchUp />
    </main>
  );
}

export default App;
