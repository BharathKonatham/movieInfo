import { MOVIE_LIST_ACTIONS } from "./movlist.types"

const MOVIELIST_INITIAL_STATE = {
    movieList : [],
    totalResults: null,
    pageNo: 1,
}


export const movieListReducer = (state = MOVIELIST_INITIAL_STATE, action)=>{
    const {type,payload} = action
    switch(type){
        case (MOVIE_LIST_ACTIONS.SET_MOVIE_LIST):{ return {
            ...state, 
            movieList:payload.movies,
            totalResults:payload.totalResults,
            pageNo: payload.pageNo
        }}
        default : return state
    }
}