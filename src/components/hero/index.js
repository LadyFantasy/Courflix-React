import React from "react"
import "./index.scss"

class Hero extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         data: this.props.data
    //     }
    // }

    

    render() {
        // const {_id, title, synopsis, year, age, chapters, seasons, imgCarrousel, imgHero, carrouselMobile} = this.props
        const {data} = this.props
        return(
            <div className="main" style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 6, 0) 77%, rgba(0, 0, 0, 1) 98%), linear-gradient(273deg, rgba(0, 0, 6, 0) 38%, rgba(0, 0, 0, 1) 96%), url(${data.imgHero})`}}>
            <div className="main-titles">
            <h3 className="title-over">COURFLIX Original</h3>
            <h1 className="title-main">{data.title}</h1>
            <div className="main__text__spans">
                <span className="year">{data.year}</span>
                <span className="age">+{data.age}</span>

                {data.seasons && 
                <span className="seasons">{data.seasons} seasons</span>}
            </div>
            <a href="detalle.html"><span className="title-box">Play</span></a>
            <a href="#mi-lista"><span className="title-box">+ My List</span></a>

            {data.seasons &&
            <p className="title-serie">Watch season 1</p>}
            
            <p className="title-sinopsis">{data.synopsis}</p>
           </div>
            </div>
        )
    }
}

export default Hero