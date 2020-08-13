import React from 'react';
import "./index.scss"
import Navbar from "../../components/navbar"
import Hero from "../../components/hero"
import Carrousel from "../../components/carrousel"


class Seleccion extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            item : "",
            recomended: []
        }
    }

    async componentDidMount() {
        const {id} = this.props.match.params
        const {type} = this.props.location

        const typeUrl = type === "movies" ? "movies" : "series"

        const data = await fetch(`http://localhost:3001/${typeUrl}/${id}`)
        const dataJson = await data.json()

        const dataMovies = await fetch(`http://localhost:3001/movies`)
        const dataMoviesJson = await dataMovies.json()

        this.setState({
            item: dataJson,
            recomended : dataMoviesJson
        })

    }
    render() {
        window.scrollTo(0, 0)
        const {item, recomended} = this.state
        
        return(
            <>
                <Navbar />
                <Hero data = {item} />

                <div className="container">
                    <h3 className="series-title">{item.chapters ? "Chapters" : "Recomended for you"}</h3> 
                    <Carrousel 
                    data = {item.chapters? item.chapters : recomended.filter(movie => movie.recomended)}/>
                </div>
                
            </>
        )
    }
}

export default Seleccion