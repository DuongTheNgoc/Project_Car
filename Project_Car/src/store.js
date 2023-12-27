import { configureStore } from "@reduxjs/toolkit";

// Tạo reducer
const movieTicketState = {
  selectedSeats: [],
  totalPrice: 0,
  bookedSeats: [],
};
const busTicketReducer = (state = movieTicketState, action) => {
  switch (action.type) {
    case "busTicket/selectSeat": {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.price;
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter((item) => item.name !== seat.name);
      const totalPrice = state.totalPrice - seat.price;
      return { ...state, selectedSeats, totalPrice };
    }
    case "busTicket/removeTicket": {
      const selectedSeats = state.selectedSeats.filter((item) => item.name !== action.payload.name);
      const totalPrice = state.totalPrice - action.payload.price;
      return { ...state, selectedSeats, totalPrice };
    }
    case "busTicket/payTicket": {
      const selectedSeats = action.payload;
      const bookedSeats = selectedSeats.map((seat) => {
        return { ...seat, booked: true };
      });
      const totalPrice = 0;
      return { ...state, selectedSeats: [], bookedSeats, totalPrice };
    }
    default:
      return state;
  }
};
const store = configureStore({
  reducer: {
    busTicket: busTicketReducer,
  },
});
const state = store.getState();
// console.log(state);
export default store;
