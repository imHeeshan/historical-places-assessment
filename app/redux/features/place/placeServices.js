import axios from 'axios'

// Get All Places

const getAllPlaces = async () => {

    const response = await axios.get(API_URL)
    return response.data
}

export const placesServices = {
    getAllPlaces
}