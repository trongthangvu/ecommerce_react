import HomePage from "../pages/HomePage/HomePage";
import OrderItem from "../pages/OrderPage/OrderItem";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
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
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/register",
    component: <RegisterPage />,
  },
];
