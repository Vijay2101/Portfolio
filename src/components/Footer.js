import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 2rem;
  background-color: #111;
  color: #fff;
  text-align: center;
`;

const Footer = () => (
  <FooterSection>
    <p>&copy; 2024 Vijay Kumar. All rights reserved.</p>
  </FooterSection>
);

export default Footer;
