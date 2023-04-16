import HomePage from "../pages/HomePage/HomePage";
import OrderItem from "../pages/OrderPage/OrderItem";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/order",
    component: <OrderItem />,
  },
];
