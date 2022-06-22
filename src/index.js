import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import MyImage from '@/static/images/background.jpg'
import './index.scss'

const App = () => {
  return (
    <div className="wrapper d-flex justify-content-center">
      <div className="content">
        <img src={MyImage} />
        <div className="infobox">
          <div className="dickhead">
            <h1>r a</h1>
          </div>
          <div className="dickhead-contacts text-right">
            <div className="contact">
              <a href="tel:+84395799544">+84.39 5799 544</a>
            </div>
            <div className="contact">
              <a href="mailto:rarara.atelier@gmail.com">
                rarara.atelier@gmail.com
              </a>
            </div>
            <div className="contact">
              <a href="http://facebook.com/rarara.atelier" target="_blank">
                facebook.com/rarara.atelier
              </a>
            </div>
            <div className="contact">
              <a href="https://www.instagram.com/rarara.atelier">
                instagram.com/rarara.atelier
              </a>
            </div>
            <div className="contact">
              <a href="https://goo.gl/maps/wWdSX4vubEqTMMWm8" target="_blank">
                70 Phan Dinh Phung, Ha Noi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
