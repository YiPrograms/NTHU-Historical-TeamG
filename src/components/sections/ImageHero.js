import { React } from 'react';
import styled from "styled-components";
import HeroSlider, {
  Slide,
  Nav,
  OverlayContainer,
} from 'hero-slider';
import { InfoIconWithTooltip } from "icon-with-tooltip";



const Hero = ({ centerComponent, images, info, ...props }) => {

  const StyledOverlayContainer = styled(OverlayContainer)`
    &&& {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      background-color: rgba(0, 0, 0, 0.33);
      text-align: center;
      H2, H3 {
        margin: 0 36px;
      }
    }
  `;


  return (
    <HeroSlider
      {...props}
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF'
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 3000,
        height: '100vmin',
      }}
    >
      <StyledOverlayContainer>
        {centerComponent}
        {info && 
            <div style={{position: "absolute", left: 2, bottom: 2}}>
            <InfoIconWithTooltip text={info} placement="right" />
            </div>
        }
      </StyledOverlayContainer>

      

      {images.map(i => 
        <Slide
          background={{
            backgroundImage: i,
            backgroundAnimation: 'zoom'
          }}
        />
      )}
      
      <Nav />
    </HeroSlider>
  );
}

export default Hero;