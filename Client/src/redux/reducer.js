import { ADD_FAV, REMOVE_FAV,FILTER,ORDER,GET_FAV} from "./actionsTypes";

const initialState = {
    myFavorites : [],
    allCharacters: []
}

export const reducer =(state=initialState, action)=>{
   switch (action.type) {
    case GET_FAV:
      console.log(state);
      return { ...state, myFavorites: action.payload , allCharacters: action.payload };
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case FILTER:
        const allCharactersFilter = state.allCharacters.filter(character=> character.gender === action.payload)
        return {
          ...state,
          myFavorites:
          action.payload === "allCharacters"
          ? [...state.allCharacters]
          :allCharactersFilter
        }
    case ORDER:
        const allCharacterCopy = [...state.allCharacters]
        return {
          ...state,
          myFavorites:
          action.payload === "A"
          ? allCharacterCopy.sort((a, b) => a.id - b.id )
          : allCharacterCopy.sort((a, b) => b.id - a.id)
        }
    default:
      return {...state}
   }
}

export default reducer;