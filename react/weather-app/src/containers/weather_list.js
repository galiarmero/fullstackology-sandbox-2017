import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        
        return (
            <tr key={ cityName }>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color='#00ff19' units='K' /></td>
                <td><Chart data={pressures} color='#00bbff' units='hPa' /></td>
                <td><Chart data={humidities} color='#ffd400' units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th style={ { width: '25%' } }>City</th>
                        <th style={ { width: '25%' } }>Temperature (K)</th>
                        <th style={ { width: '25%' } }>Pressure (hPa)</th>
                        <th style={ { width: '25%' } }>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);