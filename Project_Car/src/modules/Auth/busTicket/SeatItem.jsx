// import { useState } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";

export default function SeatItem({ seat, isSelected }) {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch({
      type: "busTicket/selectSeat",
      payload: { ...seat, isSelected: !isSelected },
    });
  };

  return (
    <button
      key={seat.name}
      className={cn("btn m-2", {
        "btn-danger": seat.booked,
        "btn-success": isSelected,
        "btn-outline-warning": !seat.booked && !isSelected,
      })}
      disabled={seat.booked}
      onClick={handleSelect}
      style={{
        width: "45px",
        height: "45px",
        fontSize: "20px",
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        padding: "10px",
      }}
    >
      {seat.name}
    </button>
  );
}
