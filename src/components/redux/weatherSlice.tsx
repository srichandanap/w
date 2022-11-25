import { createSlice } from '@reduxjs/toolkit'

// interface initialState {
//     place: string,
//     country: string,
//     weatherData: string,
//     temperature: number,
//     text: string,
// }

const initialState = {
    data: [],
    weatherData: []

}

const newData: any = []

export const placeSlice = createSlice({

    name: 'weather',
    initialState,
    reducers: {

        // addPlace: (state: any, action: any) => {
        //     state = {
        //         ...state,
        //         place: [...state.place, action.payload]

        //     };
        //     // console.log(state);
        //     // state.place = action.payload;

        // },

        // addCountry: (state: any, action: any) => {
        //     state = {
        //         ...state,
        //         country: [...state.country, action.payload]
        //     };
        //     // console.log(state);

        // },

        addWeatherData: (state: any, action: any) => {
            // state = {
            //     ...state,
            //     weatherData: [...state.weatherData, action.payload]
            // };
            // console.log(state.weatherData);
            // console.log(state);
            state.data = action.payload;
            // state.push(action.payload);
            newData.push(state.data);
            console.log(newData);
            window.localStorage.setItem("data", JSON.stringify(newData));

        },

        addWeather: (state: any, action: any) => {
            state.weatherData = action.payload;
            console.log("slice", state.weatherData);

        },


        // addTemperature: (state: any, action: any) => {
        //     state = {
        //         ...state,
        //         temperature: [...state.temperature, action.payload]
        //     };
        //     // console.log(state.temperature);
        //     // console.log(state);
        // },

        // addText: (state: any, action: any) => {
        //     // state = {
        //     //     ...state,
        //     //     text: [...state.text, action.payload]
        //     // };
        //     // state.push(state.text, action.payload);

        //     // console.log(action.payload);
        //     // console.log(state);

        // },

    },
})


// export const { addPlace, addCountry, addWeatherData, addTemperature, addText } = placeSlice.actions;

export const { addWeatherData, addWeather } = placeSlice.actions;
export default placeSlice

