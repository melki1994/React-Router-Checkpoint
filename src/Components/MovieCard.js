import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import AddModal from './Add';
import { Link } from 'react-router-dom';


const MovieCard = ({movie , addCard, AddMovie}) => {
    return (
        <div className="cards">
          {
            addCard ?
            <Card style={{ width: '18rem' , backgroundColor:'white', height:'355px' , textAlign:'center' }}>
            
            <Card.Body style={{marginTop: '90px'}}>
              <Card.Title >Add Movie</Card.Title>
              <Card.Text>
               <AddModal AddMovie={AddMovie}/>
              </Card.Text>
              
            </Card.Body>
          </Card>
          :

          <Card style={{ width: '18rem', backgroundColor:'white' , textAlign:'center' }}>
            <Link to={`/Descriptions/${movie.Id}`}>
  <Card.Img variant="top" src={movie.posterUrl} />
            </Link>
  <Card.Body>
    <Card.Title style={{fontSize:'small'}}>{movie.Title}</Card.Title>
    <Rating ratingSearch={false} rate={movie.rate}/>
  </Card.Body>
</Card>
          }
          
            
        </div>
    )
}

export default MovieCard
