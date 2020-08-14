import React from "react"
import "./index.scss"

class Movie extends React.Component{
    render() {
        const {imgCarrousel, carrouselMobile, percentageWatched, chapterImg, chapterTitle, chapterSynopsis } = this.props.data

        const {continueWatching} = this.props
        
        return(
            <>
            {chapterImg ?
            <img src={chapterImg} alt="serie" className="series-carrousel__image-series"></img> :
            <>
            <img src={imgCarrousel} alt="serie" className="series-carrousel__image"></img>
            <img src={carrouselMobile} alt="serie" className="series-carrousel__image-mobile"></img>
            </>
            }


            {chapterTitle && 
            <div className="series-carrousel__text">
                <h3 className="series-carrousel__text__h3">{chapterTitle}</h3>
                <h4 className="series-carrousel__text__h4">{chapterSynopsis}</h4>
            </div>
            }
            {continueWatching && 
            <div className="progress-bar">
            <div className="progress-bar__completed" style={{width:`${percentageWatched}%`}}></div>
            </div>
            }
            </>
        )
    }
}


export default Movie