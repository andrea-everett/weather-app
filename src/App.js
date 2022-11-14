import sunBG from "./assets/snow.jpeg";
import coldBG from "./assets/sun.jpeg";
import Descriptions from "./components/Descriptions";
import { useEffect } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('paris');
      console.log(data);
    };
    
    fetchWeatherData();
  }, [])


  return (
    <div className="app" style={{backgroundImage:`url(${coldBG})`
    }}>
      <div className="overlay">
        <div className="container">
          <div className="section section_inputs">
              <input type="text" name="city" placeholder="Enter City...." />
              <button>°F</button>
          </div>

          <div className="section section_temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img src="https://www.seekpng.com/png/detail/161-1612603_large-cloud-comments-png-cloud-icon-large.png" alt="weatherIcon"  width={200} height={200}/>
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
                <h1>34 °C</h1>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;

