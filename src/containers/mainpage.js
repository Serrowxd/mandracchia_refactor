import React, { Fragment } from 'react';
import { Header, Skill, Head, About, Navigation, Footer } from '../reducer';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import amber from '@material-ui/core/colors/amber';

import {
  SectionContainer,
  ContainerColumn,
  HeaderContainer,
  SkillsContainer,
  HeadshotRow,
  ContactSection,
  ContactColumn,
} from '../styles/styles';

import img1 from '../assets/newimgs/IMG_1958.JPG';
import img2 from '../assets/headshots/chrisprofile.jpg';
import img3 from '../assets/headshots/charlesprofile.jpg';
import img4 from '../assets/headshots/jeffprofile.jpg';
import img5 from '../assets/newimgs/IMG_1847.JPG';

const MainPage = () => {
  const theme = createMuiTheme({
    palette: {
      primary: amber,
    },
  });

  const black = '#212121';
  const gold = '#daa520';
  return (
    <Fragment>
      <Header />

      <SectionContainer background={black} hFont="3.5rem" pFont="1.2rem">
        <ContainerColumn color="white">
          <h1> Welcome to Mandracchia Law </h1>
          <p>
            The attorneys of Mandracchia Law, LLC take pride in the firm’s
            ability to represent clients zealously, yet ethically. The emphasis
            is on providing successful results completed in an expeditious
            fashion. The firm utilizes a comprehensive knowledge of the legal
            system combined with sound business judgment to protect its clients'
            interests. This ideal permeates the work method of the entire staff
            and is a cornerstone of Mandracchia & McWhirk’s philosophy. The
            attorneys further understand that a client’s need may shift to any
            number of areas through the course of the relationship. When such
            situations arise, the attorneys of Mandracchia Law are always
            prepared to offer the same competent, zealous representation in that
            emerging area as they displayed in the initial issues.
          </p>
        </ContainerColumn>
        <ContainerColumn width="100%" paddingLeft="5%">
          <img src={img1} alt="mandracchia" />
        </ContainerColumn>
      </SectionContainer>

      <SectionContainer background="white">
        <ContainerColumn>
          <HeaderContainer color={gold}>
            <h1> Areas Of Practice </h1>
            <p>
              With experience comes excellence, here at Mandracchia Law we
              covers many different areas.
            </p>
          </HeaderContainer>
          <SkillsContainer>
            <Skill title="Civil Litigation">
              If you need to file a lawsuit and don’t know how, you may want to
              consult with a civil litigation attorney. Going through a lawsuit
              can be a complicated process and qualified lawyer’s guidance can
              come in handy.
            </Skill>
            <Skill title="Traffic Matters">
              If you get a speeding ticket, or are stopped for reckless driving
              or another moving violation by a law enforcement officer in
              Pennsylvania, they may improperly talk to you about your options
              for how to handle your ticket. However, you should not take your
              legal advice from the very person who put you in the position to
              need legal advice.
            </Skill>
            <Skill title="Personal Injury">
              To bring a personal injury lawsuit or claim, you must have
              suffered a personal injury. A personal injury is an injury to your
              body, mind, or emotions . In other words, a personal injury can be
              either physical or psychological. If you broke your leg or
              sustained a concussion after slipping and falling in a grocery
              store, you have suffered a personal injury. If you experience
              severe anxiety, insomnia, or depression after a traumatic car
              accident, you have suffered a personal injury.
            </Skill>
          </SkillsContainer>
          <SkillsContainer>
            <Skill title="White Collar Crime">
              "White collar crime" is a term used to describe a criminal offense
              which occurs or is committed in a business environment. The
              majority of white collar crimes are non-violent theft crimes and
              involve theft by deception, or fraud. Managers, accountants,
              brokers and CEOs are the type of people that are often charged
              with white collar offenses, hence the term "white collar" to
              describe the crimes. White collar criminal cases are often highly
              complex and may be technical.
            </Skill>
            <Skill title="Drug Crimes & Criminal Defense">
              Drug crimes involve not just illegal street drugs but also
              prescription drugs as well. This is one of the fastest growing
              types of drug trafficking in Florida, and is commonly associated
              with charges of "doctor shopping". Florida's laws concerning the
              possession of prescription drugs are extremely strict and open the
              door for prosecutors to charge offenders with "trafficking"
              offenses for carrying even a small amount of a prescription drug.
              Some of the most common prescription drugs that are associated
              with drug crime arrests include OxyContin, Opana, and Adderall.
            </Skill>
            <Skill title="And many more...">
              To see a complete list of areas we cover click on the button
              below!
              <MuiThemeProvider theme={theme}>
                <Button variant="contained" color="primary" href="/aop">
                  Areas of Practice
                </Button>
              </MuiThemeProvider>
            </Skill>
          </SkillsContainer>
        </ContainerColumn>
      </SectionContainer>

      <SectionContainer background="#212121" hFont="3.5rem" pFont="1.2rem">
        <ContainerColumn color="white">
          <HeaderContainer color={gold}>
            <h1> Team Mandracchia </h1>
          </HeaderContainer>
          <HeadshotRow>
            {/* Don't use different header tags - could also use a span tag to modify. Create a sub heading with a prop or a style prop? */}
            <Head imgSrc={img2} alt={'Chris'} title={'Chris Mandracchia'}>
              Criminal Defense Expert
            </Head>
            <Head imgSrc={img3} alt={'Charles'} title={'Charles Mandracchia'}>
              Personal Injury Expert
            </Head>
            <Head imgSrc={img4} alt={'Jeff'} title={'Jeff Soderberg'}>
              Civil Litigation Expert
            </Head>
          </HeadshotRow>
        </ContainerColumn>
      </SectionContainer>

      <SectionContainer background="#daa520">
        <ContactSection>
          <ContactColumn>
            <img src={img5} alt="yeah" />
          </ContactColumn>
          <ContactColumn>
            <h1> Contact Us </h1>
            <p> We Will Fight For You </p>
            <h3> Your Name </h3>
            <input placeholder="Your Name" />
            <h3> Your Email </h3>
            <input placeholder="Your Email" />
            <h3> Stuff </h3>
            <textarea placeholder="Stuff" />

            {/* Needs a Submit Button, possibly a different color?? */}
            <MuiThemeProvider theme={theme}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </MuiThemeProvider>
          </ContactColumn>
        </ContactSection>
      </SectionContainer>
    </Fragment>
  );
};

export default MainPage;
