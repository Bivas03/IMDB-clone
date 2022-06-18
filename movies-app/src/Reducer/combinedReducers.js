import { combineReducers } from "redux";
import { movieReducer } from "./MovieReducer";
import { seriesReducer } from "./SeriesReducer";
import { animeReducer } from "./AnimeReducer";

export const reducer= combineReducers({
    Movies: movieReducer,
    Series: seriesReducer,
    Anime: animeReducer
});

