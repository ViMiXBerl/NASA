// const axios = require("axios");
import axios from "axios";
import config from "../config/config.json";

const getData = (currentDate, startDate, endDate) => {
  switch (currentDate || (startDate, endDate)) {
    case currentDate: // if (x === 'value1')
      return axios.get(
        config.apiUrl + "?api_key=" + config.apiKey + "&date=" + currentDate
      );

    case (startDate, endDate): // if (x === 'value2')
      return axios.get(
        config.apiUrl +
          "?api_key=" +
          config.apiKey +
          "&start_date=" +
          startDate +
          "&end_date=" +
          endDate
      );

    default:
      console.log("error");
  }
};

export default getData;
