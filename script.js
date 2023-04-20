async function getData() {
    try {
        var rawdata = await fetch("https://restcountries.com/v3.1/name/Bharat")
        var data = await rawdata.json()
        data = data[0]
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("area").innerHTML = data.area
        document.getElementById("population").innerHTML = data.population
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("startOfWeek").innerHTML = data.startOfWeek
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("unMember").innerHTML = data.unMember
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("googleMap").href = data.maps.googleMaps
    }
    catch (error) {
        alert("Country Name Not Found")
    }
}
async function fun() {
    try {
        var name = document.getElementById("search").value
        var rawdata = await fetch("https://restcountries.com/v3.1/name/" + name)
        var data = await rawdata.json()
        data = data[0]
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("area").innerHTML = data.area
        document.getElementById("population").innerHTML = data.population
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("startOfWeek").innerHTML = data.startOfWeek
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("unMember").innerHTML = data.unMember
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("googleMap").href = data.maps.googleMaps
    }
    catch (error) {
        alert("Country Name Not Found")
    }
}
getData()


