import queryString from 'querystring';

const fetchRaob = async function(options) {
    let url = `http://localhost:5000/sounding?${queryString.stringify(options)}`
    let response = await fetch(url)
    return response.json();
}

export default fetchRaob;