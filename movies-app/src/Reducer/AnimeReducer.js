const anime={
    anime_list:[]
};
export const animeReducer=(state= anime, action)=>{
    switch(action.type){
        case "Anime":
            return {...state,anime_list: action.payload.data};
        default:
            return state;           
    }
}