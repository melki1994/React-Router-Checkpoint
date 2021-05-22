import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import  MovieList from './MovieList';
import { Button } from 'react-bootstrap';

const Descriptions = ({match}) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
    setMovie(MovieList.find(mv => mv.Id === Number(match.params.Id)))
}, [match.params.Id]);
    
    return (
        <div>
             <h2 className="title">Descriptions</h2>
              <h4>{movie.Title}</h4>
              <p>{movie.Descriptions}</p>
            <iframe width="800" height="370" src={movie.lien} 
            title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen/>
            <br/>
            <Link to="/">
            <Button variant="secondary">Go back</Button>
            </Link>
        </div>
    )
}

export default Descriptions
