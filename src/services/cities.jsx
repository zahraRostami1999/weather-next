import axios from "axios";
const APIURL = "http://localhost:3001/cities";

export const getCities = async () => {
    try {
        const reponse = await axios.get(APIURL);
        return reponse.data;
    } catch (err) {
        console.log(err);

    }
}

export const searchCity = async (city) => {
    try {
        const reponse = await axios.get(APIURL);
        const cities = reponse.data;
        const filteredCities = cities.filter((c) => c.name.toLowerCase().includes(city.toLowerCase()));
        return filteredCities;
    } catch (err) {
        console.log(err);

    }
}