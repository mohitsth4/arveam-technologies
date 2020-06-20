import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import BannerSlider from './components/BannerSlider';
import ContentArea from './components/ContentArea';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import FooterArea from './components/FooterArea';
import Copyright from './components/Copyright';
import 'antd/dist/antd.css';


const { Header, Footer, Content } = Layout;
const App = () => {

  return (
    <div>
    <Layout>
      <Header className="header">
        <Navbar />
      </Header>
      <Content>        
        <BannerSlider />
        <ContentArea />
        <TeamSection />
        <Testimonials />
      </Content>
      <Footer>
        <FooterArea />
        <Copyright />
      </Footer>
    </Layout>
  </div> 
    )
  }

export default App;
