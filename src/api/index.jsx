// import axios from "axios";
import axios from "axios"



const getCurrentPost = () =>{
  return  axios
  .get(
    "https://api.nasa.gov/planetary/apod" +
      "?api_key=" +
      "adnadkOeaqHy7djqeghPkQsu6puT7nMRX6Fifnth"
  )
  .then(function () {
    // handle success
    console.log();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

export default getCurrentPost();
