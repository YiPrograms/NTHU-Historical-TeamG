import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Passage = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  title,
  paragraphs,
  ...props
}) => {

  const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="reveal-from-bottom" data-reveal-delay="50">
            <h3 className="mt-0 mb-16" >
              {title}
            </h3>
            <div className="container">
              {
                paragraphs.map((text) =>
                  <p className="mt-0 mb-32">
                    {text}
                  </p>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Passage.propTypes = propTypes;
Passage.defaultProps = defaultProps;

export default Passage;