import { combineReducers } from "redux";
import { movieListReducer } from "./movieList/movieList.reducer";

export const rootReducer = combineReducers({
    movielist: movieListReducer,
    
})