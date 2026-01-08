import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/", // Replace with your base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Function to get the stored token from cookies
const getToken = () => {
  return Cookies.get("access_token");
};

// Function to get the refresh token from cookies
// const getRefreshToken = () => {
//   return Cookies.get("refreshToken");
// };

// Function to set the new access token in cookies
const setAccessToken = (token) => {
  Cookies.set("access_token", token, { expires: 7 });
};

let isRefreshing = false;
let refreshSubscribers = [];

const onRefreshed = (newAccessToken) => {
  refreshSubscribers.forEach((callback) => callback(newAccessToken));
  refreshSubscribers = [];
};

// Function to refresh the token
const refreshAccessToken = async () => {
  if (isRefreshing) {
    // If a refresh is already in progress, return a promise that resolves once the token refresh completes
    return new Promise((resolve) => {
      refreshSubscribers.push(resolve);
    });
  }

  isRefreshing = true;

  try {
    const response = await axios.post(
      "http://localhost:4000/accounts/refresh-token",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    ); // The refresh token is sent via cookies automatically
    const { jwtToken } = response.data;
    setAccessToken(jwtToken);
    isRefreshing = false;

    onRefreshed(jwtToken); // Notify all waiting requests
    return jwtToken;
  } catch (error) {
    isRefreshing = false;
    console.error("Error refreshing token", error);
    throw error;
  }
};

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error is due to an expired token, attempt to refresh it
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();

        // Update the Authorization header with the new access token
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Retry the original request with the new token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle error if the token refresh fails
        console.error("Token refresh failed", refreshError);
        // Redirect to login page or handle appropriately
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

// User Jumps on the page
//  Api call made and we got error 401 (unauthorized)
//  We have to call refresh tokan api to get new access token
//  We have to set the new access token in the header and call the last api again

// access token ---> 5 hours
// refresh token ---> 7 days

// case 1 :-
//  access token expired
//  refresh token not expired
//  we have to call refresh token api to get new access token
//  we have to set the new access token in the header and call the last api again

// case 2 :-
//  access token expired
//  refresh token expired
//  we have to redirect to the login page

// api 1 --> 401
// api 2 --> 401
// api 3 --> 401

// refreshtoken api needs to call only single time.
