import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    place: [],
    country: [],
    weatherData: [],
}

export const placeSlice = createSlice({

    name: 'weather',
    initialState,
    reducers: {

        addPlace: (state: any, action: any) => {
            state.place = action.payload;
            // console.log(state.place);
        },

        addCountry: (state: any, action: any) => {
            state.country = action.payload;
            // console.log(state.place);
        },

        addWeatherData: (state: any, action: any) => {
            state.weatherData = action.payload;
            console.log(state.weatherData);
        },


    },

})


export const { addPlace, addCountry, addWeatherData } = placeSlice.actions;

export default placeSlice

