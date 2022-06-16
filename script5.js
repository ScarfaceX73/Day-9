// e. Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    var res = data.filter((ele) => ele.currencies[0].code == "USD").map((ele) => ele.name)
    console.log(res);



} 