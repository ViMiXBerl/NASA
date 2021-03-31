import "./App.css";
import React from "react";
// import axios from "axios";
// import config from "./config/config.json";
import getData from "./api/index";
import ListItems from "./Components/ListItems/index";
import TextField from "@material-ui/core/TextField";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: "",
      startValue: "",
      endValue: "",
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
    // console.log(this.state.value);
    // console.log(this.state.startValue);
    // console.log(this.state.endValue);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.componentDidMount();
  };

  handleSubmitInterval = (event) => {
    event.preventDefault();
    this.componentDidMountInterval();
  };

  componentDidMount = () => {
    getData(this.state.value, this.state.startValue, this.state.endValue)
      .then((result) => {
        console.log(result);
        this.setState({
          data: [result.data],
        });
        console.log(this.state.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  componentDidMountInterval = () => {
    getData(this.state.value, this.state.startValue, this.state.endValue)
      .then((result) => {
        console.log(result);
        this.setState({
          data: [...result.data],
        });
        console.log(this.state.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  showData = () => {
    return this.state.data.map((item) => (
      <ListItems
        key={item.date + item.explanation + item.title + item.url}
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
        <form className="form">
          <input
            name="value"
            placeholder={"YYYY-MM-DD"}
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
          <button onClick={this.handleSubmit}>Отправить</button>
        </form>
        <form className="form">
          <input
            name="startValue"
            placeholder={"YYYY-MM-DD"}
            value={this.state.startValue}
            onChange={this.handleChange}
            required
          />
          <input
            name="endValue"
            placeholder={"YYYY-MM-DD"}
            value={this.state.endValue}
            onChange={this.handleChange}
            required
          />
          <button onClick={this.handleSubmitInterval}>Отправить</button>
        </form>
        <div>{this.showData()}</div>
      </div>
    );
  }
}

export default App;
