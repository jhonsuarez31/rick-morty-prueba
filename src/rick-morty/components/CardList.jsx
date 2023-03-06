import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CardList = () => {
  const { getAllCharacter, characters, addFavorite, favorites } =
    useContext(ApiContext);

  useEffect(() => {
    getAllCharacter();
  }, []);

  const MySwal = withReactContent(Swal);

  const handleAddFavorite = (event, character) => {
    event.preventDefault();
    addFavorite(character);
    MySwal.fire({
      title: <strong>Agregado!</strong>,
      html: (
        <i>Se ha agregado correctamente a favoritos!</i>
      ),
      icon: "success",
    });
  };

  return (
    <div className="container-cards">
      {characters &&
        characters.map((character) => (
          <div className="card-deck" key={character.id}>
            <Link to={`/character/${character.id}`}>
              <div className="card">
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
            <div className="card-footer">
              <button
                disabled={favorites.some((fav) => fav?.id === character?.id)}
                onClick={(event) => handleAddFavorite(event, character)}
              >
                {favorites.some((fav) => fav?.id === character?.id) ? (
                  "Agregado a favoritos"
                ) : (
                  "Agregar a favoritos"
                )}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
