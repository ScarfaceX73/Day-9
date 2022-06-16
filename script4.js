// d. Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    var res = data.reduce((acc, cv) => acc + cv.population, 0)
    console.log(res);



} 