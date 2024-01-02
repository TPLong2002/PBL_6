import { configureStore } from "@reduxjs/toolkit";
import changeIFReducer from "./components/pages/StoreIF/IFSlice";
import eventReducer from "./components/pages/Event/eventSlice";

export const store = configureStore({
  reducer: { changeIF: changeIFReducer, event: eventReducer },
});
