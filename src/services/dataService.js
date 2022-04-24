import axios from 'axios';

async function getDataFromBackend() {
    return await axios.get('https://swdapi.ddns.net:8090/data/ttntest')
}

export {
    getDataFromBackend
}