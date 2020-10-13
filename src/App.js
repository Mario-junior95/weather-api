import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
import clear from "../src/img/weather-icons/clear.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mario"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <div className = "header">
          <p>london</p>
          <form>
            <button><a href="javascript:;">find weather</a></button>
          </form>
        </div>
        <div className="main">
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
          <div class="weather_list">
            <section class="list_hours">
              <span>03:00</span>
              <span>06:00</span>
              <span>09:00</span>
              <span>12:00</span>
              <span>15:00</span>
              <span>18:00</span>
              <span>21:00</span>
            </section>
            <section class="list_icons">
            <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy" />
            <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy" />
            <img alt="mostlycloudy icon" src={clear} className="mostlycloudy" />
            <img alt="mostlycloudy icon" src={clear} className="mostlycloudy" />
            <img alt="mostlycloudy icon" src={clear} className="mostlycloudy" />
            <img alt="mostlycloudy icon" src={clear} className="mostlycloudy" />
            <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy" />
            </section>
            <section class="list_degree">
              <span>8</span>
              <span>9</span>
              <span>14</span>
              <span>17</span>
              <span>18</span>
              <span>16</span>
              <span>13</span>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
