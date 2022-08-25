console.clear();

let input = document.querySelector("#input");

let btn = document.querySelector("#btn");

let iframe = document.querySelector("#iframe");

let weaherValue = document.querySelector("#weatherValue");

let weatherLocation = document.querySelector("#weatherLocation");

let weatherDescription = document.querySelector("#weatherDescription");

let windSpeed = document.querySelector("#windSpeed");

let Clouds = document.querySelector("#clouds");

let sunRise = document.querySelector("#sunrise");

let sunSet = document.querySelector("#sunset");

let humidity = document.querySelector("#humidity");

btn.addEventListener("click", () => {
  const text = input.value;
  iframe.src =
    "https://www.google.com/maps/embed/v1/search?key=AIzaSyCMgQ1OOZS1zes8V8JuDHJ9hR00T1Is-5A&maptype=satellite&q=" +
    text +
    "&zoom=14";
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      text +
      "&appid=16fb3a3474ba77f060d5bc28c705e2d7"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const Location = data.name;
      const Description = data.weather[0].description;
      const Humidity = data.main.humidity;
      const SunRise = data.sys.sunrise;
      let date = new Date(SunRise * 1000);

      let sunRiseTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const Sunset = data.sys.sunset;
      let anodate = new Date(Sunset * 1000);
      let sunSetMin = anodate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const windspeed = data.wind.speed;
      const clouds = data.clouds.all;
      const kelvin = data.main.temp;
      const temp = kelvin - 273.15;
      const celcius = temp.toFixed(2);
      weaherValue.innerHTML = celcius;
      weatherLocation.innerHTML = Location;
      weatherDescription.innerHTML = Description;
      windSpeed.innerHTML = windspeed;
      Clouds.innerHTML = clouds;
      sunRise.innerHTML = sunRiseTime;
      sunSet.innerHTML = sunSetMin;
      humidity.innerHTML = Humidity;
      input.value = "";
    });
});
