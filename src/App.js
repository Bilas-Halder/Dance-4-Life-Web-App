import './App.css';
import Casts from './Componants/Casts/Casts';
import Header from './Componants/Header/Header';
import SelectedCast from './Componants/SelectedCasts/SelectedCast';

function App() {

  return (
    <div className="app">
      <Header></Header>
      <div className="main-body-container">
        <div className="main-body">
          <Casts></Casts>
          <SelectedCast></SelectedCast>
        </div>
      </div>
    </div>
  );
}

export default App;
