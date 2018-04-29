/**
 * @Author: Ali Ismail
 * @Date:   2018-04-21T22:20:48+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-29T15:07:39+02:00
 */
import React, { Component } from 'react';

class NasaData extends Component {
  render() {
    return (
    <div className="NasaData">
      <div><strong>{this.props.data.title}</strong></div>,
      <div><strong>{this.props.data.date}</strong></div>,
      <div><iframe title="content" className="image"
        style={{width: 800 , height: 576 }}
        src={this.props.data.url} alt="img" /></div>
      <div><p>{this.props.data.explanation}</p></div>
    </div>
      );
    }
}
export default NasaData;
