import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Movie from "../movie";
import "./index.scss";

class Carrousel extends React.Component {
//   constructor(props) {
//     super(props);

//     this.settings = {
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       arrows: true,
//       infinite: (props.series) ? false : true,
//       variableWidth: true,
//       draggable: true,
//       responsive: [
//         {
//           breakpoint: 850,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             variableWidth: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: props.series
//             ? "unslick"
//             : {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//         }
//       ]
//     };
//   }
  render() {
    const { data, continueWatching, series } = this.props;

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: (this.props.series) ? false : true,
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
            settings: this.props.series
              ? "unslick"
              : {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
          }
        ]
      };

    console.log("SERIES PROP", this.props.series)
    // console.log(this.settings.responsive[1].settings)
    // console.log("INFINITE?", this.settings.infinite)

    return (
      <div className="seriesWrapper">
        {series ? (
          // CHAPTERS
          <Slider {...settings}
          className="series-carrousel">
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
          <Slider {...settings} className="series-carrousel">
            {data.map((item, key) => {
              return (
                <Link to={`/selection/${item._id}`} key={key}
                  className="series-carrousel__link">
                  <Movie
                    data={item}   
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
