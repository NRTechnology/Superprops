import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import List from 'common/components/List';

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from './footer.style';
import LogoImage from 'common/assets/image/hostingModern/logo.png';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <Image src={LogoImage?.src} alt="Logo" />
              <Text
                className="copyright"
                content="Copyright by 2022 - Dinkominfotik Kab. Brebes"
              />
            </Fade>
          </CopyrightInfo>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
