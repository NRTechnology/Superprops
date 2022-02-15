import React from 'react';
import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Input from 'common/components/Input';
import Select from 'common/components/Select';
import Button from 'common/components/Button';

import BannerSection, {
  ContentWrapper,
  BannerContent,
  DomainChecker,
  DomainControl,
  BannerImage,
} from './banner.style';

import illustration from 'common/assets/image/hostingModern/illustration.png';

const options = [

];

const Banner = () => {
  function handleSubmit(e) {
    e.preventDefault();
    alert('tests')
    // https://bimaqris.bankjateng.co.id/welcome/responseGenerate
    console.log('You clicked submit.');
  }

  return (
    <BannerSection id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h1" content="Pay by QRIS" />
            <Text content="Pembayaran Retribusi mudah dengan QRIS. Scan Code Bayar dengan semua dompet digitalmu" />
            <DomainChecker>
              <DomainControl>
                <Input
                  inputType="text"
                  placeholder="Masukan kode Id Billing"
                  iconPosition="left"
                  aria-label="domain"
                />
              </DomainControl>
              <Button fullWidth title="Cek Id Billing" type="submit" onClick={handleSubmit} />
            </DomainChecker>
          </BannerContent>
          <BannerImage>
            <NextImage src={illustration} alt="" />
          </BannerImage>
        </ContentWrapper>
      </Container>
    </BannerSection>
  );
};

export default Banner;
