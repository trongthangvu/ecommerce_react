import React, { useEffect, useState } from "react";
import Bg_Animate from "../../assets/bg_login.json";
import { Button, Form, Input, message } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import { userInforLocal } from "../../services/local.service";
import { https } from "../../services/urlConfig";
import { setUser } from "../../redux/action/userAction.js";
export default function LoginPage() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    let userInfor = userInforLocal.get();

    if (userInfor) {
      navigate("/");
    }
    // kiểm tra nếu user đã đăng nhập thì chuyển hướng về trang chủ
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await https.post("/o/token/", {
        grant_type: "password",
        username: values.username,
        password: values.password,
        client_id: "PhBEZ4gP0ZZQ7iADANrM8kNw4SVSKQ1DJt7QoEjW",
        client_secret:
          "ItlxuZSG0JgtEQvULo91CrQun06lBE9WjFkeTGs0QnKH78bC6CQ2LOAsdUFXG5Djo5fblufLfMCk5JdacX5WBwz0Yk2G3kpxHV8NeLAo6MqYQ3YncZKwNQa4dABdyRsd",
      });
      https.defaults.headers["Authorization"] =
        "Bearer " + response.data.access_token;
      const userResponse = await https.get("/users/current-user/");
      dispatch(setUser(userResponse.data));
      userInforLocal.set(userResponse.data);
      message.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      message.error("Đăng nhập không thành công");
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="h-screen w-screen bg-red-400 flex justify-center items-center px-20 ">
        <div className="container mx-auto p-5 bg-white rounded sm:flex sm:flex-row flex flex-col items-center justify-items-center  ">
          <div className="w-1/2 transform scale-50 ">
            {/* animate */}
            <Lottie animationData={Bg_Animate} />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="flex flex-col items-start">
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <NavLink to="/" className="xl:text-left text-right block mb-6">
                  <i class="fa fa-arrow-left"></i> Quay về trang chủ
                </NavLink>
                <div className="md:inline block xl:mr-24">
                  <span className="text-black">Bạn chưa có tài khoản? </span>
                  <NavLink to="/register">
                    <span className="text-red-600 ">Đăng ký</span>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
