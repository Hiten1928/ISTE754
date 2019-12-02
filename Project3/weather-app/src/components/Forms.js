import React from "react"

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <select name="city" className="form-control">
          <option value="">-- Select One --</option>
          <option value="Rochester">Rochester</option>
          <option value="New York">New York</option>
          <option value="Chicago">Chicago</option>
          <option value="Orlando">Orlando</option>
          <option value="San Francisco">San Francisco</option>
        </select>
        <button>Get forecast</button>
      </form>
    )
  }
}

export default Form
