import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'; // Import the file icon

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.5rem;

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #1e90ff; /* Change this to your desired hover color */
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const Contact = () => (
  <ContactSection>
    <Title>Contact</Title>
    <ContactList>
      <ContactItem>
        <a href="mailto:kumarvijay2003.vk@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> kumarvijay2003.vk@gmail.com
        </a>
      </ContactItem>
      <ContactItem>
        <a href="https://www.linkedin.com/in/vijay-kumar-bb26081b0/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> linkedin.com/in/vijay-kumar
        </a>
      </ContactItem>
      <ContactItem>
        <a href="https://github.com/Vijay2101" target="_blank" rel="noopener noreferrer">
          <FaGithub /> github.com/Vijay2101
        </a>
      </ContactItem>
      <ContactItem>
        <a href="https://drive.google.com/file/d/13g21PCzDZP0uGPlz041Zj7iOKoPHY6z1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FaFileAlt /> Resume
        </a>
      </ContactItem>
    </ContactList>
  </ContactSection>
);

export default Contact;
