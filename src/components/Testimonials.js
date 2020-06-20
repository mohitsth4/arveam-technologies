import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';

const Testimonials = () => {
  return(
    <div>
      <div className="testimonials_bg">
        <Row>
          <Col xl={20} lg={20} md={20} sm={24} xs={24} offset={2}>
            <span class="whitecolor">Testimonial</span>
            <h2 class="whitecolor font-normal">What People Say</h2>
          </Col>
        </Row>
      </div>
      <div class="testi_content">
        <Col xl={20} lg={20} md={20} sm={24} xs={24} offset={2}>
          <Carousel effect="slide" autoplay>
            <div>
              <Row>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <div className="text-center testimonial_left">
                    <img src="images/testimonial-1.jpg" alt="" />
                    <h3>John Smith</h3>
                    <p>UPWORK, New York</p>
                  </div>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24} offset={2}>
                  <div className="testi_margin">
                    <p>
                      We have a number of different teams within our agency that specialise
                      in different areas of business so you can be sure that you won’t receive
                      a generic service and although we boast a years and years of service.
                    </p>
                  </div>
                </Col>
              </Row>              
            </div>
            <div>
              <Row>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <div className="text-center testimonial_left">
                    <img src="images/testimonial-2.jpg" alt="" />
                    <h3>John Smith</h3>
                    <p>UPWORK, New York</p>
                  </div>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24} offset={2}>
                  <div className="testi_margin">
                    <p>
                      We have a number of different teams within our agency that specialise
                      in different areas of business so you can be sure that you won’t receive
                      a generic service and although we boast a years and years of service.
                    </p>
                  </div>
                </Col>
              </Row>              
            </div>
            <div>
              <Row>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <div className="text-center testimonial_left">
                    <img src="images/testimonial-3.jpg" alt="" />
                    <h3>John Smith</h3>
                    <p>UPWORK, New York</p>
                  </div>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24} offset={2}>
                  <div className="testi_margin">
                    <p>
                      We have a number of different teams within our agency that specialise
                      in different areas of business so you can be sure that you won’t receive
                      a generic service and although we boast a years and years of service.
                    </p>
                  </div>
                </Col>
              </Row>              
            </div>
            <div>
              <Row>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <div className="text-center testimonial_left">
                    <img src="images/testimonial-4.jpg" alt="" />
                    <h3>John Smith</h3>
                    <p>UPWORK, New York</p>
                  </div>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24} offset={2}>
                  <div className="testi_margin">
                    <p>
                      We have a number of different teams within our agency that specialise
                      in different areas of business so you can be sure that you won’t receive
                      a generic service and although we boast a years and years of service.
                    </p>
                  </div>
                </Col>
              </Row>              
            </div>
          </Carousel>
        </Col>
      </div>
    </div>
  )
}  

export default Testimonials