import React from 'react';
import { Row, Col } from 'antd';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};


const FooterArea = () => {
  return(
    <div className="Footer">
      <Row>
        <Col xl={20} lg={20} md={20} sm={24} xs={24} offset={2}>
          <Row>
            <Col xl={5} lg={5} md={5} sm={24} xs={24}>
              <img src="images/logo.png" alt="" width="100%" />
              <p className="whitecolor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <p className="whitecolor">+91-123-456-7890 <br/> info@yourwebsite.com</p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={24} xs={24} offset={1}>
              <h2 className="whitecolor">Latest News</h2>
              <ul className="blog">
                <li>
                  Arveam Technologies<br/> 
                  <span className="Date">15 March 2020</span>
                </li>
                <li>
                  Arveam Technologies<br/> 
                  <span className="Date">15 March 2020</span>
                </li>
                <li>
                  Arveam Technologies<br/> 
                  <span className="Date">15 March 2020</span>
                </li>
              </ul>
            </Col>
            <Col xl={5} lg={5} md={5} sm={24} xs={24} offset={1}>
              <h2 className="whitecolor">
                Our Services
              </h2>
              <ul className="blog">
                <li>
                  <a href="https://google.com">Web Design</a>
                </li>
                <li>
                  <a href="https://google.com">Web Development</a>
                </li>
                <li>
                  <a href="https://google.com">Search Engine Optimization</a>
                </li>
                <li>
                  <a href="https://google.com">Content Writing</a>
                </li>
                <li>
                  <a href="https://google.com">Pay Per Click</a>
                </li>
                <li>
                  <a href="https://google.com">Software Development</a>
                </li>
              </ul>
            </Col>
            <Col xl={7} lg={7} md={7} sm={24} xs={24} offset={1}>
              <h2 className="whitecolor">
                Contact Now
              </h2>
              <Form {...layout} name="nest-messages" className="footerform">
                <Form.Item name={['name']} rules={[{ required: true }]}>
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item name={['email']} rules={[{ type: 'email' }]}>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name={['Message']}>
                  <Input.TextArea placeholder="Message" />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FooterArea