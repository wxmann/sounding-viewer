import queryString from 'querystring';

const fetchRaob = async function(options) {
    let url = `http://localhost:5000/sounding?${queryString.stringify(options)}`;
    let response = await fetch(url);
    return response.json();
}

const fetchParameters = async function(soundingData) {
    let url = 'http://localhost:5000/params';
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(soundingData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

export {
    fetchRaob, fetchParameters
};