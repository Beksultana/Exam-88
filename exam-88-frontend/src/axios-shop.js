import axios from 'axios';
import {apiURL} from "./constans";

const inctance = axios.create({
    baseURL: apiURL
});

export default inctance;