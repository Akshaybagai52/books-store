import axios from 'axios';

const API_BASE_URL = 'http://68.178.162.203:8080/application-test-v1.1';

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
