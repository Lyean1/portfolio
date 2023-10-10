import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Thank you for visiting my website. I specialize in creating custom web solutions to help businesses grow and achieve their goals. Whether you need a new website, an e-commerce platform, or a web application, I can help bring your vision to life. Feel free to contact me to discuss your project and how I can help.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
