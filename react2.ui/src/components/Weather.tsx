import React from 'react';
import axios from 'axios';

type WeatherState = {
    loading: boolean
    data: WeatherForecast[]
}

type WeatherForecast = {
    date: string,
    temperatureC: number,
    temperatureF: number,
    summary: string | null
}

class Weather extends React.Component<{}, WeatherState> {

    async componentDidMount() {
        if (!this.state?.loading) {
            this.setState({ loading: true, data: [] });
            const res = await axios.get<WeatherForecast[]>('/WeatherForecast');
            this.setState({ loading: false, data: res.data });
        }
    }

    render() {
        return (<p>{this.state?.loading ? <span>Loading...</span> : <ul>{this.state?.data.map(r => (<li>{new Date(r.date).toLocaleDateString()} - {r.temperatureC}&deg;C / {r.temperatureF}&deg;F ({r.summary})</li>))}</ul>}</p>)
    }
}

export default Weather;