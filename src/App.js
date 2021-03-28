import "./App.css";
import React from "react";
import ListItems from "./Components/ListItems/index";

const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.componentDidMount();
  };

  componentDidMount = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod" +
          "?api_key=" +
          "adnadkOeaqHy7djqeghPkQsu6puT7nMRX6Fifnth" +
          "&date=" +
          this.state.value
      )
      .then((result) => {
        // console.log(result);

        this.setState({
          data: [result.data],
        });
        // console.log(this.state.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  showData = () => {
    return this.state.data.map((item) => (
      <ListItems
        key={item.date + item.explanation + item.url}
        date={item.date}
        explanation={item.explanation}
        title={item.title}
        url={item.url}
      />
    ));
  };

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="YYYY-MM-DD"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Отправить</button>
        </form>
        <div>{this.showData()}</div>
      </div>
    );
  }
}

export default App;
