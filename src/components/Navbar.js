import { Link } from 'react-scroll';
import styled from 'styled-components';

// Container for the navbar
const NavbarContainer = styled.nav`
  background: #000; // Background color set to black
  color: #fff;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between; // Distributes space between navbar items and social links
  align-items: center; // Centers items vertically
  box-sizing: border-box; // Ensures padding and border are included in the element's total width and height
`;

// Container for navbar links
const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start; // Aligns items to the left
`;

// Navbar item styling
const NavbarItem = styled.li`
  margin: 0 1rem;
`;

// Navbar link styling
const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s;

  &:hover {
    color: #1e90ff;
  }
`;

// Container for social media links
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; // Pushes social links to the right side
  overflow: hidden; // Prevents overflow of social links
`;

// Social media link styling
const SocialLink = styled.a`
  color: #fff;
  font-size: 1.25rem;
  margin-left: 1rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #1e90ff;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem><NavbarLink to="home" smooth={true} duration={500}>Home</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="about" smooth={true} duration={500}>About</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="projects" smooth={true} duration={500}>Projects</NavbarLink></NavbarItem>
        <NavbarItem><NavbarLink to="contact" smooth={true} duration={500}>Contact</NavbarLink></NavbarItem>
      </NavbarList>
      <SocialLinks>
        <SocialLink href="https://www.linkedin.com/in/vijay-kumar-bb26081b0/" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
        <SocialLink href="https://github.com/Vijay2101" target="_blank" rel="noopener noreferrer">GitHub</SocialLink>
        <SocialLink href="https://drive.google.com/file/d/13g21PCzDZP0uGPlz041Zj7iOKoPHY6z1/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</SocialLink>
        {/* Add more social links as needed */}
      </SocialLinks>
    </NavbarContainer>
  );
}

export default Navbar;
