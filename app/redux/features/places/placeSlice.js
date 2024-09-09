import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// Create the adapter
const placesAdapter = createEntityAdapter();

// Define the initial state using the adapter's getInitialState method
const initialState = placesAdapter.getInitialState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    visitedPlaces: []
});

const placesSlice = createSlice({
    name: "places",
    initialState,
    reducers: {
        // set initial dummy place data
        setPlaces(state, action) {
            placesAdapter.setAll(state, action.payload);
        },
        handleVisited(state, action) {
            const place = state.entities[action.payload];
            if (place) {
                place.isVisited = !place.isVisited;
            }
        },
    },
});

export default placesSlice.reducer;

export const {
    selectAll: allPlaces,
    selectById: selectPlaceById,
    selectIds: selectPlaceIds
} = placesAdapter.getSelectors(state => state.places);

export const allVisitedPlaces = (state) =>
    allPlaces(state).filter((place) => place.isVisited === true);

export const suggestions = (state, postId) =>
    allPlaces(state).filter((place) => place.id !== postId);

export const { handleVisited, setPlaces } = placesSlice.actions;
