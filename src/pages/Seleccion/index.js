import React from "react";
import "./index.scss";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Carrousel from "../../components/carrousel";

class Seleccion extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      item: "",
      recomended: []
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    // const { type } = this.props.location;

    // const typeUrl = type === "movies" ? "movies" : "series";

    const data = await fetch(`http://localhost:3001/content/${id}`);
    const dataJson = await data.json();
    console.log("fetch selection", dataJson)

    const dataMovies = await fetch(`http://localhost:3001/movies`);
    const dataMoviesJson = await dataMovies.json();

    this.setState({
      item: dataJson,
      recomended: dataMoviesJson
    });  
  }


  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id != this.props.match.params.id) {
      const data = await fetch(`http://localhost:3001/content/${this.props.match.params.id}`);
      const dataJson = await data.json();
      this.setState({
        item: dataJson
      });
    }
  }
  

  
  render() {
    window.scrollTo(0, 0);
    const { item, recomended } = this.state;
    console.log("SELECTION CHAPTERS?", item.chapters)

    return (
      <>
        <Navbar />
        <Hero data={item} selection={true} id="hero" />

        <div className="container">
          <h3 className="series-title">{item.chapters ? "Chapters" : "Recomended for you"}</h3>
          <Carrousel
            data={item.chapters ? item.chapters : recomended.filter(movie => movie.recomended)}
            series={item.chapters && true}
          />
        </div>
      </>
    );
  }
}

export default Seleccion;
