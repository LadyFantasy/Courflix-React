import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'

class Hero extends React.Component {
  // constructor(props){
  //     super(props);

  //     this.state = {
  //         data: this.props.data
  //     }
  // }

  render() {
    const { data, selection } = this.props;

    return (
      <div
        className="main"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 6, 0) 77%, rgba(0, 0, 0, 1) 98%), linear-gradient(273deg, rgba(0, 0, 6, 0) 38%, rgba(0, 0, 0, 1) 96%), url(${data.imgHero})`
        }}
      >
        {/* SELECTION */}
        {selection ? (
          <div className="main-detalle__text">
            <h1 className="main-detalle__text__mobile">{data.title}</h1>
            <div className="main-detalle__text__spans">
              <span className="main-detalle__text__spans coincidence">
                95% de coincidencia
              </span>
              <span className="main-detalle__text__spans year">
                {data.year}
              </span>
              <span className="main-detalle__text__spans age">+{data.age}</span>
              <span className="main-detalle__text__spans seasons">
                {data.seasons} seasons
              </span>
            </div>
            <button className="title-box red">Play</button>
            <button className="title-box lista">+ My List</button>
            
            <span className="thumbs"><FontAwesomeIcon icon={faThumbsUp} className="icon"/></span>
            <span className="thumbs"><FontAwesomeIcon icon={faThumbsDown} className="icon"/></span>
            <p className="title-sinopsis">{data.synopsis}</p>
          </div>
        ) : (
          // HOME
          <div className="main-titles">
            <h3 className="title-over">COURFLIX Original</h3>
            <h1 className="title-main">{data.title}</h1>
            <div className="main__text__spans">
              <span className="year">{data.year}</span>
              <span className="age">+{data.age}</span>

              {data.seasons && (
                <span className="seasons">{data.seasons} seasons</span>
              )}
            </div>
            <button className="title-box">Play</button>
            <button className="title-box lista">+ My List</button>

            {data.seasons && <p className="title-serie">Watch season 1</p>}

            <p className="title-sinopsis">{data.synopsis}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Hero;
