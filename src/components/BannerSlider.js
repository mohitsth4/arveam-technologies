import React, {} from 'react';
import { Carousel, Col } from 'antd';

const BannerSlider = () => {

  return(
    <Carousel autoplay>
    <div>
      <img src="/images/banner1-1.jpg" alt="image_1" className="img-fluid" />
      <div className="row slider_text">
        <Col xl={6} offset={4}>
          <h3 className="text-titlebanner">
            We Make
          </h3>
          <h2 className="text-titlebanner">
            Creative Design
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </Col>
      </div>
    </div>
    <div>
      <img src="/images/banner1-1.jpg" alt="image_1" />
      <div className="row slider_text">
        <Col xl={6} offset={4}>
          <h3 className="text-titlebanner">
            Heading 2
          </h3>
          <h2 className="text-titlebanner">
            Creative Design
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </Col>
      </div>
    </div>
    <div>
      <img src="/images/banner1-1.jpg" alt="image_1" />
      <div className="row slider_text">
        <Col xl={6} offset={4}>
          <h3 className="text-titlebanner">
             Heading 3
          </h3>
          <h2 className="text-titlebanner">
            Creative Design
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </Col>
      </div>
    </div>
  </Carousel>
  )

}

export default BannerSlider