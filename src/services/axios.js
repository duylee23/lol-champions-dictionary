import axios from "axios";

const instance = axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion.json'
})

export default instance