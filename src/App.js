import './App.css';
import Casts from './Componants/Casts/Casts';
import Header from './Componants/Header/Header';
import SelectedCasts from './Componants/SelectedCasts/SelectedCasts';

function App() {

  return (
    <div className="app">
      <Header></Header>
      <div className="main-body-container">
        <div className="main-body">
          <Casts></Casts>
          <SelectedCasts></SelectedCasts>
        </div>
      </div>
    </div>
  );
}

export default App;
