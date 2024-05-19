import axios from "axios";
import getRequestConfig from "../../functions/getRequestConfig";
import { ClientData } from "./types/ClientData";

const URL = "https://admindev.inceptia.ai"

const fetchClients = async (token: string) => {
  try {
    const config = getRequestConfig.contentTypeJson(token);

    const response = await axios.get(`${URL}/api/v1/clients/`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const fetchClient = async (data: ClientData) => {
  try {
    const { id, startDate, endDate, token } = data;
    const config = getRequestConfig.contentTypeJson(token);
    const url = data.url ? data.url : `${URL}/api/v1/inbound-case/?bot=${id}&local_updated__date__gte=${startDate}&local_updated__date__lte=${endDate}`;

    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchClients, fetchClient };