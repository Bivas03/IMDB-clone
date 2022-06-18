const movies={
    movie_list: []
};
export const movieReducer=(state= movies, action)=>{
    switch(action.type){
        case "Movies":
            return {...state,movie_list:action.payload.results};
        default:
            return state;           
    }
}