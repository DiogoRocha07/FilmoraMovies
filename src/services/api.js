import axios from "axios";

//https://api.themoviedb.org/3/movie/latest?api_key=2881b1906adce8ef8216032d6bd2a195&language=en-US\

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;