const series={
    series_list:[]
};
export const seriesReducer=(state= series, action)=>{
    switch(action.type){
        case "Series":
            return {...state,series_list:action.payload.results};
        default:
            return state;           
    }
}