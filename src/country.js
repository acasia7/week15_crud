import React from 'react';
import NewCityForm from './new-city-form';

export default class Country extends React.Component {
    render() {
        const cities = this.props.data.cities
            ? this.props.data.cities.map((city, index) =>
                <li key={index}>
                    {city.name} Area: {city.area}
                    <button onClick={e =>
                    this.props.deleteCity(e, this.props.data, city)
                }>Delete</button>
                </li>)
            : null;
            return (
                <div>
                    <h1>{this.props.data.name}</h1>
                    <ul>
                        {cities}
                    </ul>
                    <NewCityForm
                        addNewCity={this.props.addNewCity} data={this.props.data} />
                </div>
            );
    }
}