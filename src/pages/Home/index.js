import React from "react";
import "./index.scss";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Carrousel from "../../components/carrousel";
import Footer from "../../components/footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      series: [],
      localStorage: [],
      myList: false
    };
  }

  async componentDidMount() {
    // Fetch to API
    const dataSeries = await fetch(`http://localhost:3001/series`);
    const seriesJson = await dataSeries.json();

    const dataMovies = await fetch(`http://localhost:3001/movies`);
    const moviesJson = await dataMovies.json();

    this.setState({
      series: seriesJson,
      movies: moviesJson
    });

    // LOCAL STORAGE
    const dataLS = localStorage.getItem("courflix");
    if (dataLS) {
      const newDataLS = JSON.parse(dataLS);

      this.setState({
        localStorage: newDataLS,
        myList: true
      });
    }
  }

  render() {
    window.scrollTo(0, 0);
    const { series, movies, localStorage, myList } = this.state;

    return (
      <>
        <Navbar links={true} />

        {series[3] && <Hero data={series[3]} id="hero" />}

        <div className="container">
          <h3 className="series-title" id="series">
            Series
          </h3>
          <Carrousel data={series} />

          <h3 className="series-title" id="continue">
            Continue watching
          </h3>
          <Carrousel data={movies.filter(movie => !movie.recomended)} continueWatching={true} />

          <h3 className="series-title" id="recomended">
            Recomendations for you
          </h3>
          <Carrousel data={movies.filter(movie => movie.recomended)} />

          {myList && (
            <>
              <h3 className="series-title" id="list">
                My list
              </h3>
              <Carrousel data={localStorage} localStorage={true} />
            </>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
