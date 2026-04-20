import { api } from "./api"

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject({
        type: "API_ERROR",
        status: error.response.status,
        data: error.response.data,
      })
    }

    if (error.request) {
      return Promise.reject({
        type: "NETWORK_ERROR",
        message: "API RESCOUNTRIES não respondeu",
      })
    }

    return Promise.reject({
      type: "UNKNOW_ERROR",
      message: error.message,
    })
  },
)
