import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';

import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" bigTitle="團隊介紹" style={{background: 'rgb(247, 231, 216)', color: 'black'}}/>
      <FeaturesTiles style={{background: 'rgb(246, 240, 216)', color: 'black', paddingTop: 100}}/>
      <div style={{height: '100vh'}}>
        <Crawl
          title={<font style={{fontSize: '200%'}}>分工表</font>}
          textStyles={{whiteSpace: 'nowrap'}}
          text={
            <>
              <p>訪談：李昀庭 黃鈺婷 郭品毅 趙御宏 陳柏伸</p>
              <p>訪談製作：李昀庭 黃鈺婷 郭品毅 趙御宏 陳柏伸</p>
              <p>專題：李昀庭 黃鈺婷 郭品毅 趙御宏 陳柏伸</p>
              <p>專題資料整理：李昀庭 黃鈺婷 趙御宏 陳柏伸</p>
              <p>專題製作：李昀庭 趙御宏 陳柏伸</p>
              <p>照片：黃鈺婷</p>
              <p>網站架設：郭品毅</p>
              <p>PPT製作：黃鈺婷</p>
              <p>報告：李昀庭 黃鈺婷 郭品毅 趙御宏 陳柏伸</p>
            </>
          }
        />
      </div>
    </>
  );
}

export default Home;