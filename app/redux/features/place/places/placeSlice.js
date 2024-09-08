import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { placesServices } from "../placeServices"
import { Alert } from "react-native"


const initialState = {
    places: [
        {
            id: 1,
            name: "Place 1",
            image:
                "https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Historical Places 1",
            isVisited: false,
            tags: '#MostVisited #Cool_place #Historical',
            rating:'4.3'
        },
        {
            id: 2,
            name: "Place 2",
            image:
                "https://images.pexels.com/photos/5198285/pexels-photo-5198285.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Historical Places 2",
            isVisited: false,
            tags: '#best #Cool_place #Historical',
            rating:'8.3'
        },
        {
            id: 3,
            name: "Place 3",
            image:
                "https://images.pexels.com/photos/4916266/pexels-photo-4916266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Historical Places 3",
            isVisited: false,
            tags: '#best #MostVisited #Cool_place ',
            rating:'4.3'
        },
        {
            id: 4,
            name: "Place 4",
            image:
                "https://images.pexels.com/photos/3848886/pexels-photo-3848886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Historical Places 4",
            isVisited: false,
            tags: '#best #MostVisited #Historical',
            rating:'4.3'
        },
        {
            id: 5,
            name: "Place 5",
            image:
                "https://images.pexels.com/photos/6243760/pexels-photo-6243760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Historical Places 5",
            isVisited: false,
            tags: '#best  #Cool_place #Historical',
            rating:'2.3'
        },
        {
            id: 6,
            name: "Place 6",
            image:
                "https://images.pexels.com/photos/5074422/pexels-photo-5074422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Historical Places 6",
            isVisited: false,
            tags: '#best #MostVisited ',
            rating:'4.3'
        },
        // Add more places
    ],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    visitedPlaces: []
}


// Get All Student Record
// when we will use api
// export const getAllPlaces = createAsyncThunk('places/getAll', async (_, thunkAPI) => {
//     try {
//         Alert.alert()

//         return await placesServices.getAllPlaces()
//     } catch (error) {
//         const message =
//             (error.response && error.response.data && error.response.data.message) ||
//             error.message ||
//             error.toString()
//         return thunkAPI.rejectWithValue(message)
//     }
// })


const placesSlice = createSlice({
    name: "places",
    initialState,
    reducers: {
        handleVisited: (state, { payload }) => {
            const find_place = state.places.find((place) => place.id === payload);
            find_place.isVisited = !find_place.isVisited;
        },
    },

    // when we use to api
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getAllPlaces.pending, (state) => {
    //             state.isLoading = true
    //         })
    //         .addCase(getAllPlaces.fulfilled, (state, action) => {
    //             state.isLoading = false
    //             state.isSuccess = true
    //             state.places = action.payload

    //         })
    //         .addCase(getAllPlaces.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.isError = true
    //             state.message = action.payload

    //         })
    // }
})
export default placesSlice.reducer
export const allPlaces = state => state.places.places
export const allVisitedPlaces = (state) => state.places.places.filter((place) => place.isVisited === true)
export const suggestions = (state,postId) => state.places.places.filter((place) => place.id !== postId)
export const SelecetedPlaceDetails = (state, postId) =>
    state.places.places.find(place => place.id === postId);

export const { handleVisited } = placesSlice.actions