import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_WP_API_URL,
  withCredentials: true, // needed for Store API cart session cookie
})

export default client