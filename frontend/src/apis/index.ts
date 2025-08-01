import axios from "axios";

async function get_user_details() {
  const response = await axios.get("http://localhost:5000/api/user");
  return response.data;
}

async function get_leaderboard() {
  const response = await axios.get("http://localhost:5000/api/leaderboard");
  return response.data;
}

export { get_user_details, get_leaderboard };