import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Passage from '../components/sections/Passage';

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Hero className="illustration-section-01"
        bigTitle={"走訪傳統與現代並存的老風城街區"}
        />
      <Passage title="關於翻新" paragraphs={
        ["淺談關於為甚麼我們會選擇「翻新」這個主題",
        ]} />
      <Passage title="翻新的定義" paragraphs={
        ["我們對於「翻新」的定義為何",
        ]} />
      <Passage title="分類依據" paragraphs={
        ["猜測當初翻新的用途並分類",
        ]} />
      <Passage title="數據分析" paragraphs={
        ["將我們的分類圖表化並比較",
        ]} />
      <Passage title="結論" paragraphs={
        ["結論",
        ]} />
    </>
  );
}

export default Home;