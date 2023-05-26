// const app = Document.querySelector('.weather-app'); const temp =
// document.querySelector('.temp'); const dateOutput =
// document.querySelector('.date'); const timeOutput =
// document.querySelector('.time'); const conditionOutput =
// document.querySelector('.condition'); const icon =
// document.querySelector('.icon'); const nameOutput =
// document.querySelector('.name'); const cloudOutput =
// document.querySelector('.cloud'); const himidityOutput =
// document.querySelector('.humidity'); const windOutput =
// document.querySelector('.wind'); const form =
// document.querySelector('.locationInput'); const search =
// document.querySelector('.search'); const cities =
// document.querySelector('.city'); const btn =
// document.querySelector('.submit'); default city when the page loads let
// cityInput = "Patna"; add click event to each city below search
// cities.forEach((city) => {     city.addEventListener('click', (e) => { chnage
// from default city to clicked one         cityInput = e.target.innerHTML;
// function that fetches and  displays all data from the weather api
// fetchWeatherData();         fade out the app(simple animation)
// app.style.opacity = "0";     }); }) add submit event to the form
// form.addEventListener('submit', (e) => {     /*if input field (search bar)
// is empty ,throws an alert*/     if (search.value.length == 0) {
// alert("Please enter a city");     } else {         /*change default city to
// the one written on the input field*/ cityInput = search.value;
// /*function that fetches and display all the data         from the weather
// api*/         fetchWeatherData(); remove all text from input field
// search.value = "";         fade out the app(simple animation)
// app.style.opacity = "0";     } e.preventDefault(); }); /* function that
// returns a day of the weeeek (mon ,tues..)from a date(12-05-23) */ function
// dayOfTheWeek(day, month, year) { const weekday = [         "Sunday",
// "Monday",         "Tuesday", "Wednesday",         "Thrusday",
// "Friday",         "Saturday"     ]; return weekday[new
// Date('${day}/${month}/${year}').getDate()]; }; /*function that fetches and
// displays the data from weather API*/ fetch(
// 'https://api.weatherapi.com/v1/current.json?key=df25aed3d2e5497b9ce51038231205=$'
// +     '{cityInput}' ) /*take the data (which is is json format     and
// convert it to a regular js object*/     .then(response => response.json())
// .then(data => {             /*we can console log data to see what is
// available*/             console.log(data);             /*now start adding
// temperature and weather contion to page*/             temp.innerHTML =
// data.current.temp_c + "&#176;";             conditionOutput.innerHTML =
// data.current.condition.text;             /* now get date and time from  city
// and extract the day , month and time into
//  * individual variable
// */             const date = data.location.locatime;             const y =
// parseInt(date.substr(0, 4));             const d = parseInt(date.substr(5,
// 2));             const m = parseInt(date.substr(8, 2));             const
// time = date.substr(11);             /*reformat date into something more
// appealing and data to the page*/             /*original date
// format:2023-05-12 new format: 17-53 - Friday 12, 05,2023*/
// dateOutput.innerHTML = '${dayOfTheWeek(d,m,y)} ${d}, ${m} ${y}';
// timeOutput.innerHTML = time;             add the name of city into page
// nameOutput.innerHTML = data.location.name;             /*get the
// corrosponding icon url for the weather and extract a part of it*/ const icon
// = data                 .current                 .condition .icon
// .substr("//cdn.weatherapi.com/weather/64x64/".lenght); /*reformat the icon
// url to own loacal folder padth and add to the page*/ icon.src = "./icons/" +
// iconId;             add the weather deatils to page cloudOutput,
// innerHTML = data.current.cloud + "%"; humidity.Output.innerHTML =
// data.current.humidity + "%"; windOutput.innerHTML = data.current.wind_kph +
// "km/hr";             set default time of day             let timeOfDay =
// "day";              get the unique id for each weather condition change to
// night if its night time in the city             if (!data.current.is_day) {
// timeOfDay = "night";             }             if (code == 1000) { set the
// background image to clar if wheather is clear app.style.backgroundImage =
// 'url(./images/${timeOfDay}/clear.jpg)'; /*change the button bg color depening
// on if it is night or day*/ btn.style.background = "#e5ba92";
// if (timeOfDay == "night") { btn.style.background = "#181e27" same thing for
// cloudy weather; }             } else if (code == 1003 || code == 1006 || code
// == 1009 || code == 1030 || code == 1069 || code == 1087 || code == 1135 ||
// code == 1273 || code == 1276 || code == 1279 || code == 1282) {
// app.style.backgroundImage = 'url(./images/${timeOfDay}/cloudy.jpg)';
// btn.style.background = "#fa6d1b"                 if (timeOfDay == "night") {
// btn.style.background = "#181e27";                 }             } else if
// (code == 1063 || code == 1069 || code == 1072 || code == 1150 || code == 1153
// || code == 1180 || code == 1186 || code == 1189 || code == 1192 || code ==
// 1195 || code == 1204 || code == 1207 || code == 1243 || code == 1246 || code
// == 1249 || code == 1252 ||) {                 app.style.backgroundImage =
// 'url(./images/${timeOfDay}/rain.jpg)';                 btn.style.background =
// "#647d75"                 if (timeOfDay == "night") { btn.style.background =
// forn snow                     "#3255c80"; } else {
// app.style.backgroundImage = 'url(./images/${timeOfDay}/snow.jpg)';
// btn.style.background = "#4d72aa";                     if (timeOfDay ==
// "night") {                         btn.style.background = "#1b1b1b"; }
// }                 fade app once all done app.style.opacity = 1;             }
// )         if user enter  a unknown city that not exists give error
// .catch(() => { alert('city not found,please try another!!:)');
// app.style.opacity
// = 1;         });     }  call the function on page load fetchWeatherData();
// fade in the page app.style.opacity="1";

