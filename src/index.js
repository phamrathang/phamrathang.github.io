import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import MyImage from './assets/images/background.jpg'
import './index.css'
import { Row, Col } from 'react-bootstrap'
// import Col from 'react-bootstrap/Col'

const App = () => {
  return (
    <div className="wrapper d-flex justify-content-center">
      <div className="content">
        <img src={MyImage} />
        <Row className="infobox">
          <Col className="dickhead">
            <h1>RA</h1>
          </Col>
          <Col className="dickhead-contacts text-right">
            <h2>rigor atelier</h2>
            <div className="contact">
              <a href="tel:+84395799544">+84.39 5799 544</a>
            </div>
            <div className="contact">
              <a href="mailto:rigoratelier@gmail.com">rigoratelier@gmail.com</a>
            </div>
            <div className="contact">70 Phan Dinh Phung, Ha Noi</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
