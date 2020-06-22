import React, { Component } from 'react';
import { Cards, Chart, CountryPicker} from './components';
import './App.module.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
import {fetchData, fetchDailyData} from './api'
import coronaImage from './images/image.png'

class App extends Component {
  state = {
    data : {},
    country : '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    // console.log(fetchedData);
    this.setState({ data : fetchedData })
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    console.log(fetchedData);
    this.setState({data :fetchedData, country : country})
  }
  
  render() {
    const { data , country } = this.state
    return (
      <div className="container">
       <img className='image' src={coronaImage} alt="Covid-19"/>
       <Cards data={data}/>
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;