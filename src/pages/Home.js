import React from 'react'
import Card from '../components/card/Card';
import SvgBanner from '../components/common/Banner';
import "../App.css";


const Home = () => {
    return (
      <>
        <Card />
        <div className="banner-container">
          <SvgBanner />
        </div>
      </>
    );
}

export default Home
