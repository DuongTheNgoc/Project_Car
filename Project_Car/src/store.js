import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/Auth/redux/reducers/counterReducer";
import todoReducer from "./modules/Auth/redux/reducers/todoReducer";
import authReducer from "./modules/Auth/slices/authSlices";
import busTicketReducer from "./modules/Auth/redux/slices/busTicketSlice";
import userReducer from "./modules/Auth/redux/slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    todo: todoReducer,
    busTicket: busTicketReducer,
    user: userReducer,
  },
});
export default store;
