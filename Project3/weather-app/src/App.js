import React from "react"
import Titles from "./components/Titles"
import Form from "./components/Forms"
import Weather from "./components/Weather"
import Nav from "./components/Nav"

const key = "299ac979ca424649438d4f5d5900f341"

class App extends React.Component {
  state = {
    item: " "
  }
  //API call
  getWeather = async e => {
    console.log(e.target.value)
    e.preventDefault()
    let city = e.target.elements.city.value
    console.log(city)
    const call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&appid=${key}&units=metric`
    )
    const data = await call.json()
    console.log(data)

    if (city !== "DEFAULT") {
      console.log("in if")
      const list = data.list
      console.log(list)
      let tempList = []

      list.map((item, key) => {
        if (item.dt_txt.includes("15:00:00")) {
          tempList.push(item)
        }
        return true
      })
      console.log(tempList)

      this.setState({
        temp: tempList
      })
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Titles />
        <div className="data">
          <Form getWeather={this.getWeather} />
          <Weather item={this.state.temp} />
        </div>
      </div>
    )
  }
}

export default App
