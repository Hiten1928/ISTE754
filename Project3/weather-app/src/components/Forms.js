import React from "react"

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather} className="index">
        <div className="formData">
          <h3 className="container">
            <label htmlFor="selectOption" className="label">
              Select City
            </label>
          </h3>
          <div className="form-group">
            <select
              name="city"
              className="form-control"
              id="selectOption"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                -- Select One --
              </option>
              <option value="Rochester">Rochester</option>
              <option value="New York">New York</option>
              <option value="Chicago">Chicago</option>
              <option value="Orlando">Orlando</option>
              <option value="San Francisco">San Francisco</option>
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Get forecast</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Form
