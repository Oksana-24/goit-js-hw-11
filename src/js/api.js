import axios from 'axios';

const apiInstance = axios.create({
    baseUrl: 'https://pixabay.com/api/',
    timeout:1000,
});

console.log(apiInstance)

export {
    apiInstance
}
