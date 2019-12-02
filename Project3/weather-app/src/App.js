import React from "react"
import Titles from "./components/Titles"
import Form from "./components/Forms"
import Weather from "./components/Weather"

const key = "299ac979ca424649438d4f5d5900f341"

class App extends React.Component {
  //API call
  getWeather = async e => {
    e.preventDefault()
    const call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${e.target.elements.city.value},us&mode=json&appid=${key}&units=metric&cnt=15`
    )
    const data = await call.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    )
  }
}

export default App
