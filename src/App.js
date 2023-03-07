import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import movie from "./Movie.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movie.map((element) => {
          return (
            <Movies
              title={element.Title}
              img={element.Poster}
              year={element.Year}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
