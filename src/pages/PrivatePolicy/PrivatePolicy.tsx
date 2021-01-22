import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { media } from 'global/RWD';
import { MaxWidthWithBg } from '../../components/MaxSizeAndBackground/MaxWidthAndBg';

export interface PolicyProps {
  name?: string;
  nameOfBusiness?: string;
  webPage?: string;
  officeCity?: string;
  email?: string;
  personalData?: string;
  lastVersionPolicy?: string;
  abbreviation: string;
  personalDataOffice?: string;
}

const PrivacyPolicyBg = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.xs`
    padding: 20px;
    white-space: pre-wrap;
  `}
  ${media.lg`
    padding: 36px 80px 48px 80px;
  `}
`;
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
  margin: 20px 0;
`;
const ListUnordered = styled.ul`
  list-style: none;
  padding-left: 0px;
`;
const ListCircle = styled.li`
  margin-bottom: 24px;
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
export const PrivacyPolicy: FunctionComponent<PolicyProps> = (props: PolicyProps) => {
  const {
    nameOfBusiness,
    webPage,
    officeCity,
    email,
    personalData,
    lastVersionPolicy,
    name,
    abbreviation,
    personalDataOffice,
  } = props;

  return (
    <MaxWidthWithBg BackgroundColorProps="primary">
      <PrivacyPolicyBg id="Policy">
        <div>
          <PrivacyPolicyText>
            <TextH4>Privacy Policy</TextH4>
            <TextH5>What terms do we use in Privacy Policy?</TextH5>
            <TextMargin>
              <TitleWeight>Personal data</TitleWeight> – data of a person who can be identified by the use of such data.
              This Privacy Policy explains how we use the personal information you provide to us.
              <br />
              <br />
              <TitleWeight>
                {name}
                /We
              </TitleWeight>
              {nameOfBusiness} with registered
              {officeCity} 8, entered in the Register of Entrepreneurs of the
              <br />
              National Court Register kept by the District Court in Gliwice, 10th Commercial NCR Division, REGON
              (National Official Business Register No.): 381075037,
              <br />
              NIP: 6722091647.
              <br />
              <br />
              <TitleWeight>You, Yours</TitleWeight> – any natural person whose Personal data we process and to whom this
              Privacy Policy applies.
              <br />
              <br />
              <TitleWeight>GDPR </TitleWeight>– Regulation (EU) 2016/679 of the European Parliament and of the Council
              of 27 April 2016 on the protection of natural persons with regard to the processing of
              <br />
              personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data
              Protection Regulation).
              <br />
              <br />
              <TitleWeight>Website </TitleWeight>– our website and its subpages: {webPage}
              <br /> <br />
              <TitleWeight>Recipients </TitleWeight>– entities to whom we may transfer your personal data, in connection
              with the performance of certain activities or services by them on our behalf.
              <br />
              They may not do anything about your personal data until we have instructed them to do so, and only to the
              extent we have indicated. They will store your personal data
              <br />
              securely and only for as long as we indicate or as required by applicable law.
              <br />
              <br />
              <TitleWeight>Cookies</TitleWeight> – the so-called Internet cookies, i.e. tiny information recorded by the
              server on your computer disc in the form of small text files.
              <br />
              <br />
              <TitleWeight>Privacy Policy</TitleWeight> – this policy sets forth the principles governing cookies and
              processing and protection of personal data.
            </TextMargin>
            <TextMargin>
              <TextH5>Who will be your data controller?</TextH5>
              {personalData}
              <br />
              This means that we decide for what purpose the personal data you have provided to us are processed. We
              want you to know that we make every effort to keep your
              <br />
              personal data safe. We do not provide personal data entrusted to us for a fee. You can contact us directly
              for information regarding the protection of your personal data
              <br />
              at: {email}
              <br />
            </TextMargin>
            <TextMargin>
              <TextH5>What data are we talking about? </TextH5>This includes personal data collected as part of your use
              of our services, including the services and other functionalities provided by {abbreviation} on the
              Website and stored in
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
              <br />
              We process your personal data for the purposes set out below on the basis of a legitimate interest (Art.
              6.1(f) GDPR) of the {abbreviation}, which is:
            </TextMargin>
            <ListUnordered>
              <ListCircle>
                marketing activities provided for you, including the {abbreviation} own services marketing;{' '}
              </ListCircle>
              <ListCircle>
                contacting you to answer your question via the Website (e.g. contact form, chat), e-mail, social media
                or any other available means of communication, and with your
                <br />
                <TextWithMarginLeft>consent by e-mail and telephone;</TextWithMarginLeft>
              </ListCircle>
              <ListCircle>
                ensuring the security of the services provided electronically, including preventing fraud and abuse, and
                ensuring the security of traffic;
              </ListCircle>
              <ListCircle>
                conducting research and analysis of {abbreviation}, among other things, to assess the main interests and
                needs of visitors to our websites;
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
            <br /> <br /> If you choose to enter into an agreement with us, we will process your personal data to the
            extent necessary to carry out the processing. This applies both to contracts
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
            <br /> <br /> We shall retain the personal data provided to us under the contract for the contract duration
            and also on its termination for the following purposes:
            <br /> <br />
            <ListUnordered>
              <ListCircle>pursue any claims relating to the performance of the contract;</ListCircle>
              <ListCircle>prevention of fraud and abuse; statistical and archiving;</ListCircle>
              <ListCircle>
                or a maximum of the limitation periods provided for by law after the contract termination.
              </ListCircle>
            </ListUnordered>
            Additionally, the law (Article 6.1(c) GDPR) requires us to process your data for tax and accounting
            purposes. We will retain this information for as long as required by law.
            <br />
            <br />
            If you give your consent (Article 6.1(a) GDPR), we will process your personal data for the purpose of:
            <br />
            <br />
            <ListUnordered>
              <ListCircle>storing data in cookies, collecting data from websites,</ListCircle>
              <ListCircle>adding comments to the website (e.g. on our blog).</ListCircle>
            </ListUnordered>
            We will retain personal data collected based on your consent until it is revoked or the purpose it was
            processed for has been achieved or until it becomes obsolete. You
            <br /> can withdraw your consent to the processing of personal data at any time by sending an e-mail to:
            {email}.<TextH5>To whom can we share the data?</TextH5>
            Subject to applicable law, we may share your data with other controllers or transfer it to processors whom
            we commence to process the data, such as hosting providers,
            <br />
            cloud computing providers, marketing agencies, subcontractors of our services (such as accounting and legal
            services) and entities entitled to obtain data under applicable
            <br />
            law, such as courts or law enforcement agencies, only if they make a request on an appropriate legal basis,
            of course.
            <TextH5>Is providing personal data voluntary?</TextH5>
            Providing your data is voluntary. We require you to provide personal data only at the stage of entering into
            an agreement with us (e.g. in the scope of sending a newsletter
            <br />
            or e-book), and then in connection with the need to settle it (i.e. for accounting, tax or protection
            against claims).
            <TextH5>What are your rights regarding your data?</TextH5>
            In connection with the processing of personal data, pursuant to the principles set forth in the provisions
            on the protection of personal data, including the GDPR, you are
            <br /> entitled to certain rights, including:
            <br />
            <br />
            <ListUnordered>
              <ListCircle>
                the right to access your data, i.e. the right to obtain confirmation from the {abbreviation} as to
                whether or not your personal data is being processed by us, or to obtain a copy of
                <br />
                <TextWithMarginLeft>
                  your personal data. This is to ensure that you are aware of and able to check how the {abbreviation}{' '}
                  uses your personal data. We may refuse to provide a copy of your personal
                </TextWithMarginLeft>
                <br />
                <TextWithMarginLeft>
                  information where this could adversely affect the rights of another person;
                </TextWithMarginLeft>
              </ListCircle>
              <ListCircle>
                the right to rectification, i.e. the right to request the {abbreviation} to rectify any personal data
                that is inaccurate or incomplete without delay (e.g. where the {abbreviation} processes your
                <br />
                <TextWithMarginLeft>incorrect name or address);</TextWithMarginLeft>
              </ListCircle>
              <ListCircle>
                the right to delete your data (also known as the “right to be forgotten”) – it enables you to request
                the deletion of your personal data if, for example, your data was used
                <br />
                <TextWithMarginLeft>
                  illegally, or your consent was withdrawn (if it was the only reason for processing your data).
                  However, the “right to be forgotten” does not constitute an absolute right to
                </TextWithMarginLeft>
                <br />
                <TextWithMarginLeft>
                  erasure of personal data as there are certain exceptions to this right, e.g. where we still need to
                  use the data to establish, pursue or defend legal
                </TextWithMarginLeft>
                <br />
                <TextWithMarginLeft>
                  claims or to fulfill a legal obligation (e.g. under accounting or tax law)
                </TextWithMarginLeft>
              </ListCircle>
              <ListCircle>
                the right to restrict processing – you have the right to prevent us from further using your personal
                data if, for example, the {abbreviation} is in the process of evaluating a request
                <br />
                <TextWithMarginLeft>
                  for rectification of your data. If the processing of personal data is restricted, {abbreviation} may
                  still store your personal data, but may not further actively use it (e.g. for the purpose
                </TextWithMarginLeft>
                <br />
                <TextWithMarginLeft>of fulfilling a contract).</TextWithMarginLeft>
              </ListCircle>
            </ListUnordered>
            To the extent that the processing of your personal data is based on a legitimate interest, you have the
            right to object to the processing of such data. However, the {abbreviation} may
            <br />
            continue to process personal data where it is able to demonstrate valid and legitimate grounds for
            processing overriding your interests, rights and freedoms or where
            <br />
            necessary to establish, pursue or defend a claim.
            <br />
            <br />
            To the extent that the processing of your personal data is based on consent, you have the right to withdraw
            your consent
            <br />
            at any time. The consent withdrawal shall not affect the lawfulness of the processing that has been carried
            out on the basis of the consent prior to the withdrawal. <br />
            <br />
            If you would like to exercise any of these rights, simply email us at: {email}.
            <br />
            <br />
            What is more, you have the right to lodge a complaint with the supervisory authority responsible for the
            processing of your personal data by us: President of the Personal
            <br />
            Data Protection Office (address:
            {personalDataOffice}
            <TextH5>Do we transfer your data to countries outside the European Economic Area?</TextH5>
            Your personal data may be transferred outside the European Economic Area subject to appropriate legal
            safeguards, such as standard contractual data protection clauses
            <br />
            approved by the European Commission or decisions of the European Commission stating an adequate level of
            protection (e.g. Privacy Shield).
            <TextH5>Do we process your data automatically?</TextH5>
            Please be advised that we do not make automated decisions, including those based on profiling.
            <TextH5>What about Cookies?</TextH5>
            We use Cookies on the end device of the User (e.g. computer, tablet, smartphone). Cookies may be read by the
            {abbreviation} IT system. We gain access to the information contained
            <br />
            in Cookies for statistical purposes and to ensure the proper functioning of the website, in particular to
            maintain the session after logging in.
            <br />
            <br />
            Importantly, we want you to know that:
            <br />
            <br />
            <ListUnordered>
              <ListCircle>
                The internet browser configuration is possible to prevents storage of cookies on the User’s end device.
              </ListCircle>
              <ListCircle>
                The User may delete Cookies after they are saved by the {abbreviation} through: relevant features of the
                web browser, software intended for that purpose or using appropriate tools
                <br />
                <TextWithMarginLeft> available under the operating system of the User.</TextWithMarginLeft>
              </ListCircle>
            </ListUnordered>
            Please be notified however that change to the web browser configuration that prevents or limits the Cookies
            storage on the User’s end device may impair the functionality of <br />
            the services provided. Similar effects may occur when deleting the Cookies in the course of the service
            provision.
            <br />
            <br />
            Information on how to delete Cookies in the most popular web browsers are included in the following links:
            <br />
            <br />
            <ListUnordered>
              <ListCircle>Firefox,</ListCircle>
              <ListCircle>Opera,</ListCircle>
              <ListCircle>Internet,</ListCircle>
              <ListCircle>Explorer,</ListCircle>
              <ListCircle>Chrome.</ListCircle>
            </ListUnordered>
            <TextH5>Use of Google Analytics for website analysis</TextH5>
            This website operator notifies that in order to collect and analyze aggregated information on the portal
            use, it uses the Google Analytics service. Please visit this location to
            <br />
            learn more about how this service collects and processes data.
            <TextH5>Use of Hot Jar for website move recording and heatmap generation</TextH5>
            We use hotjar.com services to generate heatmaps and record user sessions. All of this help us adjust our
            page
            <br />
            to user needs and have a preview of which content is the most important for them.
            <TextH5>Use of Google Firebase for email sending and storing user visit details</TextH5>
            We use firebase.google.com storage features to keep informations about offer visits of given user.
            <br />
            Additionally we send emails by using firebase features.
            <TextH5>Use of Linkedin Pixel and Facebook Pixel to perform predefined marketing</TextH5>
            We have Linked in and Facebook tags to directly target our customers with ads.
            <TextH5>Use of Hubspot for live chatting</TextH5>
            We also use third party service provider HubSpot to record and collect data on how you use our Website. This
            information is not personalised and helps Us improve the <br />
            functioning of Our Website. HubSpot to conduct marketing. HubSpot tool is provided by HubSpot, Inc., USA and
            may transfer your data to the USA.
            <TextH5>Should I still know something?</TextH5>
            For matters not covered by these Policy, provisions of law and particularly of the Act on provision of
            services by electronic means, the Act on personal data protection, the
            <br />
            Civil Code and GDPR shall apply. {abbreviation} reserves the right to modify the Policy due to significant
            reasons. The following shall be deemed significant reasons: introduction of
            <br />
            new, amendments to the existing legislation, adaptation to changes introduced by {abbreviation}.{' '}
            {abbreviation} notifies of the content of the changes by publishing a notice on the change of
            <br />
            Policy at www.{abbreviation}.io. The competent court for any disputes arising from the application of this
            Policy shall be the competent court under the applicable
            <br />
            <br />
            {lastVersionPolicy}
          </PrivacyPolicyText>
        </div>
      </PrivacyPolicyBg>
    </MaxWidthWithBg>
  );
};
