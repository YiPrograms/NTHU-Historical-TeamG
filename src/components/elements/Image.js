import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


import { InfoIconWithTooltip } from "icon-with-tooltip";

const propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined
}

const Image = ({
  className,
  src,
  width,
  height,
  alt,
  info,
  style,
  legend,
  ...props
}) => {

  const [loaded, setLoaded] = useState(false);

  const image = useRef(null);

  const tooltip = useRef(null);

  useEffect(() => {
    handlePlaceholder(image.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const placeholderSrc = (w, h) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  }

  const handlePlaceholder = (img) => {
    const placeholder = document.createElement('img');
    if (!loaded) {
      img.style.display = 'none';
      img.before(placeholder);
      placeholder.src = placeholderSrc(
        img.getAttribute('width') || 0,
        img.getAttribute('height') || 0
      );
      placeholder.width = img.getAttribute('width');
      placeholder.height = img.getAttribute('height');
      placeholder.style.opacity = '0';
      img.className && placeholder.classList.add(img.className);
      placeholder.remove();
      img.style.display = '';      
    }
  }

  function onLoad() {
    setLoaded(true);
  }  

  return (
    <div {...props} style={style}>
      <div style={{position: "relative"}}>
        <img
          ref={image}
          className={className}
          src={src}
          width={width}
          height={height}
          alt={alt}
          onLoad={onLoad}
          style={{margin: "auto", width: "100%", objectFit: "cover"}} />
        {info?
          <div style={{position: "absolute", left: 2, bottom: 2}}>
            <InfoIconWithTooltip text={info} placement="right" />
          </div>:null
          }
        {legend?
          <div style={{position: "absolute", left: 8, bottom: 8, width: 'auto', height: 'auto', margin: 'auto', justifyContent: 'center'
                      , background: 'rgba(200, 200, 200, 0.8)', border: '3px rgb(60, 60, 60) solid', borderRadius: '10px', padding: '5px'}}>
            <div style={{justifyContent: 'center'}}>
              <span style={{display: 'inline-block', width: '14px', height: '14px', borderRadius: '50%', background: '#1377bf', marginRight: '3px'}} />
              <span style={{fontSize: 18}}>已翻新</span>
            </div>
            <div style={{justifyContent: 'center'}}>
              <span style={{display: 'inline-block', width: '14px', height: '14px', borderRadius: '50%', background: '#e81327', marginRight: '3px'}} />
              <span style={{fontSize: 18}}>未翻新</span>
            </div>
          </div>:
          null}
      </div>
    </div>
  );
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;