/**
 * @Author: Ali
 * @Date:   2018-05-01T15:29:49+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-01T15:29:54+02:00
 */
import React, { Component } from 'react'
import NasaData from './Components/NasaData'
const endpoint ='https://api.nasa.gov/planetary/apod?api_key=NE8DbckQsDeZnkY5NszxfokRRpf1DjqSQFcMnhXk'
const fetchOption = {
  method:'GET'
}
class Nasa_App extends Component {
  constructor (props){
    super(props)
    this.state = {'nasaData': {}};
  }
componentWillMount(){
  this.style = {
    textAlign: 'center',
    backgroundColor: '#edfffe',
    border: '5px solid red',
    margin:'10px',
    padding: '2px'
  }
}
componentDidMount() {
    fetch(endpoint, fetchOption)
    .then(d => d.json())
    .then(d => {
      this.setState({nasaData: d
      })
    })
    .catch(err => {
      console.error(err)
    });
}
  render() {
    console.log(this.state.nasaData);
    return (
      <div className="Nasa_App" style={this.style}>
        <NasaData data={this.state.nasaData}/>
      </div>
    )
  }
}
export default Nasa_App
