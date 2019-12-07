import React from "react"
var moment = require("moment")
var dict = {
  "01d": "wi-day-sunny",
  "02d": "wi-day-cloudy",
  "03d": "wi-cloud",
  "04d": "wi-cloudy",
  "09d": "wi-showers",
  "10d": "wi-day-rain-mix",
  "11d": "wi-thunderstorm",
  "13d": "wi-snow",
  "50d": "wi-fog",
  "01n": "wi-night-clear",
  "02n": "wi-night-alt-cloudy",
  "03n": "wi-night-alt-cloudy-high",
  "04n": "wi-cloudy",
  "09n": "wi-night-alt-sprinkle",
  "10n": "wi-night-alt-showers",
  "11n": "wi-night-alt-thunderstorm",
  "13n": "wi-night-alt-snow",
  "50n": "wi-night-fog"
}

class Weather extends React.Component {
  render() {
    let tempArray = this.props.item
    const htmlDoc = []
    if (tempArray) {
      Object.keys(tempArray).forEach(index => {
        console.log("in true")
        htmlDoc.push(
          <div className="jumbotron" key={index}>
            <div>
              <p className={dict[tempArray[index].weather[0].icon]}></p>
              <strong>
                {moment(tempArray[index].dt_txt).format("MMMM Do YYYY")}
              </strong>
            </div>
            <div>
              <p>Temperature:</p>
              <p>
                <strong>{tempArray[index].main.temp}</strong>
              </p>
            </div>
            <div>
              <p>Temperature minimum:</p>
              <p>
                <strong>{tempArray[index].main.temp_min}</strong>
              </p>
            </div>
            <div>
              <p>Max Temperature:</p>
              <p>
                <strong>{tempArray[index].main.temp_max}</strong>
              </p>
            </div>
            <div>
              <p>Pressure:</p>
              <p>
                <strong>{tempArray[index].main.pressure}</strong>
              </p>
            </div>
            <div>
              <p>Description:</p>
              <p>
                <strong>{tempArray[index].weather[0].description}</strong>
              </p>
            </div>
            <div>
              <p>
                <strong>{tempArray[index].wind.speed}</strong>
              </p>
              <p>
                <strong>{tempArray[index].wind.deg}</strong>
              </p>
            </div>
          </div>
        )
      })
    } else {
      console.log("")
    }
    return <div className="container-fluid">{htmlDoc}</div>
  }
}
export default Weather
