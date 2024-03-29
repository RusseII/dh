import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { deephireTheme } from 'common/src/theme/deephire';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/DeepHire/deephire.style';

import BannerSection from '../containers/DeepHire/Banner';
import Navbar from '../containers/DeepHire/Navbar';
import ServiceSection from '../containers/DeepHire/Service';

import FeatureSection from '../containers/DeepHire/Feature';
import UpdateScreen from '../containers/DeepHire/UpdateScreen';
import Faq from '../containers/DeepHire/Faq';
import Pricing from '../containers/DeepHire/Pricing';

import CTA from '../containers/DeepHire/CTA';

import TestimonialSection from '../containers/DeepHire/Testimonial';

import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={deephireTheme}>
      <Fragment>
        <SEO title="DeepHire | Simple Video Interview Software" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ServiceSection />
          <UpdateScreen />
          <FeatureSection />
          <Pricing />
          <TestimonialSection />
          <Faq />
          <CTA />
          {/* <NewsletterSection /> */}
          {/* <Footer /> */}
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
