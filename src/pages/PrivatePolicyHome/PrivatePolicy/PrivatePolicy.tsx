import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const PrivacyPolicyBg = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  padding: 36px 80px 36px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PrivacyPolicyBox = styled.div``;
const PrivacyPolicyText = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const TextH4 = styled.h4`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 32px;
`;
const TextMargin = styled.div`
  margin-bottom: 24px;
`;
const TextH5 = styled.h5`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 20px;
`;
const ListUnordered = styled.ul`
  list-style: none;
  padding-left: 0px;
`;
const ListCircle = styled.li`
  margin-bottom: 32px;
  :before {
    margin-right: 10px;
    list-type-style: none;
    background-color: ${props => props.theme.colors.main.secondary};
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 9px;
    width: 9px;
  }
`;
const TextWithMarginLeft = styled.span`
  margin-left: 19px;
`;
const TitleWeight = styled.span`
  font-weight: bold;
`;
export const PrivacyPolicy: FunctionComponent = () => (
  <PrivacyPolicyBg>
    <PrivacyPolicyBox>
      <PrivacyPolicyText>
        <TextH4>Privacy Policy</TextH4>
        <TextH5>What terms do we use in Privacy Policy?</TextH5>
        <TextMargin>
          <TitleWeight>Personal data</TitleWeight> – data of a person who can be identified by the use of such data.
          This Privacy Policy explains how we use the personal information you provide to us.
          <br />
          <br />
          <TitleWeight> TSH/We</TitleWeight> – The Software House sp. z o.o. with registered office in Gliwice, ul.
          Dolnych Wałów 8, entered in the Register of Entrepreneurs of the National Court Register
          <br /> kept by the District Court in Gliwice, 10th Commercial NCR Division, REGON (National Official Business
          Register No.): 146211123, TIN: 5272680543.
          <br />
          <br /> <TitleWeight>You, Yours</TitleWeight> – any natural person whose Personal data we process and to whom
          this Privacy Policy applies.
          <br />
          <br />
          <TitleWeight>GDPR </TitleWeight>– Regulation (EU) 2016/679 of the European Parliament and of the Council of 27
          April 2016 on the protection of natural persons with regard to the processing of
          <br />
          personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection
          Regulation).
          <br />
          <br />
          <TitleWeight> Website </TitleWeight>– our website and its subpages: www.tsh.io.
          <br /> <br />
          <TitleWeight>Recipients </TitleWeight>– entities to whom we may transfer a part of your personal data, in
          connection with the performance of certain activities or services by them on our behalf.
          <br />
          They may not do anything about your personal data until we have instructed them to do so, and only to the
          extent we have indicated. They will store your personal data
          <br />
          securely and only for as long as we indicate or as required by applicable law.
          <br />
          <br />
          <TitleWeight> Cookies</TitleWeight> – the so-called Internet cookies, i.e. tiny information recorded by the
          server on your computer disc in the form of small text files.
          <br />
          <br /> <TitleWeight>Privacy Policy</TitleWeight> – this policy sets forth the principles governing cookies and
          processing and protection of personal data.
        </TextMargin>
        <TextMargin>
          <TextH5>Who will be your data controller?</TextH5> The controller of your Personal data: The Software House
          sp. z o.o. with registered office in Gliwice (hereinafter referred to as “TSH” or “we”) at ul. Dolnych Wałów
          8.
          <br />
          This means that we decide for what purpose the personal data you have provided to us are processed. We want
          you to know that we make every effort to keep your
          <br />
          personal data safe. We do not provide personal data entrusted to us for a fee. You can contact us directly for
          information regarding the protection of your personal data
          <br />
          at: admin@tsh.io.
          <br />
        </TextMargin>
        <TextMargin>
          <TextH5> What data are we talking about? </TextH5>This includes personal data collected as part of your use of
          our services, including the services and other functionalities provided by TSH on the Website and stored in
          <br />
          cookies that are installed on our website, as well as the data we have obtained from publicly available
          sources, such as social media or through third parties that have
          <br />
          suggested that we contact you. If you then decide to cooperate with us, additionally there will be all
          personal data you provide us with.
          <br />
        </TextMargin>
        <TextMargin>
          <TextH5>For what purposes, on what legal grounds and for how long do you process personal data?</TextH5>
          In connection with our business, we process various persons’ personal data for different purposes, to
          different extent and on different legal basis specified in the GDPR.
          <br />
          In order to provide you with as clear information as possible, we have grouped this information together,
          referring to the legal basis for processing your personal data.
          <br />
          <br /> We process your personal data for the purposes set out below on the basis of a legitimate interest
          (Art. 6.1(f) GDPR) of the TSH, which is:
        </TextMargin>
        <ListUnordered>
          <ListCircle>marketing activities provided for you, including the TSH own services marketing; </ListCircle>
          <ListCircle>
            contacting you to answer your question via the Website (e.g. contact form, chat), e-mail, social media or
            any other available means of communication, and with your
            <br />
            <TextWithMarginLeft>consent by e-mail and telephone;</TextWithMarginLeft>
          </ListCircle>
          <ListCircle>
            ensuring the security of the services provided electronically, including preventing fraud and abuse, and
            ensuring the security of traffic;
          </ListCircle>
          <ListCircle>
            conducting research and analysis of TSH, among other things, to assess the main interests and needs of
            visitors to our websites;
          </ListCircle>
          <ListCircle>
            evaluation of payment reliability in connection with the conclusion and performance of a contract or
            cooperation binding on us; debt recovery;
          </ListCircle>
          <ListCircle>
            conducting mediation, court and arbitration proceedings; carrying out statistical analyses;
          </ListCircle>
          <ListCircle>
            storage of data for archiving and accountability purposes (i.e. to fulfill legal obligations).
          </ListCircle>
        </ListUnordered>
        We retain personal data for these purposes to such processing.
        <br /> <br /> If you choose to enter into an agreement with us, we will process your personal data to the extent
        necessary to carry out the processing. This applies both to contracts
        <br />
        concluded within the framework of providing services by electronic means (e.g. sending a newsletter or an
        e-book) and to cooperation contracts or provision of services.
        <br />
        If in connection with the contract concluded (Article 6.1(b) GDPR) it appears necessary for us to process
        personal data which have been made available or entrusted to
        <br />
        you (the data of your Customers), we shall conclude with you an appropriate data protection agreement (DPA),
        which shall constitute a legal basis for the processing of
        <br />
        such data by us.
        <br /> <br /> We shall retain the personal data provided to us under the contract for the contract duration and
        also on its termination for the following purposes:
        <br /> <br />
        <ListUnordered>
          <ListCircle>pursue any claims relating to the performance of the contract;</ListCircle>
          <ListCircle>prevention of fraud and abuse; statistical and archiving;</ListCircle>
          <ListCircle>
            or a maximum of the limitation periods provided for by law after the contract termination.
          </ListCircle>
        </ListUnordered>
        Additionally, the law (Article 6.1(c) GDPR) requires us to process your data for tax and accounting purposes. We
        will retain this information for as long as required by
        <br />
        law.
      </PrivacyPolicyText>
    </PrivacyPolicyBox>
  </PrivacyPolicyBg>
);
