import React from "react";
import "./index.scss";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Carrousel from "../../components/carrousel";
import Footer from "../../components/footer";

class Selection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      recomended: []
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const data = await fetch(`https://courflix-backend.herokuapp.com/content/${id}`);
    const dataJson = await data.json();

    const dataMovies = await fetch(`https://courflix-backend.herokuapp.com/movies`);
    const dataMoviesJson = await dataMovies.json();

    this.setState({
      item: dataJson,
      recomended: dataMoviesJson.filter(movie => movie.recomended)
    });
  }

  async componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (prevProps.match.params.id != id) {
      const data = await fetch(`https://courflix-backend.herokuapp.com/content/${id}`);
      const dataJson = await data.json();
      this.setState({
        item: dataJson
      });
    }
  }

  render() {
    window.scrollTo(0, 0);
    const { item, recomended } = this.state;

    return (
      <>
        <Navbar />
        <Hero data={item} selection={true} id="hero" id={this.props.match.params.id} />

        <div className="container">
          <h3 className="series-title">{item.chapters ? "Chapters" : "Recomended for you"}</h3>
          <Carrousel
            data={item.chapters ? item.chapters : recomended}
            series={item.chapters && true}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default Selection;
