import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import MyImage from '@/assets/images/background.jpg'
import /* webpackPreload: true */ '@/assets/fonts/KozGoPro-Light.otf'
import /* webpackPreload: true */ '@/assets/fonts/KozGoPro-ExtraLight.otf'
import './index.css'

const App = () => {
  return (
    <div className="wrapper d-flex justify-content-center">
      <div className="content">
        <img src={MyImage} />
        <div className="infobox">
          <div className="dickhead">
            <h1>RA</h1>
          </div>
          <div className="dickhead-contacts text-right">
            <h2>rigor atelier</h2>
            <div className="contact">
              <a href="tel:+84395799544">+84.39 5799 544</a>
            </div>
            <div className="contact">
              <a href="mailto:rigoratelier@gmail.com">rigoratelier@gmail.com</a>
            </div>
            <div className="contact">
              <a href="https://facebook.com/rigoratelier" target="_blank">
                facebook.com/rigoratelier
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
