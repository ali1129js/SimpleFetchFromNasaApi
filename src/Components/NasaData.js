/**
 * @Author: Ali Ismail
 * @Date:   2018-04-21T22:20:48+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-01T15:31:00+02:00
 */
import React, { Component } from 'react'
class NasaData extends Component {
  render() {
    //Destructuring ES6
    const { title, date, explanation, media_type, url} = this.props.data
    if (media_type === "image"){
      return (
      <div className="NasaData">
        <div><strong>{title}</strong></div>,
        <div><strong>{date}</strong></div>,
        <div><img title="content" className="image"
          style={{width: 'auto' , height: 'auto'}}
          src={url} alt="img" /></div>
        <div><p>{explanation}</p></div>
      </div>
      )
    }
    else {
      return (
        <div className="NasaData">
          <div><strong>{title}</strong></div>,
          <div><strong>{date}</strong></div>,
          <div><iframe title="content" className="image"
            style={{width: 'auto' , height: 'auto'}}
            src={url} alt="img" /></div>
          <div><p>{explanation}</p></div>
        </div>
      )
    }
  }
}
export default NasaData
