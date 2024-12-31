import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { LoginData } from "../types";
import login from "../requests/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ButtonChange from "../components/ButtonChange";

const Login = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState<LoginData>({
    emailId: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await login(formData); // Pass the entire formData object
      toast.success(response); // Show success message
      Navigate("/");
    } catch (error: any) {
      toast.error(error.response?.data || "Login failed!"); // Show error message
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-16 p-8 shadow-lg rounded-xl bg-base-300">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-500 mb-4">Login</h2>

        <Input
          label="Email"
          placeholder="Enter your Email"
          onChange={handleInputChange}
          name="emailId"
        />

        <Input
          label="Password"
          placeholder="Enter your Password"
          onChange={handleInputChange}
          name="password"
        />

        <Button
          label="Login"
          onClick={handleLogin}
          // className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        />

        <ButtonChange text="Don't have an Account ? " navigate="/signups" />
      </div>
    </div>
  );
};

export default Login;