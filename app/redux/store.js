import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "./features/place/places/placeSlice";

export const store = configureStore({
    reducer: {
        places:placesReducer
    }
})