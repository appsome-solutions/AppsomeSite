import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import Email from 'assets/Email.svg';
import { SecondaryButton } from 'components/SecondaryButton/SecondaryButton';

const NewsleterRow = styled.div`
  padding: 68px 136px 84px 136px;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  justify-content: space-between;
  display: flex;
`;
const SectionBox = styled.div``;
const TextUnderSection = styled.span`
  ${props => props.theme.typography.body1};
  margin-left: 16px;
`;
const InputBox = styled.div`
  position: relative;
  height: 36px;
`;
const EmailInput = styled.input`
  height: 36px;
  padding-left: 40px;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  border: 1px solid #361d32;
`;
const EmailIcon = styled.img`
  position: absolute;
  left: 12px;
  top: 10px;
`;
const ButtonClick = styled(SecondaryButton)`
  background-color: ${props => props.theme.colors.utils.text.dark};
  border: 1px solid #361d32;
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const FooterBG = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  padding: 48px 280px 166px 136px;
  display: flex;
  justify-content: space-between;
`;
const TextBox = styled.div``;
const AboutUs = styled.pre`
  ${props => props.theme.typography.body1};
  margin-bottom: 12px;
`;
const ContactAddress = styled.span``;
const HeaderText = styled.h6`
  margin-left: 64px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine}
`;
const RightBox = styled.div`
  display: flex;
  margin-top: 50px;
`;
const ProcessText = styled(HeaderText)`
  margin-left: 252px;
`;
export const NewsleterStyle: FunctionComponent = () => (
  <>
    <NewsleterRow>
      <SectionBox>
        <SectionTitle section="Join our newsletter" color="primary" boxColor="secondary" />
        <TextUnderSection>
          We have also blog where we publish technological solutions directly from the kitchen.
        </TextUnderSection>
      </SectionBox>
      <InputBox>
        <EmailInput placeholder="Email" />
        <EmailIcon src={Email} alt="" />
        <ButtonClick>SUBSCRIBE</ButtonClick>
      </InputBox>
    </NewsleterRow>
    <FooterBG>
      <TextBox>
        <AboutUs>About us</AboutUs>
        <ContactAddress>
          Zbożowa 4A 70-653 Szczecin Poland
          <br />
          +48 783 697 219 <br />
          patrykjanik1710@gmail.com
        </ContactAddress>
      </TextBox>
      <RightBox>
        <ProcessText>Process</ProcessText>
        <HeaderText>Services</HeaderText>
        <HeaderText>Portfolio</HeaderText>
        <HeaderText>Contact</HeaderText>
      </RightBox>
    </FooterBG>
  </>
);
