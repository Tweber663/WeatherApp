const API = `DauCpmlsNea6EeyUwcSCe80QmAgmcpkC`;


const foreCastAPI = async(cityKey) => {

  const URL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API}&details=true&metric=true`;
  
  const resolve = await fetch(URL);
  const JSON_data = await resolve.json();
  
  return JSON_data;
}


const weatherAPI = async(cityKey) => {

  const URL = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API}`;
  
  const resolve = await fetch(URL);
  const JSON_data = await resolve.json();
  return JSON_data[0];
}


const cityAPI = async(cityName) => {

   const URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API}&q=${cityName}`; 

   const resolve = await fetch(URL);
   const JSON_data = await resolve.json();
   
   return JSON_data[0];

}

















// const API = "OniVFl3A1tUmyKGMjkDrHFi1WmOpcIAK";

// //Getting City Weather
// const getWeather = async(cityAPI) => { //x 
  
//   const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//   const query = `${cityAPI}?apikey=${API}`;
 
//   const resolve1 = await fetch(base + query);
//   const data = await resolve1.json();

// return data[0];

// }


// //Getting City API 
// const getCity = async(city) => {

//     const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//     const query = `?apikey=${API}&q=${city}`;

//     const resolve = await fetch(base + query);
//     const JSON_data = await resolve.json(); 
//     console.log(JSON_data);
//     return JSON_data[0];
// }




// getCity("London").then((resolve)=> {
//  return getWeather(resolve.Key);
// }).then((resolve1) => {
//     console.log(resolve1);
// }).catch((reject)=> {
//     console.log(reject);
// })

