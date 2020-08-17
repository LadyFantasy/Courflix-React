import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Movie from "../movie";
import "./index.scss";

class Carrousel extends React.Component {
  render() {
    const { data, continueWatching, series, localStorage } = this.props;

    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: series || localStorage ? false : true,
      variableWidth: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true
          }
        },
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
          settings: series
            ? "unslick"
            : {
                slidesToShow: 1,
                slidesToScroll: 1
              }
        }
      ]
    };

    return (
      <div className="seriesWrapper">
        {series ? (
          // CHAPTERS
          <Slider {...settings} className="series-carrousel series-carrousel-serie">
            {data.map((item, key) => {
              return (
                <div className="series-carrousel__link series-carrousel__link-serie" key={key}>
                  <Movie data={item} continueWatching={continueWatching} />
                </div>
              );
            })}
          </Slider>
        ) : (
          // MOVIES
          <Slider {...settings} className="series-carrousel">
            {data.map((item, key) => {
              return (
                <Link to={`/selection/${item._id}`} key={key} className="series-carrousel__link">
                  <Movie data={item} continueWatching={continueWatching} />
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
