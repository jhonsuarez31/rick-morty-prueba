import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

export const CardList = () => {
  const { getAllCharacter, characters } = useContext(ApiContext);

  useEffect (() => {
    getAllCharacter();
  }, []);

  return (

    <div className="container-cards">
    
      {characters &&
        characters.map((character) => (
          <>
          <Link to={`/character/${character.id}`} className="card-deck" key={character.id}>
           
              <div className="card" >
                <img
                  className="card-img-top"
                  src={character?.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Name:</h5>
                  <h3>{character?.name}</h3>
                  <h5 className="card-title">Status:</h5>

                  <p>{character?.status}</p>
                </div>
                
              </div>
            
            </Link>
          </>
        ))}
    </div>
  )
}
