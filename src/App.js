import Navigation from "./components/Navigation";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>Hallo</h1>
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">Contoh</div>
            <img className="Movie-image" src="https://placehold.it/100x100" />
            <div className="Movie-date">20-11-2022</div>
            <div className="Movie-rate">7.9</div>
          </div>
        </div>
      </header>
      
    </div>
  );
}
