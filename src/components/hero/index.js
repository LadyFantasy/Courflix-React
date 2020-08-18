import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      green: "",
      red: "",
      added: false
    };
  }

  handleLike() {
    const { green } = this.state;
    !green
      ? this.setState({
          green: "green",
          red: ""
        })
      : this.setState({
          green: ""
        });
  }

  handleDislike() {
    const { red } = this.state;
    !red
      ? this.setState({
          green: "",
          red: "red"
        })
      : this.setState({
          red: ""
        });
  }

  handleClick() {
    // SAVES TO LOCALSTORAGE

    this.setState({
      added: true
    })
    
    const { data } = this.props;
    const courflixData = localStorage.getItem("courflix");

    if (courflixData) {
      const parsedCourflixData = JSON.parse(courflixData);

      const repeated = parsedCourflixData.some(item => {
        return data._id === item._id;
      });
      if (!repeated) {
        parsedCourflixData.push(data);
        const newCourflixData = JSON.stringify(parsedCourflixData);
        localStorage.setItem("courflix", newCourflixData);
      }
      return;
    } else {
      const courflix = [data];

      const newCourflix = JSON.stringify(courflix);
      localStorage.setItem("courflix", newCourflix);
    }
  }

  async componentDidUpdate(prevProps) {
    // RESETS LIKE AND DISLIKE BUTTONS
    const { id } = this.props;
    if (prevProps.id != id) {
      this.setState({
        green: "",
        red: ""
      });
    }
  }

  render() {
    const { data, selection } = this.props;
    const { green, red } = this.state;
    

    return (
      <div
        className="main"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 6, 0) 77%, rgba(0, 0, 0, 1) 98%), linear-gradient(273deg, rgba(0, 0, 6, 0) 38%, rgba(0, 0, 0, 1) 96%), url(${data.imgHero})`
        }}>
        {/* SELECTION */}
        {selection ? (
          <div className="main-detalle__text">
            <h1 className="main-detalle__text__mobile">{data.title}</h1>
            <div className="main-detalle__text__spans">
              <span className="main-detalle__text__spans coincidence">95% de coincidencia</span>
              <span className="main-detalle__text__spans year">{data.year}</span>
              <span className="main-detalle__text__spans age">+{data.age}</span>
              {data.seasons && 
              <span className="main-detalle__text__spans seasons">{data.seasons} seasons</span>}
              
            </div>
            <button className="title-box title-box-red">Play</button>

            <button onClick={() => this.handleClick()} className="title-box lista">
              + My List
            </button>

            <span className={`thumbs ${green}`} onClick={() => this.handleLike()}>
              <FontAwesomeIcon icon={faThumbsUp} className="icon" />
            </span>
            <span className={`thumbs ${red}`} onClick={() => this.handleDislike()}>
              <FontAwesomeIcon icon={faThumbsDown} className="icon" />
            </span>
            <p className="title-sinopsis">{data.synopsis}</p>
          </div>
        ) : (
          //   HOME
          <div className="main-titles">
            <h3 className="title-over">COURFLIX Original</h3>
            <h1 className="title-main">{data.title}</h1>
            <div className="main__text__spans">
              <span className="year">{data.year}</span>
              <span className="age">+{data.age}</span>

              {data.seasons && <span className="seasons">{data.seasons} seasons</span>}
            </div>
            <button className="title-box">Play</button>

            <button onClick={() => this.handleClick()} className="title-box lista">
              + My List
            </button>

            {data.seasons && <p className="title-serie">Watch season 1</p>}

            <p className="title-sinopsis">{data.synopsis}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Hero;
