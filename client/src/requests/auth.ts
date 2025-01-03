import axios from "axios";
import { BASEURL } from "../helper/constant";
import { LoginData, InputBoxSignUp } from "../types";

const login = async ({ emailId, password }: LoginData) => {
  try {
    const response = await axios.post(
      `${BASEURL}/login`,
      {
        emailId,
        password,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const signup = async ({
  firstName,
  lastName,
  emailId,
  password,
}: InputBoxSignUp) => {
  try {
    const response = await axios.post(
      `${BASEURL}/signup`,
      {
        firstName,
        lastName,
        emailId,
        password,
      },
      { withCredentials: true }
    );
    console.log("Login successful:", response);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await axios.get(`${BASEURL}/logout`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, signup, logout };
