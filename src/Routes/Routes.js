import HomePage from "../pages/HomePage/HomePage";
import OrderItem from "../pages/OrderPage/OrderItem";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import DetailPage from "../pages/DetailPage/DetailPage";
import UserInfoPage from "../pages/UserInfoPage/UserInfoPage";
import HistoryOder from "../pages/HistoryOrder/HistoryOder";
import Shipping from "../pages/OrderPage/Shipping";
import StoreInfo from "../pages/StoreInfo/StoreInfo";
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
  {
    path: "/detail/:id",
    component: <DetailPage />,
  },
  {
    path: "/storeinfo",
    component: <StoreInfo />,
  },
  {
    path: "/user",
    component: <UserInfoPage />,
  },
  {
    path: "/history/",
    component: <HistoryOder />,
  },
  {
    path: "/shipping/",
    component: <Shipping />,
  },
];
