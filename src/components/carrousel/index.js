import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Movie from "../movie";
import "./index.scss";

class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    
    this.settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      variableWidth: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
          }
        },
        {
          breakpoint: 600,
          settings: props.series ? 'unslick' : {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  }
  render() {
    const { data, continueWatching, series } = this.props;
   
    
    return (
      <div className="seriesWrapper">
        {series ? (
          // CHAPTERS
          <Slider {...this.settings} className="series-carrousel">
            {data.map((item, key) => {
              return (
                <div className="series-carrousel__link">
                  <Movie
                    data={item}
                    key={key}
                    continueWatching={continueWatching}
                    className="series-carrousel__link"
                  />
                </div>
              );
            })}
          </Slider>
        ) : (
          // MOVIES
          <Slider {...this.settings} className="series-carrousel">
            {data.map((item, key) => {
              return (
                <Link
                  to={{
                    pathname: `/selection/${item._id}`,
                    type: item.chapters ? "series" : "movies"
                  }}
                  className="series-carrousel__link"
                >
                  <Movie
                    data={item}
                    key={key}
                    continueWatching={continueWatching}
                  />
                </Link>
              );
            })}
          </Slider>
        )}
      </div>
    );
  }
}

export default Carrousel;
