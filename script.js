const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response=>response.json())
    .then ((response)=>{
    console.log(response)
    temp.innerHTML=response.temp
    temp1.innerHTML=response.temp
    min_temp.innerHTML=response.min_temp
    max_temp.innerHTML=response.max_temp
    humidity.innerHTML=response.humidity
    humidity1.innerHTML=response.humidity
    wind_speed.innerHTML=response.wind_speed
    wind_degrees.innerHTML=response.wind_degrees
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
    feels_like.innerHTML=response.feels_like
    feels_likes.innerHTML=response.feels_like
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata")

