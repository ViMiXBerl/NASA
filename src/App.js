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
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    console.log(this.state.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.componentDidMount();
  };

  componentDidMount = () => {
    getData(this.state.value, this.state.startDate, this.state.endDate)
      .then((result) => {
        console.log(result);
        this.setState({
          data: [result.data],
        });
        // console.log(this.state.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .then((result) => {
    //   console.log(result);
    //   this.setState({
    //     data: [result.data],
    //   });
    //   // always executed
    // });
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
        <form className="form">
          <input
            type="text"
            placeholder={"YYYY-MM-DD"}
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
          <button onClick={this.handleSubmit}>Отправить</button>
        </form>
        <div>{this.showData()}</div>
      </div>
    );
  }
}

export default App;
