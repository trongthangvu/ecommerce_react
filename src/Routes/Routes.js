import HomePage from "../pages/HomePage/HomePage";
import OrderItem from "../pages/OrderPage/OrderItem";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/order",
    component: <OrderItem />,
  },
  {
    path: "/register",
    component: <RegisterPage />,
  },
];
