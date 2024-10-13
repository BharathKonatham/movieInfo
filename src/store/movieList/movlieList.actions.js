import { MOVIE_LIST_ACTIONS } from "./movlist.types";

const createAction = (type,payload) =>({type,payload})
 

export const setMovlieList = (movies,totalResults)=> createAction(
    MOVIE_LIST_ACTIONS.SET_MOVIE_LIST, 
    {movies,totalResults}
)
