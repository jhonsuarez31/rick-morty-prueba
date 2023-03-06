import React, { useReducer, useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from '../../hooks/useForm';
import { types } from '../types/types';
import { ApiContext } from './ApiContext';
import { ApiReducer } from './ApiReducer';

export const ApiProvider = ({ children }) => {
  
  const [apiState, dispatch] = useReducer(ApiReducer, {
    characters: [],
    character: null,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  });


  useEffect(() => {
    const storedCharacters = localStorage.getItem('characters');
    if (storedCharacters) {
      const parsedCharacters = JSON.parse(storedCharacters);
      const action = {
        type: types.getAllCharacter,
        payload: parsedCharacters,
      };
      dispatch(action);
    }
  }, []);

  const { data: allCharacters, isLoading: isAllCharactersLoading, error: allCharactersError } =
    useFetch('https://rickandmortyapi.com/api/character');

  const getAllCharacter = () => {
    if (!isAllCharactersLoading) {
      const action = {
        type: types.getAllCharacter,
        payload: allCharacters.results,
      };
      dispatch(action);

      // Guardar los datos en localStorage
      localStorage.setItem('characters', JSON.stringify(allCharacters.results));
    }
  };

  const getCharacterById = async (id) => {
    
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();

      const action = {
        type: types.getCharacterByID,
        payload: data,
      };
      dispatch(action);
    
  };

  const addFavorite = (character) => {
    const newFavorites = [...apiState.favorites, character];
    dispatch({
      type: types.addFavorite,
      payload: newFavorites,
    });
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };


  return (
    <ApiContext.Provider
      value={{
        ...apiState,
        getAllCharacter,
        getCharacterById,
        addFavorite,
        characters: apiState.characters,
        character: apiState.character,
        favotites: apiState.favorites
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
