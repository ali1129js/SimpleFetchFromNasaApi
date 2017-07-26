import React, { Component } from 'react';

class NasaData extends Component {
  render() {
    return (
    <div className="NasaData">
      <div><strong>{this.props.data.title}</strong></div>,
      <div><strong>{this.props.data.date}</strong></div>,
      <div><img title="content" className="image"
        style={{width: 1024 , height: 576 }}
        src={this.props.data.url} alt="img" /></div>
      <div><p>{this.props.data.explanation}</p></div>
    </div>
        );
        }
}
export default NasaData;
