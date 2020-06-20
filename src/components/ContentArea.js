import React from 'react';
import { Row, Col, Button } from 'antd';


const ContentArea = () => {
  return(
    <div className="site-layout-content">
      <Row>
        <Col xl={8} lg={8} md={8} sm={18} xs={18} offset={2}>
          <h1>
            Lets take your <span>Business</span> <strong>to Next Level</strong>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. 
          </p>
          <p>
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in the 
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
            recently with desktop publishing software like Aldus PageMaker including versions of 
            Lorem Ipsum.
          </p>
          <Button type="primary">Read More</Button>
        </Col>
        <Col xl={8} lg={8} md={8} sm={18} xs={18} offset={2}>
          <img src="/images/awesome-feature.png" alt="" />
        </Col>
      </Row>
      <Row className="mainWorkProcess">
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <h4>
            Web Service
          </h4>
          <h2>
            Our Work Process
          </h2>
        </Col>
        <Col xl={20} lg={20} md={20} sm={24} xs={24} offset={4}>
          <Row className="round_areacircle">
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <p className="roundupCircle">01</p>
              <h3 className="headingCircle">Concept</h3>
              <p className="contentCircle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <p className="roundupCircle">02</p>
              <h3 className="headingCircle">Plan</h3>
              <p className="contentCircle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <p className="roundupCircle">03</p>
              <h3 className="headingCircle">Design</h3>
              <p className="contentCircle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <p className="roundupCircle">04</p>
              <h3 className="headingCircle">Development</h3>
              <p className="contentCircle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <p className="roundupCircle">05</p>
              <h3 className="headingCircle">Quality Check</h3>
              <p className="contentCircle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ContentArea