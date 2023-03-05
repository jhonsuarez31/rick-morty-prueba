import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";

export const CharacterPage = () => {
  const { getCharacterById, character } = useContext(ApiContext);
  const { id } = useParams();

  useEffect(() => {
    getCharacterById(id);
  }, [id]);

  console.log(character);

  return (
    <>

      <section className="character-container">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <img src={character?.image}  />
            </div>
            <div className="col-4">
              <div className="card-desk">
              <div className="card">
              
                <div className="card-body">
                 
                  <h2>{character?.name}</h2>
                  <ul>
                    <li><b>Staus:</b> {character?.status} </li>                  
                    <li><b>Gender:</b> {character?.gender} </li>
                    <li><b>Origin":</b> {character?.origin.name} </li>
                    <li><b>Location:</b> {character?.location.name} </li>
                    <li><b>Created:</b> {character?.created} </li>
                  </ul>
                </div>
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
