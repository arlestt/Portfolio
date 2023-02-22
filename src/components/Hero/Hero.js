import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
        Hey there! I'm J J Loknath (a.k.a Arlestt) and pursuing a bachelor's degree in Computer Science at IIITM Gwalior.<br></br> I'm a Full Stack developer and I have also took a glance at blockchain technology. I also enjoy solving programming questions and believe in working hard and enjoying life as well. <br></br>Always open to new opportunities!
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
