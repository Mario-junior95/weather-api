import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
import clear from "../src/img/weather-icons/clear.svg";

import "./App.css";

class Headers extends Component{
  
  render(){
    var name = this.props.name;

    return (
        <div className = "header">
        <form>
          <input type="text" placeholder="Type a city name"></input>
          <button><a href="javascript:;">{name}</a></button>
        </form>
      </div>
      );
  }
}

class CurrentWeather extends Component{
  render(){
    console.log(this.props.current);
    return(
      <div className="mostlycloudy_section">
            <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy_img" />
            <p id="overcast">overcast clouds</p>
    <p id="temperature">Temperature&nbsp;&nbsp;<span class="degree">{this.props.current.main.temp_min}</span><span class="Celsius">{this.props.current.main.temp_max}</span></p>
            <p id="Hum_Pres">
              <span>Humidity</span>
              <span id="hum">{this.props.current.main.humidity}</span>
              <span>Pressure</span>
              <span id="pres">{this.props.current.main.pressure}</span>
            </p>
          </div>
    );
  }
}

class Weather_list extends Component{
  render(){
    var list = this.props.list;
    // console.log(list[0]);
    var tab =[];
    for(var i = 1;i<8;i++){
      tab.push(
        <section className="list1">
          <span>{list[i].dt_txt.substr(11,5)}</span>
          <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy" />
          <span>{list[i].main.temp}</span>
      </section>
      );

    }

    return(
      <div className="weather_list">
      {/* <section className="list1"> }
          {<span>03:00</span>
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
          <img alt="clear icon" src={clear} className="mostlycloudy" />
          <span>14</span>
      </section>
      <section className="list4">
          <span>12:00</span>
          <img alt="clear icon" src={clear} className="mostlycloudy" />
          <span>17</span>
      </section>
      <section class="list5">
          <span>15:00</span>
          <img alt="clear icon" src={clear} className="mostlycloudy" />
          <span>18</span>
      </section>
      <section>
          <span>18:00</span>
          <img alt="clear icon" src={clear} className="mostlycloudy" />
          <span>16</span>
      </section>
      <section>
          <span>21:00</span>
          <img alt="mostlycloudy icon" src={mostlycloudy} className="mostlycloudy" />
          <span>13</span>
      </section> */}
      {tab}
    </div>
    );
  }
}

class App extends Component {
  render() {
    var list = fakeWeatherData.list;
    for(var i = 0;i<list.length;i++){
      list[i].main.temp_max-=273.15;
      list[i].main.temp_min-=273.15;
      list[i].main.temp-=273.15;
      list[i].main.temp = Math.round(list[i].main.temp);
      list[i].main.temp_min = Math.round(list[i].main.temp_min);
      list[i].main.temp_max = Math.round(list[i].main.temp_max);

    }
    console.log(list);
     return (
       <div className="app" >
         <Headers name="FIND WEATHER"/>
         <div className="main">
           <CurrentWeather current = {list[0]}/>
           <Weather_list list = {list}/>
       </div>
     </div>
     );
   }
 }
 
export default App;