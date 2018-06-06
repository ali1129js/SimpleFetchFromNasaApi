/**
 * @Author: Ali Ismail
 * @Date:   2018-04-21T22:20:48+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-06T14:54:42+02:00
 */
import React, { Component } from 'react'

class NasaData extends Component {
  constructor(props) {
    super(props);
  this.renderVideo = this.renderVideo.bind(this)
  this.renderImage = this.renderImage.bind(this)
  }
  renderVideo(){
    if (this.props.data.media_type === 'video'){
      return (
      <div className="card border-primary bg-dark  mb-3 text-center">
        <h5 className="card-header">
          <div className="card-title text-white">{this.props.data.title}</div>
          <div className="card-title text-white">{this.props.data.date}</div>
        </h5>
        <div className="card-img-top">
          <iframe
            className="card-img-top"
            src={this.props.data.url}
            title="video"
            width='700px'
            height='400px'
          /></div><br />
        <div className="card-body text-danger">{this.props.data.explanation}</div>
      </div>
      )
    }
  }
  renderImage(){
    if (this.props.data.media_type === 'image') {
      return (
        <div className="card border-primary bg-dark  mb-3 text-center">
          <h5 className="card-header">
            <div className="card-title text-white">{this.props.data.title}</div>
            <div className="card-title text-white">{this.props.data.date}</div>
          </h5>
          <div className="embed-responsive">
            <img
              className="card-img-top"
              src={this.props.data.url} alt="img" />
            </div>
            <br />
          <div className="card-body text-danger">{this.props.data.explanation}</div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="">
        {this.renderVideo()}
        {this.renderImage()}
      </div>
    )
  }
}
export default NasaData
