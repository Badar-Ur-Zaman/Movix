import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2ZmN2NhYTg0YzZjYzE4NGRiMTBkODY3OGZiMjg5YSIsInN1YiI6IjY1Njg4NDgzZmI1Mjk5MDExZjcwZDc5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a7XZ755V0EfThS5HSV4xTKAeXDxsa0ii2FJ1QSCUIng";

const header = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params)=>{
    try {
        const {data} = await axios.get(
            BASE_URL + url,{
                headers: header, params
            })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}