const resBtn = document.querySelector("#residents");
let resContainer = document.querySelector("#residents-container")

function btnClicked() {
  resContainer.innerHTML = ''
  axios.get("https://swapi.dev/api/planets/?search=alderaan").then((res) => {
    for (let i in res.data.results[0].residents) {
      axios.get(res.data.results[0].residents[i]).then((res) => {
        let { name } = res.data;
        let resH2 = document.createElement("h2");
        resH2.innerHTML = name;
        resContainer.appendChild(resH2);
      });
    }
  });
}
resBtn.addEventListener("click", btnClicked);
