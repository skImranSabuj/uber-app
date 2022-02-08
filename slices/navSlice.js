import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    source: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        }
    }
});

export const { setOrigin, setDestination, setTravelInformation } = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selecttravelInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;