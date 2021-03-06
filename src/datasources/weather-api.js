const { RESTDataSource } = require("apollo-datasource-rest");
const openweatherKey = "9ecb08d726e565bf09f2edf41e5bb7d3";

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.openweathermap.org/data/2.5/";
  }
  // Perform a GET to obtain forecast data related to a location
  // with/without latitude and longitude, in Celsius unit and french language
  getWeather(location, lat, lon) {
    return this.get(
      `forecast?q=${location}&lat=${lat}&lon=${lon}&lang=fr&units=metric&appid=${openweatherKey}`
      );
    }
}
module.exports = WeatherAPI;
