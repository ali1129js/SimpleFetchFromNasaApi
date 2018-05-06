/**
 * @Author: Ali Ismail
 * @Date:   2018-04-21T22:20:48+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-06T15:59:24+02:00
 */
import React, { Component } from 'react'
class NasaData extends Component {
  render() {
    //Destructuring ES6
    const { title, date, explanation, media_type, url} = this.props.data
    if (media_type === "image"){
      return (
      <div className="card border-primary bg-dark  mb-3 text-center">
        <h5 className="card-header">
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
        <div className="card border-primary bg-dark  mb-3 text-center">
          <h5 className="card-header">
            <div className="card-title text-white">{title}</div>
            <div className="card-title text-white">{date}</div>
          </h5>
          <div className="embed-responsive">
            <iframe
              className="embed-responsive-item"
              src={url} title="video" /></div><br />
          <div className="card-body text-danger">{explanation}</div>
        </div>
      )
    }
  }
}
export default NasaData
