import React , {useState} from 'react'
import Affichage from './Affichage'
import Rating from './Rating'
import Searching from './Searching'
import MovieList from './MovieList';

const MovieApp = () => {

    const [film, setFilm] = useState(MovieList)
    const [searchTerm, setSearchTerm] = useState("")
    const [rating, setRating] = useState(1)

    const AddMovie = (newMovie) => {
        setFilm([...film , newMovie])
    }
    
   

    return (
        <div>
            <div className="navContainer">
                <Searching searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> 
                <Rating ratingSearch={true} rating={rating} setRating={setRating}/>
            </div>
            <Affichage film={film} searchTerm={searchTerm} setRating={setRating} 
            rating={rating} AddMovie={AddMovie}/>
        </div>
    )
}

export default MovieApp
