const form = document.querySelector("form");
const cardSRC = document.querySelector(".card img");
const card = document.querySelector(".card");
const icon = document.querySelector(".icon-TW img")
const details = document.querySelector(".details-TW");
const ul = document.querySelector("ul");
const arrow = document.querySelector(".arrow"); 
const box2 = document.querySelector(".box-2");

$(card).hide();
$(box2).hide();

const updatingUI = async(data) => {

const {cityInfo, weatherInfo, foreCastInfo} = data; 

console.log(foreCastInfo.DailyForecasts);
  
details.innerHTML = `
<h5 class="my-3">${cityInfo.EnglishName} ${cityInfo.AdministrativeArea.CountryID}</h5>
<div class="my-3">${weatherInfo.WeatherText}</div>
<div class="display-4 my-4">
  <span>${weatherInfo.Temperature.Metric.Value}</span>
  <span>&deg;C</span>
</div>
</div>`

let day_night; 
if (weatherInfo.IsDayTime) {
   day_night = `photos/true.png`;
} else {
   day_night = `photos/false.svg`
}
cardSRC.setAttribute(`src`, `${day_night}`);
icon.setAttribute(`src`, `photos/${weatherInfo.WeatherIcon}.svg`);
$(".card").fadeIn(300);
 



let now1 = new Date(foreCastInfo.DailyForecasts[1].Date);
let day1 = dateFns.format(now1, "dddd");  

let now2 = new Date(foreCastInfo.DailyForecasts[2].Date);
let day2 = dateFns.format(now2, "dddd");  

let now3 = new Date(foreCastInfo.DailyForecasts[3].Date);
let day3 = dateFns.format(now3, "dddd");  

let now4 = new Date(foreCastInfo.DailyForecasts[4].Date);
let day4 = dateFns.format(now4, "dddd");  


ul.innerHTML = `
<ul>
   <h5> ${day1} </h5>
   <li>${foreCastInfo.DailyForecasts[1].Day.LongPhrase} ${foreCastInfo.DailyForecasts[1].Temperature.Maximum.Value}&deg;C/${foreCastInfo.DailyForecasts[1].Temperature.Minimum.Value}&deg;C <span><img src="photos/${foreCastInfo.DailyForecasts[1].Day. Icon}.svg" alt=""></span></li>
</ul>
<ul>
   <h5> ${day2} </h5>
   <li>${foreCastInfo.DailyForecasts[2].Day.LongPhrase} ${foreCastInfo.DailyForecasts[1].Temperature.Maximum.Value}&deg;C/${foreCastInfo.DailyForecasts[1].Temperature.Minimum.Value}&deg;C <span><img src="photos/${foreCastInfo.DailyForecasts[1].Day. Icon}.svg" alt=""></span></li>
</ul>
<ul>
   <h5> ${day3} </h5>
   <li>${foreCastInfo.DailyForecasts[3].Day.LongPhrase} ${foreCastInfo.DailyForecasts[1].Temperature.Maximum.Value}&deg;C/${foreCastInfo.DailyForecasts[1].Temperature.Minimum.Value}&deg;C <span><img src="photos/${foreCastInfo.DailyForecasts[1].Day. Icon}.svg" alt=""></span></li>
</ul>
<ul>
   <h5> ${day4} </h5>
   <li>${foreCastInfo.DailyForecasts[4].Day.LongPhrase} ${foreCastInfo.DailyForecasts[1].Temperature.Maximum.Value}&deg;C/${foreCastInfo.DailyForecasts[1].Temperature.Minimum.Value}&deg;C <span><img src="photos/${foreCastInfo.DailyForecasts[1].Day. Icon}.svg" alt=""></span></li>
</ul>
`


}


const unpacking = async(cityName) => {
   const cityInfo = await cityAPI(cityName);
   const weatherInfo = await weatherAPI(cityInfo.Key);
   const foreCastInfo = await foreCastAPI(cityInfo.Key);


   return {cityInfo, weatherInfo, foreCastInfo}

}

let arrowIcon = true;
arrow.addEventListener("click", () => {


  if (arrowIcon === true) {
   $(box2).fadeIn(200);
   arrow.style.transform = "rotate(180deg)";
   arrow.style.transition = "1s";
   arrowIcon = false;
   console.log(arrowIcon);
  } else {
   $(box2).fadeOut(200);
   arrow.style.transform = "rotate(0deg)";
   arrow.style.transition = "1s";
   arrowIcon = true;
  }

})


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = e.target.city.value;
  
  unpacking(cityName).then((data) => {
   updatingUI(data);
  })
})








// const cityForm = document.querySelector("form");
// const card = document.querySelector(".card");
// let details = document.querySelector(".details-TW");
// const time = document.querySelector("img.time-TW");
// const icon = document.querySelector(".icon-TW img")



// const updateUI = (data) => {

// console.log(data);
// const {cityDetails, weather} = data;

// details.innerHTML = `
//    <h5 class="my-3">${cityDetails.LocalizedName} </h5>
//    <div class="my-3">${weather.WeatherText}</div>
//    <div class="display-4 my-4">
//    <span>${weather.Temperature.Metric.Value}</span>
//    <span>&deg;C</span>
// `


// let dayOrNight = weather.IsDayTime? `photos/true.svg` : `photos/false.svg`; 

// time.setAttribute(`src`, dayOrNight); 

// icon.setAttribute(`src`, `http://127.0.0.1:5500/photos/${weather.WeatherIcon}.svg`);


// if (card.classList.contains("d-none")) {
//  card.classList.remove("d-none");
// }

// };


// const updateCity = async(city) => {

//    const cityDetails = await getCity(city);
//    const weather = await getWeather(cityDetails.Key);

//    return {
//       cityDetails: cityDetails, 
//       weather: weather,
//    };
// }


// //Event listener
// cityForm.addEventListener("submit", (e) => {
// e.preventDefault();

// const city = e.target.city.value.trim();
// cityForm.reset();

// updateCity(city)
// .then((resolve)=> updateUI(resolve))
// .catch((reject) => console.log(reject));
// });



