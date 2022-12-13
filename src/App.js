import React from 'react';
import './App.css';
import Country from './country';


const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNewCity = this.addNewCity.bind(this);
    this.deleteCity = this.deleteCity.bind(this);
  }

  render() {
    const countries = this.state
      ? this.state.countries.map((country, index) =>
      <Country
        key={index}
        data={country}
        addNewCity={this.addNewCity}
        deleteCity={this.deleteCity} />)
      : null;
      return (
        <div>
          {countries}
        </div>
      );
  }

  componentDidMount() {
    fetch('https://ancient-taiga-31359.herokuapp.com/api/houses')
      .then(response => response.json())
      .then(data => {
        this.setState({
          countries: data
        });
      });
    fetch(HOUSES_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        this.setState({
          countries: data
        });
      });
  }

  deleteCity(e, country, city) {
    const index = country.cities.indexOf(city);
    country.cities.splice(index, 1);
    updateCountry(country)
      .then(() => {
        this.setState(state => {
          for (let h of state.countries) {
            if(h._id === country._id) {
              let h = country;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }

  addNewCity(e, country, city) {
    country.cities.push(city);
    updateCountry(country)
      .then(() => {
        this.setState(state => {
          for (let h of state.countries) {
            if(h._id === country._id) {
              let h = country;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }
}

function updateCountry(country) {
  return fetch(`${HOUSES_ENDPOINT}/${country._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(country)
  });
}
