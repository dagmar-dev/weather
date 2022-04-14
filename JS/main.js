fetch(
    'http://api.weatherapi.com/v1/forecast.json?key=003c371f220c43198f713918221404&q=kingston&days=5&aqi=no&alerts=no'
)
    .then((response) => response.json())
    .then((weather) => {
        document.querySelector('.city').innerText = weather.location.name
        document.querySelector('.currentTemp').innerText =
            weather.current.temp_c + '\xB0'
            document.querySelector('.condition').innerText =
                weather.current.condition.text
        document.querySelector('.highTemp').innerText =
            'H:' + weather.forecast.forecastday[0].day.maxtemp_c + '\xB0'
        document.querySelector('.lowTemp').innerText =
            'L:' + weather.forecast.forecastday[0].day.mintemp_c + '\xB0'
    })
