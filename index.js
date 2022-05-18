const axios = require("axios");

const getSportsData = () => {
  axios
    .get(myURL)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
