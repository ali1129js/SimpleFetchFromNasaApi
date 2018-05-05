/**
 * @Author: Ali Ismail
 * @Date:   2018-04-21T22:20:48+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-05T14:59:52+02:00
 */
import React, { Component } from 'react'
class NasaData extends Component {
  render() {
    //Destructuring ES6
    const { title, date, explanation, media_type, url} = this.props.data
    if (media_type === "image"){
      return (
      <div className="card border-primary bg-dark  mb-3 text-center">
        <h5 class="card-header">
          <div className="card-title text-white">{title}</div>
          <div className="card-title text-white">{date}</div>
        </h5>
        <div className="card-img-top">
          <img className="card-img-top"
            src={url} alt="img" /></div><br />
        <div className="card-body text-danger">{explanation}</div>
      </div>
      )
    }
    else {
      return (
        <div className="card">
          <div className="card-title">{title}</div>,
          <div><strong>{date}</strong></div>,
          <div><iframe title="content" className="video"
            src={url} alt="vid" /></div>
          <div className="card-body"><p>{explanation}</p></div>
        </div>
      )
    }
  }
}
export default NasaData
