//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
function getData() {
    const city = search.value;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2f660805f5mshe7902536c3102cap160aacjsnd481503e560f',
            'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ' + city, options)

    .then(response => response.json())
        .then(res => {
            console.log(res);
            temp.innerHTML = res.temp;
            ws.innerHTML = res.wind_speed;
            hmdty.innerHTML = res.humidity;
        })
        .catch(err => console.log(err));
}