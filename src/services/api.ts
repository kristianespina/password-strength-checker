import axios from "axios";

const API_HOST = process.env.REACT_APP_API_HOST || "http://127.0.0.1";

async function post(endpoint: String, body: Object) {
  try {
    let response = await axios.post(API_HOST + endpoint, body);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export { post };
