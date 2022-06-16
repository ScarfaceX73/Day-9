// c. Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    // console.log(data)
    // let res= data.filter((ele)=>ele.population<200000)
    // console.log(res);
    data.forEach(element => {
        console.log(element.name), console.log(element.capital),
            console.log(element.flag)

    });


} 