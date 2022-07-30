var city_name = document.querySelector('#city');

var btn = document.querySelector('#btn')


btn.addEventListener('click', function() {



    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city_name.value + '&appid=879dd45bc35802f61fa5253f4c0c939c')
        .then((response) => {
            return (response.json());
        })
        .then((data) => {
            // console.log(data.weather[0].main);
            var weather_status = data.weather[0].main;
            var weather_info = document.querySelector('.weather-info')
            weather_info.innerHTML = weather_status;


            console.log(data);
            var temp = document.querySelector('.temp')
            var temprature = data.main.temp;

            function tempf() {
                // return ((temprature - 32) * 0.5);

                return (temprature - 32.0) * 5.0 / 9.0
            }
            temp.innerHTML = tempf();

        })
        .catch();



})