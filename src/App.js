import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
import clear from "../src/img/weather-icons/clear.svg";

import "./App.css";

class Headers extends Component{
  render(){
      return (
        <div className = "header">
        <form>
          <input type="text" placeholder="Type a city name"></input>
          <button><a href="javascript:;">find weather</a></button>
        </form>
      </div>
      );
  }
}

class Mostlycloudy extends Component{
  render(){
    return(
      <div className="mostlycloudy_section">
            <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy_img" />
            <p id="overcast">overcast clouds</p>
            <p id="temperature">Temperature&nbsp;&nbsp;<span class="degree">10</span><span class="Celsius">11</span></p>
            <p id="Hum_Pres">
              <span>Humidity</span>
              <span id="hum">78</span>
              <span>Pressure</span>
              <span id="pres">1008.48</span>
            </p>
          </div>
    );
  }
}

class Weather_list extends Component{
  render(){
    return(
      <div className="weather_list">
      <section className="list1">
          <span>03:00</span>
          <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy" />
          <span>8</span>
      </section>
      <section>
          <span>06:00</span>
          <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy" />
          <span>9</span>
      </section>
      <section >
          <span>09:00</span>
          <img alt="mostlycloudy icon" src={clear} className="mostlycloudy" />
          <span>14</span>
      </section>
      <section className="list4">
          <span>12:00</span>
          <img alt="mostlycloudy icon" src={clear} className="mostlycloudy" />
          <span>17</span>
      </section>
      <section class="list5">
          <span>15:00</span>
          <img alt="mostlycloudy icon" src={clear} className="mostlycloudy" />
          <span>18</span>
      </section>
      <section>
          <span>18:00</span>
          <img alt="mostlycloudy icon" src={clear} className="mostlycloudy" />
          <span>16</span>
      </section>
      <section>
          <span>21:00</span>
          <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy" />
          <span>13</span>
      </section>
    </div>
    );
  }
}

class App extends Component {
  render() {
     return (
       <div className="app">
         <Headers/>
         <div className="main">
           <Mostlycloudy/>
           <Weather_list/>
       </div>
     </div>
     );
   }
 }
 
export default App;