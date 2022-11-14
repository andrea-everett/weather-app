const API_KEY = 'de56c44ccd2a48f11e5157d736d0e48f'

const makeIconURL = (iconId) => `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0BKv3SB_9IA1N0Aw5ITb-Vy1-v72nKfBjQ&usqp=CAU/${iconId}`

const getFormattedWeatherData = async (city, units  = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);

    const {weather, 
                 main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
                  wind: { speed },
                  sys: { country },
                  name,  
            } = data;

            const {description, icon} = weather[0];

            return {
                     description,
                     iconURL:makeIconURL(icon),
                      temp,
                      feels_like, 
                      temp_min, 
                      temp_max, 
                      pressure, 
                      humidity,
                      speed, 
                      country, 
                      name
            }
    };

export { getFormattedWeatherData }
