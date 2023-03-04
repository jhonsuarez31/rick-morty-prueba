
import { types } from '../types/types';


export const ApiReducer = (state={}, action) => {
  
  switch (action.type) {
    
    case types.getAllCharacter:
      return {
        ...state,
        loading:true,
        characters: action.payload
      }
    
    case types.getCharacterByID:
      return{
        ...state,
        loading: true,
        character: action.payload
      }
  
    default:
      return state
  }
}
