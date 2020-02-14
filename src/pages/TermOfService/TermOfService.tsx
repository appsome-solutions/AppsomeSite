import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const MainComponent = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  padding: 40px 80px 40px 80px;
`;
const TextH4 = styled.h4`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin: 20px 0 20px 0;
`;
const TextH5 = styled.h5`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin: 20px 0 20px 0;
`;
const ServiceText = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const ListOrdered = styled.ol`
type="1"`;
const NumbersList = styled.li``;
const CenteredBox = styled.div``;
export const TermOfService: FunctionComponent = () => (
  <MainComponent id="TermOfService">
    <CenteredBox>
      <TextH4>Terms & Conditions</TextH4>
      <TextH5>1. Terms</TextH5>
      <ServiceText>
        <ListOrdered>
          <NumbersList>
            By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all
            applicable laws and regulations, and agree that you are responsible for compliance with any applicable local
            laws.
          </NumbersList>
          <br />
          <NumbersList>
            If you do not agree with any of these terms, you are prohibited from using or accessing this site. The
            materials contained in this web site are protected by applicable copyright and trade mark law.
          </NumbersList>
        </ListOrdered>
      </ServiceText>
      <TextH5>2. Use License</TextH5>
      <ServiceText>
        <ListOrdered>
          <NumbersList>
            Permission is granted to temporarily download one copy of the materials (information or software) on The
            Software House’s web site for personal, non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may not:
          </NumbersList>
          <ListOrdered>
            <br />
            <NumbersList>modify or copy the materials;</NumbersList>
            <br />
            <NumbersList>
              use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
            </NumbersList>
            <br />
            <NumbersList>
              attempt to decompile or reverse engineer any software contained on tsh.io’s web site;
            </NumbersList>
            <br />
            <NumbersList>remove any copyright or other proprietary notations from the materials; or</NumbersList>
            <br />
            <NumbersList>
              transfer the materials to another person or “mirror” the materials on any other server.
            </NumbersList>
            <br />
          </ListOrdered>
          <NumbersList>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by
            The Software House at any time. Upon terminating your viewing of these materials or upon the termination of
            this license, you must destroy any downloaded materials in your possession whether in electronic or printed
            format.
          </NumbersList>
        </ListOrdered>
      </ServiceText>
      <TextH5>3. Disclaimer</TextH5>
      <ServiceText>
        <ListOrdered>
          <NumbersList>
            The materials on The Software House’s web site are provided “as is”. The Software House makes no warranties,
            expressed or implied, and hereby disclaims and negates all other warranties, including without limitation,
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
            of intellectual property or other violation of rights. Further, The Software House does not warrant or make
            any representations concerning the accuracy, likely results, or reliability of the use of the materials on
            its Internet web site or otherwise relating to such materials or on any sites linked to this site.
          </NumbersList>
        </ListOrdered>
      </ServiceText>
      <TextH5>4. Limitations</TextH5>
      <ServiceText>
        <ListOrdered>
          <NumbersList>
            In no event shall The Software House or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or
            inability to use the materials on The Software House’s Internet site, even if The Software House or a The
            Software House authorized representative has been notified orally or in writing of the possibility of such
            damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of
            liability for consequential or incidental damages, these limitations may not apply to you.
          </NumbersList>
        </ListOrdered>
      </ServiceText>
      <TextH5>5. Revisions and Errata</TextH5>
      <ServiceText>
        <ListOrdered>
          <NumbersList>
            The materials appearing on The Software House’s web site could include technical, typographical, or
            photographic errors. The Software House does not warrant that any of the materials on its web site are
            accurate, complete, or current. The Software House may make changes to the materials contained on its web
            site at any time without notice. The Software House does not, however, make any commitment to update the
            materials.
          </NumbersList>
        </ListOrdered>
      </ServiceText>
      <TextH5>6. Links</TextH5>
      <ServiceText>
        <ListOrdered>
          <NumbersList>
            The Software House has not reviewed all of the sites linked to its Internet web site and is not responsible
            for the contents of any such linked site. The inclusion of any link does not imply endorsement by The
            Software House of the site. Use of any such linked web site is at the user’s own risk.
          </NumbersList>
        </ListOrdered>
      </ServiceText>
      <TextH5>7. Site Terms of Use Modifications</TextH5>
      <ServiceText>
        <ListOrdered>
          <NumbersList>
            The Software House may revise these terms of use for its web site at any time without notice. By using this
            web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
          </NumbersList>
        </ListOrdered>
      </ServiceText>
      <TextH5>8. Governing Law</TextH5>
      <ServiceText>
        <ListOrdered>
          <NumbersList>
            Any claim relating to The Software House’s web site shall be governed by the laws of the Republic of Poland
            without regard to its conflict of law provisions. General Terms and Conditions applicable to Use of a Web
            Site.
          </NumbersList>
        </ListOrdered>
      </ServiceText>
      <TextH5>9. Refund Policy</TextH5>
      <ServiceText>
        <ListOrdered>
          <NumbersList>We do not provide refunds. </NumbersList>
        </ListOrdered>
      </ServiceText>
    </CenteredBox>
  </MainComponent>
);
