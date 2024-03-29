/* global Calendly */
import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Input from 'reusecore/src/elements/Input';
import Container from 'common/src/components/UI/Container';

import NewsletterWrapper, { ContactFormWrapper } from './newsletter.style';

const Newsletter = ({ sectionWrapper, textArea, buttonArea, buttonStyle, title, description }) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container>
        <NewsletterWrapper>
          <Box {...textArea}>
            <Heading content="Ready to see if we can help your business?" {...title} />
            <Text
              content="We'll see if your business is a fit, and you will get free advice on improving placement rates & delighting clients."
              {...description}
            />
          </Box>
          <Box {...buttonArea}>
            <Button
              {...buttonStyle}
              title="GET DEMO"
              onClick={e => {
                Calendly.initPopupWidget({ url: 'https://calendly.com/deephire-steven/demo' });
                return false;
              }}
            />
          </Box>
        </NewsletterWrapper>
      </Container>
    </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ['40px', '40px', '40px', '0', '0'],
    pr: ['0', '0', '0', '80px', '100px'],
  },
  title: {
    fontSize: ['18px', '20px', '22px', '24px', '26px'],
    fontWeight: '500',
    color: '#fff',
    lineHeight: '1.34',
    mb: ['14px', '14px', '14px', '14px', '13px'],
    textAlign: ['center', 'center', 'center', 'left', 'left'],
    letterSpacing: '-0.025em',
  },
  description: {
    fontSize: ['14px', '14px'],
    fontWeight: '400',
    color: '#fefefe',
    lineHeight: '1.7',
    mb: 0,
    textAlign: ['center', 'center', 'center', 'left', 'left'],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    pl: '30px',
    pr: '30px',
    colors: 'secondaryWithBg',
    color: '#03103b',
  },
};

export default Newsletter;
