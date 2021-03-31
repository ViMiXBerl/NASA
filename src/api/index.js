// const axios = require("axios");
import axios from "axios";
import config from "../config/config.json";

const getData = (currentDate, startDate, endDate) => {
  switch (currentDate) {
    case currentDate:
      return axios.get(
        config.apiUrl + "?api_key=" + config.apiKey + "&date=" + currentDate
      );
    //   break;
    default:
      console.log("error");
  }
  switch ((startDate, endDate)) {
    case (startDate, endDate):
      return axios.get(
        config.apiUrl +
          "?api_key=" +
          config.apiKey +
          "&start_date=" +
          startDate +
          "&end_date=" +
          endDate
      );
    //   break;
    default:
      console.log("error");
  }
};

export default getData;
