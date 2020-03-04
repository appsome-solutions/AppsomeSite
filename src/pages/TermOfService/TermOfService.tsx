import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { media } from 'global/RWD';
import { MaxWidthWithBg } from '../../components/MaxSizeAndBackground/MaxWidthAndBg';

export interface TermServiceProps {
  name?: string;
  nameOfBusiness?: string;
}

const MainComponent = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
    padding: 20px;
    white-space: pre-wrap;
  `}
  ${media.lg`
  padding: 40px 80px;
  `}
`;

const TextH4 = styled.h4`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin: 20px 0;
  ${media.xs`
    font-size: 24px;
    line-height:24px;
   `}
`;

const TextH5 = styled.h5`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin: 20px 0;
`;

export const TermOfService: FunctionComponent<TermServiceProps> = (props: TermServiceProps) => {
  const { nameOfBusiness, name } = props;

  return (
    <MaxWidthWithBg BgColor="primary">
      <MainComponent id="TermOfService">
        <div>
          <TextH4>Terms & Conditions</TextH4>
          <TextH5>1. Terms</TextH5>
          <ol>
            <li>
              By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use,
              all applicable laws and regulations, and agree that you are responsible for compliance with any applicable
              local laws.
            </li>
            <br />
            <li>
              If you do not agree with any of these terms, you are prohibited from using or accessing this site. The
              materials contained in this web site are protected by applicable copyright and trade mark law.
            </li>
          </ol>
          <TextH5>2. Use License</TextH5>
          <ol>
            <li>
              Permission is granted to temporarily download one copy of the materials (information or software) on{' '}
              {nameOfBusiness} web site for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </li>
            <ol>
              <br />
              <li>modify or copy the materials;</li>
              <br />
              <li>
                use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
              </li>
              <br />
              <li>attempt to decompile or reverse engineer any software contained on {name} web site;</li>
              <br />
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <br />
              <li>transfer the materials to another person or “mirror” the materials on any other server.</li>
              <br />
            </ol>
            <li>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated
              by {nameOfBusiness} at any time. Upon terminating your viewing of these materials or upon the termination
              of this license, you must destroy any downloaded materials in your possession whether in electronic or
              printed format.
            </li>
          </ol>
          <TextH5>3. Disclaimer</TextH5>
          <ol>
            <li>
              The materials on {nameOfBusiness} web site are provided “as is”. {nameOfBusiness} makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties, including without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights. Further, {nameOfBusiness} does not warrant or make
              any representations concerning the accuracy, likely results, or reliability of the use of the materials on
              its Internet web site or otherwise relating to such materials or on any sites linked to this site.
            </li>
          </ol>
          <TextH5>4. Limitations</TextH5>
          <ol>
            <li>
              In no event shall {nameOfBusiness} or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use
              or inability to use the materials on {nameOfBusiness} Internet site, even if {nameOfBusiness} or a{' '}
              {nameOfBusiness} authorized representative has been notified orally or in writing of the possibility of
              such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of
              liability for consequential or incidental damages, these limitations may not apply to you.
            </li>
          </ol>
          <TextH5>5. Revisions and Errata</TextH5>
          <ol>
            <li>
              The materials appearing on {nameOfBusiness} web site could include technical, typographical, or
              photographic errors. {nameOfBusiness} does not warrant that any of the materials on its web site are
              accurate, complete, or current. {nameOfBusiness} may make changes to the materials contained on its web
              site at any time without notice. {nameOfBusiness} does not, however, make any commitment to update the
              materials.
            </li>
          </ol>
          <TextH5>6. Links</TextH5>
          <ol>
            <li>
              {nameOfBusiness} has not reviewed all of the sites linked to its Internet web site and is not responsible
              for the contents of any such linked site. The inclusion of any link does not imply endorsement by{' '}
              {nameOfBusiness} of the site. Use of any such linked web site is at the user’s own risk.
            </li>
          </ol>
          <TextH5>7. Site Terms of Use Modifications</TextH5>
          <ol>
            <li>
              {nameOfBusiness} may revise these terms of use for its web site at any time without notice. By using this
              web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
            </li>
          </ol>
          <TextH5>8. Governing Law</TextH5>
          <ol>
            <li>
              Any claim relating to {nameOfBusiness} web site shall be governed by the laws of the Republic of Poland
              without regard to its conflict of law provisions. General Terms and Conditions applicable to Use of a Web
              Site.
            </li>
          </ol>
          <TextH5>9. Refund Policy</TextH5>
          <ol>
            <li>We do not provide refunds. </li>
          </ol>
        </div>
      </MainComponent>
    </MaxWidthWithBg>
  );
};
