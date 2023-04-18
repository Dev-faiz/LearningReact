import "./App.css";
import { getMovies } from "./services/fakeMovieService";
import React from "react";
import Movies from "./component/Movies";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Movies />
      </div>
    );
  }
}

export default App;
