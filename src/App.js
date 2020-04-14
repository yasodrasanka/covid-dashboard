import React, { Component } from 'react';

import { Charts, Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/covid.png';
class App extends Component {

    state = {
        data: {},
        country: ''
    };

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        this.setState({ data, country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="covid-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
                <footer id="footer">
                    <div class="row text-center">
                        <div class="small-12 medium-6 medium-offset-3 columns">
                            <p id="copyright">Copyright &copy; 2020 | Yasod Rasanka</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default App;