import React from 'react'
import MoviCard from './MovieCard';



const Affichage = ({film , searchTerm , rating , AddMovie }) => {

    
    return (
        <div className="affich">
            {film
            .filter(movie =>
              movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
              &&
              movie.rate >= rating
        
                )
            
            .map( movie =>
            <MoviCard key={movie.Id} movie={movie}/>

            )}

            <MoviCard addCard={true} AddMovie={AddMovie}/>
            
        </div>
    )
}

export default Affichage
