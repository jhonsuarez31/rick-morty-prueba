import React, { useContext, useEffect } from "react";
import { Navbar } from "../../UI/components/Navbar";
import { ApiContext } from "../context/ApiContext";

export const Home = () => {
  const { getAllCharacter, characters } = useContext(ApiContext);

  useEffect(() => {
    getAllCharacter();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container-cards">
    
      {characters &&
        characters.map((character) => (
          <>
            <div className="card-deck">
              <div className="card" key={character.id}>
                <img
                  className="card-img-top"
                  src={character.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Name:</h5>
                  <h3>{character.name}</h3>
                  <h5 className="card-title">Status:</h5>

                  <p>{character.status}</p>
                </div>
                
              </div>
            </div>
          </>
        ))}
    </div>
    </>
  );
};
