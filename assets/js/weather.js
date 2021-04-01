
 function getData() {
fetch("https://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=bc1344f8ebce6b1ad38944763ec08efc")
    .then(response => response.json())
    .then((data) => sortParam(data.results));
}
document.getElementById('getData').addEventListener('click', getData);

//All characters

function sortParam(allChars) {
    console.log(allChars)
}