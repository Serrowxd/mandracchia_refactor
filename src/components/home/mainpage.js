import React from 'react';

import {
  SectionContainer,
  SectionContainerG,
  ContainerColumn,
  SectionContainerB,
  ContainerColumnB,
  HeaderContainer,
  HeaderContainerB,
  SkillsContainer,
  IndivSkill,
  IndivSkillRow,
  IndivHeadshot,
  IndivHeadshotRow,
  ContactSection,
  ContactColumn,
  Button,
} from '../../reducer/styles';

import img1 from '../../assets/newimgs/IMG_1958.JPG';

import img2 from '../../assets/headshots/chrisprofile.jpg';
import img3 from '../../assets/headshots/charlesprofile.jpg';
import img4 from '../../assets/headshots/jeffprofile.jpg';
import img5 from '../../assets/newimgs/IMG_1847.JPG';

const MainPage = () => {
  return (
    <div>
      <SectionContainerB>
        <ContainerColumnB>
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
        </ContainerColumnB>
        <ContainerColumnB>
          <img src={img1} alt="mandracchia" />
        </ContainerColumnB>
      </SectionContainerB>

      <SectionContainer>
        <ContainerColumn>
          <HeaderContainer>
            <h1> Areas Of Practice </h1>
            <p>
              With experience comes excellence, here at Mandracchia Law we
              covers many different areas.{' '}
            </p>
          </HeaderContainer>
          <SkillsContainer>
            <IndivSkill>
              <h1> Civil Litigation </h1>
              <p>
                {' '}
                If you need to file a lawsuit and don’t know how, you may want
                to consult with a civil litigation attorney. Going through a
                lawsuit can be a complicated process and qualified lawyer’s
                guidance can come in handy.{' '}
              </p>
            </IndivSkill>
            <IndivSkill>
              <h1> Traffic Matters </h1>
              <p>
                If you get a speeding ticket, or are stopped for reckless
                driving or another moving violation by a law enforcement officer
                in Pennsylvania, they may improperly talk to you about your
                options for how to handle your ticket. However, you should not
                take your legal advice from the very person who put you in the
                position to need legal advice.
              </p>
            </IndivSkill>
            <IndivSkill>
              <h1> Personal Injury </h1>
              <p>
                To bring a personal injury lawsuit or claim, you must have
                suffered a personal injury. A personal injury is an injury to
                your body, mind, or emotions . In other words, a personal injury
                can be either physical or psychological. If you broke your leg
                or sustained a concussion after slipping and falling in a
                grocery store, you have suffered a personal injury. If you
                experience severe anxiety, insomnia, or depression after a
                traumatic car accident, you have suffered a personal injury.
              </p>
            </IndivSkill>
          </SkillsContainer>
          <SkillsContainer>
            <IndivSkill>
              <h1> White Collar Crime </h1>
              <p>
                "White collar crime" is a term used to describe a criminal
                offense which occurs or is committed in a business environment.
                The majority of white collar crimes are non-violent theft crimes
                and involve theft by deception, or fraud. Managers, accountants,
                brokers and CEOs are the type of people that are often charged
                with white collar offenses, hence the term "white collar" to
                describe the crimes. White collar criminal cases are often
                highly complex and may be technical.
              </p>
            </IndivSkill>
            <IndivSkill>
              <h1> Drug Crimes & Criminal Defense </h1>
              <p>
                Drug crimes involve not just illegal street drugs but also
                prescription drugs as well. This is one of the fastest growing
                types of drug trafficking in Florida, and is commonly associated
                with charges of "doctor shopping". Florida's laws concerning the
                possession of prescription drugs are extremely strict and open
                the door for prosecutors to charge offenders with "trafficking"
                offenses for carrying even a small amount of a prescription
                drug. Some of the most common prescription drugs that are
                associated with drug crime arrests include OxyContin, Opana, and
                Adderall.
              </p>
            </IndivSkill>
            <IndivSkill>
              <h1> And many more... </h1>
              <p>
                To see a complete list of areas we cover click on the button
                below!
              </p>
              <Button> Areas of Practice </Button>
            </IndivSkill>
          </SkillsContainer>
        </ContainerColumn>
      </SectionContainer>

      <SectionContainerB>
        <ContainerColumnB>
          <HeaderContainerB>
            <h1> Team Mandracchia </h1>
          </HeaderContainerB>
          <IndivHeadshotRow>
            <IndivHeadshot>
              <img src={img2} alt="yeah" />
              <h2> Chris Mandracchia </h2>
              <h4> Criminal Defense Expert </h4>

              {/* Don't use different header tags - could also use a span tag to modify. Create a sub heading with a prop or a style prop? */}
            </IndivHeadshot>
            <IndivHeadshot>
              <img src={img3} alt="yeah" />
              <h2> Charles Mandracchia </h2>
              <h4> Personal Injury Expert </h4>
            </IndivHeadshot>
            <IndivHeadshot>
              <img src={img4} alt="yeah" />
              <h2> Jeff Soderberg </h2>
              <h4> Civil Litigation Expert </h4>
            </IndivHeadshot>
          </IndivHeadshotRow>
        </ContainerColumnB>
      </SectionContainerB>

      <SectionContainerG>
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
          </ContactColumn>
        </ContactSection>
      </SectionContainerG>
    </div>
  );
};

export default MainPage;
