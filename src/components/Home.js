import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for typing and blinking cursor animations
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  0% { border-color: transparent; }
  100% { border-color: #ffffff; }
`;

// Styled components
const HomeSection = styled.section`
  display: flex;
  flex-direction: row; // Changed to row to place image and text side-by-side
  justify-content: center;
  align-items: center; // Center items vertically
  height: 100vh;
  background-color: #000000;
  color: #ffffff;
  padding: 0 2rem; // Adjust padding as needed
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // Align text to the left
  margin-right: 2rem; // Space between text and image
`;

const HiTextContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 4rem; // Adjusted font size
`;

const HiText = styled.span`
  font-size: 4rem; // Adjusted font size
`;

const NameText = styled.span`
  font-size: 3rem;
  margin-left: 1rem;
`;

const TypingEffect = styled.span`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffffff; // Cursor
  animation: ${typing} 4s steps(30, end), ${blink} 0.75s step-end infinite;
  font-size: 2rem; // Adjusted font size
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem; // Adjusted font size
  margin-top: 1rem;
  line-height: 1.5;
  max-width: 600px; // Added max-width for readability
`;

// New styled component for the image
const ImageContainer = styled.div`
  flex: 1; // Makes sure the image takes available space
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

// Home component
const Home = () => {
  const [currentText, setCurrentText] = useState('Python Developer');
  const texts = [
    'Python Developer',
    'Machine Learning Engineer',
    'Data Scientist',
    'Data Analyst',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prevText => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <HomeSection>
      <TextContainer>
        <HiTextContainer>
          <HiText>Hi,</HiText>
          <NameText>I'm Vijay Kumar</NameText>
        </HiTextContainer>
        <TypingEffect>
          {currentText}
        </TypingEffect>
        <Description>
          I am an AI and data science professional passionate about creating advanced machine learning models and data-driven solutions.
        </Description>
        <Description>
          I focus on developing intelligent systems and innovative solutions to tackle challenging problems with data insights.
        </Description>
      </TextContainer>
      <ImageContainer>
        <Image src="https://retailcloud.com/assets/img/career/career-og.png" alt="Your Description" />
      </ImageContainer>
    </HomeSection>
  );
};

export default Home;