const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const icon = document.querySelector(".icon");
const nameOutput = document.querySelector(".name");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.querySelector("#location-input");
const search = document.querySelector(".search");

const cities = document.querySelectorAll(".city");
const btn = document.querySelector(".submit");

// default city when the page loads
let cityInput = "Patna";

// add click event to each city below search
cities.forEach((city) => {
    city.addEventListener("click", (e) => {
        // change from default city to clicked one
        cityInput = e.target.innerHTML;
        // function that fetches and displays all data from the weather API
        fetchWeatherData();
        // fade out the app (simple animation)
        app.style.opacity = "0.9";
    });
});

// add submit event to the form
form.addEventListener("submit", (e) => {
    // if input field (search bar) is empty, throw an alert
    if (search.value.length == 0) {
        alert("Please enter a city");
    } else {
        // change default city to the one written in the input field
        cityInput = search.value;
        // function that fetches and displays all the data from the weather API
        fetchWeatherData();
        // remove all text from input field
        search.value = "";
        // fade out the app (simple animation)
        app.style.opacity = "0";
    }
    e.preventDefault();
});

// function that returns a day of the week (Mon, Tue, ...) from a date
// (12-05-23)
function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
}

// function that fetches and displays the data from weather API
function fetchWeatherData() {
    fetch(
        `https://api.weatherapi.com/v1/current.json?key=84ca547e0101462ab7b162836232605&q=${cityInput}`
    )
        .then((response) => response.json())
        .then((data) => {
            // we can console log data to see what is available
            console.log(data);

            // now start adding temperature and weather condition to the page
            temp.innerHTML = data.current.temp_c + "&#176;";
            conditionOutput.innerHTML = data.current.condition.text;

            // now get date and time from the city and extract the day, month, and time into
            // individual variables
            const date = data.location.localtime;
            const y = parseInt(date.substr(0, 4));
            const d = parseInt(date.substr(8, 2));
            const m = parseInt(date.substr(5, 2));
            const time = date.substr(11);

            // reformat date into something more appealing and add data to the page original
            // date format: 2023-05-12 new format: 17:53 - Friday 12, 05, 2023
            dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`;
            timeOutput.innerHTML = time;

            // add the name of the city to the page
            nameOutput.innerHTML = data.location.name;

            // get the corresponding icon URL for the weather and extract a part of it
            const iconId = data
                .current
                .condition
                .icon
                .substr("//cdn.weatherapi.com/weather/64x64/".length);

            // reformat the icon URL to own local folder path and add it to the page
            icon.src = `./icons/${iconId}`;

            // add the weather details to the page
            cloudOutput.innerHTML = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_kph + "km/hr";

            // set default time of day
            let timeOfDay = "day";

            // get the unique id for each weather condition, change to night if it's night
            // time in the city
            if (!data.current.is_day) {
                timeOfDay = "night";
            }

            const code = data.current.condition.code;

            if (code == 1000) {
                // set the background image to clear if the weather is clear
              
                // document.body.style.backgroundImage
                document.body.style.backgroundImage  = `url(./images/${timeOfDay}/clear.jpg)`;
                // change the button background color depending on if it is night or day
                btn.style.background = "#e5ba92";
                if (timeOfDay == "night") {
                    // app.style.backgroundImage 
                    // document.body.style.backgroundImage
                   document.body.style.backgroundImage = `url(./images/${timeOfDay}/clear.jpg)`;
                    btn.style.background = "#181e27";
                }
            } else if (code == 1003 || code == 1006 || code == 1009 || code == 1030 || code == 1069 || code == 1087 || code == 1135 || code == 1273 || code == 1276 || code == 1279 || code == 1282) {
                document.body.style.backgroundImage  = `url(./images/${timeOfDay}/cloudy.jpg)`;
                btn.style.background = "#fd1b";
                if (timeOfDay == "night") {
                    // app.style.backgroundImage 
                    document.body.style.backgroundImage   = `url(./images/${timeOfDay}/cloudy.jpg)`;
                    btn.style.background = "#181e27";
                }
            } else if (code == 1063 || code == 1069 || code == 1072 || code == 1150 || code == 1153 || code == 1180 || code == 1186 || code == 1189 || code == 1192 || code == 1195 || code == 1204 || code == 1207 || code == 1243 || code == 1246 || code == 1249 || code == 1252) {
                // app.style.backgroundImage
                document.body.style.backgroundImage   = `url(./images/${timeOfDay}/snow.jpg)`;
                btn.style.background = "#647d75";
                if (timeOfDay == "night") {
                    // app.style.backgroundImage
                    document.body.style.backgroundImage   = `url(./images/${timeOfDay}/snow.jpg)`;
                    btn.style.background = "#3255c8";
                }
            } else {
                // app.style.backgroundImage
      
                document.body.style.backgroundImage = `url(./images/${timeOfDay}/rain.jpg)`;
                btn.style.background = "#4d72aa";
                if (timeOfDay == "night") {
                    // app.style.backgroundImage
                    document.body.style.backgroundImage = `url(./images/${timeOfDay}/rain.jpg)`;
                    btn.style.background = "#1b1b1b";
                }
            }

            // fade app once all done
            app.style.opacity = "1";
        })
        // if the user enters an unknown city that does not exist, give an error
        .catch(() => {
            alert("City not found, please try another city.");
            app.style.opacity = "1";
        });
}

// call the function on page load
fetchWeatherData();

// fade in the page
app.style.opacity = "1";
