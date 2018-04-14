import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster:
              "https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster:
              "https://ia.media-imdb.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
          },
          {
            title: "Oldboy",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3xvaIKiAnbSPiHLVwNn5TcbnoSWTY_YAYfUxIwjtCKTx-V3v"
          },
          {
            title: "Starwars",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRtiF2CJ9M8gdeN1_EuaULo-0sKYvD7DzUwPeQojexfBN39uTMg"
          },
          {
            title: "Trainspotting",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbzezTo6JCGcFCm0ms6HXr8ZzLllfrOUpnS2pebLwpCKUSY7Y"
          }
        ]
      });
    }, 1000);
  }

  _renderMovies = () => {
    {
      const movies = this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />;
      });
      return movies;
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
