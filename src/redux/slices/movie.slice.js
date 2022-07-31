import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    categories: [],
    movies: [],
    errors: null,
    selectedGenreId: null
};

const getCategories = createAsyncThunk(
    'movieSlice/getCategories',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getGenres();
            return data.genres;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMovieGenres = createAsyncThunk(
    'movieSlice/getMovieGenres',
    async (input, {rejectWithValue}) => {
        try {
            if (!input) {
                // initial start
                const {data} = await moviesService.getMovies(1);
                return data.results
            }

            const {selectedCategoryId, page} = input;

            const {data} = await moviesService.getMoviesWithGenres(selectedCategoryId, page || 1);

            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getSelectedGenre: (state, action) => {
            state.selectedGenreId = action.payload
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(getMovieGenres.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);

                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })
});

const {reducer: movieReducer, actions: {getSelectedGenre}} = movieSlice;

const movieActive = {
    getCategories,
    getMovieGenres,
    getSelectedGenre
}

export {
    movieReducer,
    movieActive
}