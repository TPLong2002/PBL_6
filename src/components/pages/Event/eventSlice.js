import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    value: [],
    privateCoupon: {},
    publicCoupon: {},
    remaining: 0,
  },
  reducers: {
    setDiscount: (state, action) => {
      state.value = action.payload;
    },
    setPrivateCoupon: (state, action) => {
      state.privateCoupon = action.payload;
    },
    setPublicCoupon: (state, action) => {
      state.publicCoupon = action.payload;
    },
    setRemaining: (state, action) => {
      state.remaining = action.payload;
    },
  },
});

export const { setDiscount, setPrivateCoupon, setPublicCoupon, setRemaining } =
  eventSlice.actions;

export const selectEvent = (state) => state.event.value;
export const selectPrivateCoupon = (state) => state.event.privateCoupon;
export const selectPublicCoupon = (state) => state.event.publicCoupon;
export const selectRemaining = (state) => state.event.remaining;

export default eventSlice.reducer;
