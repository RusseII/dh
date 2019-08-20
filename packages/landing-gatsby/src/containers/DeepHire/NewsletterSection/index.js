import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Heading from 'reusecore/src/elements/Heading';
import Input from 'reusecore/src/elements/Input';
import Text from 'reusecore/src/elements/Text';

import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';
import NewsletterSectionWrapper, { NewsletterForm } from './newsletterSection.style';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const NewsletterSection = ({ sectionHeader, sectionTitle, btnStyle, secDes }) => {
  return (
    <NewsletterSectionWrapper id="newsletterSection">
      <Container>
        <Box {...sectionHeader}>
          <Heading content="Need time to think it over?" {...sectionTitle} />
          <Text
            {...secDes}
            content="Want to learn free ways to increase your placements and try them yourself? This email course gives ways to close more placements & delight your clients!"
          />
        </Box>
        <Box>
          <NewsletterForm>
            <Input
              inputType="email"
              isMaterial={false}
              placeholder="Email Address"
              name="email"
              aria-label="email"
            />
            <Button type="button" title="Get Lesson #1 Now!" {...btnStyle} />
          </NewsletterForm>
        </Box>
      </Container>
    </NewsletterSectionWrapper>
  );
};

// NewsletterSection style props
NewsletterSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

// NewsletterSection default style
NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // button default style
  btnStyle: {
    minWidth: '152px',
    minHeight: '45px',
    fontSize: '14px',
    fontWeight: '500',
  },
  secDes: {
    fontSize: ['14px', '15px', '16px'],
    color: '#5d646d',
    lineHeight: '1.875',
    mt: '30px',
    ml: 'auto',
    mr: 'auto',
    width: '470px',
    maxWidth: '100%',
    textAlign: 'center',
  },
};

export default NewsletterSection;
