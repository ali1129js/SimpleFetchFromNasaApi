/**
 * @Author: Ali
 * @Date:   2018-05-01T15:31:43+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-06T13:54:20+02:00
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import  './bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
