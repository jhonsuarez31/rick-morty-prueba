import React, { useReducer } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { types } from '../types/types';
import { ApiContext } from './ApiContext';
import { ApiReducer } from './ApiReducer';

export const ApiProvider = ({ children }) => {
  const [apiState, dispatch] = useReducer(ApiReducer, {
    characters: [],
    character: null,
  });

  const { data: allCharacters, isLoading: isAllCharactersLoading } =
    useFetch('https://rickandmortyapi.com/api/character');

  const getAllCharacter = () => {
    if (!isAllCharactersLoading) {
      const action = {
        type: types.getAllCharacter,
        payload: allCharacters.results,
      };
      dispatch(action);
    }
  };

  const getCharacterById = async (id) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const action = {
        type: types.getCharacterByID,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.log('Error:', error);
      // Manejar errores aquí
    }
  };

  return (
    <ApiContext.Provider
      value={{
        ...apiState,
        getAllCharacter,
        getCharacterById,
        characters: apiState.characters,
        character: apiState.character,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};