const axios = require("axios");
const apiKey = process.env.SPORTSDATAKEY;
const getPreGameOddsByDateURL = (date, apiKey) => {
  `https://api.sportsdata.io/v3/mlb/odds/json/GameOddsByDate/${date}?key=${apiKey}`;
};
const getPreGameOddsByDate = () => {
  axios
    .get(getPreGameOddsByDateURL("2022-05-18", apiKey))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// Event Listeners
document.getElementById("get").addEventListener("click", getPreGameOddsByDate);
