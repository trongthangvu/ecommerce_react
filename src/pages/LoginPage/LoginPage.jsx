import React, { useEffect, useState } from "react";
import Bg_Animate from "../../assets/bg_login.json";
import { Button, Form, Input, message } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lottie from "lottie-react";
import { userInforLocal } from "../../services/local.service";

export default function LoginPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    let userInfor = userInforLocal.get();

    if (userInfor) {
      navigate("/");
    }
    // kiểm tra nếu user đã đăng nhập thì chuyển hướng về trang chủ
  }, []);
  return (
    <div>
      <div className="h-screen w-screen bg-red-400 flex justify-center items-center px-20 ">
        <div className="container mx-auto p-5 bg-white rounded sm:flex sm:flex-row flex flex-col items-center justify-items-center  ">
          <div className="w-1/2 transform scale-50 ">
            {/* animate */}
            <Lottie animationData={Bg_Animate} />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Form
              className="w-full"
              layout="vertical"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                className="xl:w-100"
                label="Tài khoản"
                name="taiKhoan"
                rules={[
                  {
                    required: true,
                    message: "Nhập thiếu rồi nha",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="xl:w-100 "
                label="Mật khẩu"
                name="matKhau"
                rules={[
                  {
                    required: true,
                    message: "Nhập mật khẩu vô nha",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
              >
                <button
                  className="bg-red-500 rounded-lg text-white border-none md:mr-10 md:mb-5 md:mt-2 xl:w-100 block w-full mb-3 py-2"
                  htmlType="submit"
                >
                  Submit
                </button>
                <NavLink to="/" className="xl:text-left text-center block">
                  <i class="fa fa-arrow-left"></i> Quay về trang chủ
                </NavLink>
                <div className="md:inline block xl:mr-24">
                  <span className="text-black">Bạn chưa có tài khoản? </span>
                  <NavLink to="/register">
                    <span className="text-red-600 ">Đăng ký</span>
                  </NavLink>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
