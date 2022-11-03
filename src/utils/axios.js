import axios from 'axios';

const BASE_URL='https://jobify-prod.herokuapp.com/api/v1/toolkit';

export const creatFeatch=axios.create({
    baseURL:BASE_URL
});