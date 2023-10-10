import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { userServ } from "../../services/user.service";
import { message } from "antd";
import FormInput from "./FormInput";
import "../../css/ecommerce.css";
function RegisterPage() {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    avatar: null,
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Account should be 3-16 characters and shouldn't include any special character!",
      label: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "first_name",
      type: "text",
      placeholder: "first_name",
      label: "first_name",
      pattern:
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$",
      errorMessage: "Name must be in correct format",
      required: true,
    },
    {
      id: 4,
      name: "last_name",
      type: "text",
      placeholder: "last_name",
      label: "last_name",
      pattern:
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$",
      errorMessage: "Name must be in correct format",
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "address",
      label: "address",
      pattern: "^[a-zA-Z0-9 /.-]+$",
      errorMessage: "Please enter your address",
      required: true,
    },
    {
      id: 6,
      name: "phone_number",
      type: "text",
      placeholder: "phone_number",
      label: "phone_number",
      errorMessage: "Please enter your phone_number",
      pattern: "^[0-9]+$",
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("address", values.address);
    formData.append("phone_number", values.phone_number);
    if (values.avatar) {
      formData.append("avatar", values.avatar);
    }
    let handleRegister = async (dataRegister) => {
      try {
        let res = await userServ.postRegister(formData);
        message.success("Đăng ký thành công");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        console.log(res);
      } catch (error) {
        console.log(error);
        message.error(error.response.data.message);
      }
    };
    handleRegister(formData);
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setValues({
      ...values,
      avatar: file,
    });
  };
  return (
    <div>
      <div
        className="movie "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`,
        }}
      >
        <form className="formMovie" onSubmit={handleSubmit}>
          <h1 className="h1text text-2xl">Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              className="form-control-file"
              id="avatar"
              name="avatar"
              onChange={handleFileInputChange}
            />
          </div>
          <button className="buttonMovie">Register</button>
          <div className="mb-4">
            <span>Have you got an account? </span>
            <NavLink to="/login" className="text-purple-400">
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
