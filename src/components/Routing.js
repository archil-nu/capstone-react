import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Reservation from "../pages/reserve/ReservationPage";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Confirmation from "../pages/confirmation/Confirmation";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default Routing;
