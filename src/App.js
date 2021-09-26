import { useEffect, useState } from 'react';
import './App.css';
import CastDetails from './Componants/CastDetails/CastDetails';
import Header from './Componants/Header/Header';
import SelectedCasts from './Componants/SelectedCasts/SelectedCasts';

function App() {
  const [selectedCast, setSelectedCast] = useState([]);
  // state for add to cast which is used in child components

  useEffect(() => {
    const keys = Object.keys(localStorage);
    setSelectedCast(keys);
    // getting the key from local storage
  }, []);

  return (
    <div className="app">
      <Header></Header>
      <div className="main-body-container">
        <div className="main-body">
          <CastDetails selectedCast={selectedCast} setSelectedCast={setSelectedCast}></CastDetails>
          <SelectedCasts selectedCast={selectedCast} setSelectedCast={setSelectedCast}></SelectedCasts>
        </div>
      </div>
    </div>
  );
}

export default App;
