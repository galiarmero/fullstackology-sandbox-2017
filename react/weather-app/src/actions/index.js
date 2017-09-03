import axios from 'axios';

const API_KEY = "ad671f1fee501e37244179cff923b637";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ph`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}