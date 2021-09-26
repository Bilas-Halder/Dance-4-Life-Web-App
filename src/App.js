import { useEffect, useState } from 'react';
import './App.css';
import Casts from './Componants/Casts/Casts';
import Header from './Componants/Header/Header';
import SelectedCasts from './Componants/SelectedCasts/SelectedCasts';

function App() {
  const [selectedCast, setSelectedCast] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    setSelectedCast(keys);
  }, []);

  return (
    <div className="app">
      <Header></Header>
      <div className="main-body-container">
        <div className="main-body">
          <Casts selectedCast={selectedCast} setSelectedCast={setSelectedCast}></Casts>
          <SelectedCasts selectedCast={selectedCast} setSelectedCast={setSelectedCast}></SelectedCasts>
        </div>
      </div>
    </div>
  );
}

export default App;
