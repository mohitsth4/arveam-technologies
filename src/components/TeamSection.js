import React from 'react';
import { Row, Col } from 'antd';

const TeamSection = () => {
  return(
    <div className="site-layout-content team_sec">
      <Row>
        <Col xl={20} lg={20} md={20} sm={24} xs={24} offset={2}>
          <Row className="team_section">
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <h4>Web Expert</h4>
              <h1>Meet Our Experts</h1>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. 
              </p>
            </Col>
          </Row>
          <Row className="team_details">
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <img src="/images/01.png" alt="" />
              <h3 className="text-center">Yeshu</h3>
              <p className="text-center">Full Stack Developer</p>
            </Col>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <img src="/images/02.png" alt="" />
              <h3 className="text-center">Mohit</h3>
              <p className="text-center">Full Stack Developer</p>
            </Col>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <img src="/images/03.png" alt="" />
              <h3 className="text-center">Ajay</h3>
              <p className="text-center">Full Stack Developer</p>
            </Col>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <img src="/images/04.png" alt="" />
              <h3 className="text-center">Sarvesh</h3>
              <p className="text-center">Full Stack Developer</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}  

export default TeamSection