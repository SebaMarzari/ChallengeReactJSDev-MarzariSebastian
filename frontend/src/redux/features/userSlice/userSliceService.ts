import axios from "axios";

const URL = "https://admindev.inceptia.ai"

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${URL}/api/v1/login/`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { login };