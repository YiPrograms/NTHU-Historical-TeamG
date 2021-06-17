import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Image from '../components/elements/Image';

import streetsimg from '../assets/images/streets.png';
import ImageGallery from 'react-image-gallery';


const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const TGOSimg = <Image
  className="has-shadow"
  src={streetsimg}
  alt="TGOS"
  width={896}
  height={504} />


  const images = [
    { original: 'https://i.imgur.com/iHxyfZ1.png' },
    { original: 'https://i.imgur.com/6649gsj.png' },
    { original: 'https://i.imgur.com/UW8TL13.png' },
    { original: 'https://i.imgur.com/AHo1kWg.png' },
    { original: 'https://i.imgur.com/SnHqbTv.png' },
    { original: 'https://i.imgur.com/TxV9PaC.png' },
    { original: 'https://i.imgur.com/W8hT2T7.png' },
    { original: 'https://i.imgur.com/GnIiCuF.png' },
  ];

  return (
    <>
      {/* <Hero className="illustration-section-01"
        bigTitle={<>回顧<span className="text-color-primary">竹塹風情</span>漫步之旅</>}
        hasModal
        modalUrl="https://www.tgos.tw/MapSites/EmbedMap?themeid=21876&visual=point"
        imgComponent={TGOSimg}
        /> */}
      <Hero className="illustration-section-01"
        bigTitle={<>回顧<span className="text-color-primary">竹塹風情</span>漫步之旅</>}
        imgComponent={
          <ImageGallery items={images} showThumbnails={false} autoPlay={true}/>
        }
        />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  );
}

export default Home;