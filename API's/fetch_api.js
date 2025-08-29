let btn = document.querySelectorAll("#btn");
let fact = document.querySelectorAll("fact");

const URL = "https://cat-fact.herokuapp.com/fact";

const fact_api = async () => {
    console.log("Getting Data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    fact.innerText = data[1].text;
    
}