const apiKey = "7875bd8edadf408087c468444e78bd63";

const getPreGameOddsByDateURL = (date, apiKey) => {
  return `https://api.sportsdata.io/v3/mlb/odds/json/GameOddsByDate/${date}?key=${apiKey}`;
};
const getPreGameOddsByDate = () => {
  axios
    .get(getPreGameOddsByDateURL("2022-05-18", apiKey))
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
};

// Event Listeners
document.getElementById("get").addEventListener("click", getPreGameOddsByDate);

// Show Output in Browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}
