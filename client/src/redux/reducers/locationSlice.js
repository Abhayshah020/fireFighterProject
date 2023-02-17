import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  fireFighterLocationLatLng: {},
  localAddressNameAfterRevGeoCode: '',
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setFireFighterLocationLatLng: (state, actions) => {
      state.fireFighterLocationLatLng = actions.payload
    },
    setLocalAddressNameAfterRevGeoCode: (state, actions) => {
      state.localAddressNameAfterRevGeoCode = actions.payload
    },
  }
});

export const { setFireFighterLocationLatLng, setLocalAddressNameAfterRevGeoCode } = locationSlice.actions;
export default locationSlice.reducer;