import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000; /* Darker shade of black for a sleek look */
  border-radius: 10px; /* Rounded corners for a modern touch */
  color: #ffffff; /* White text color for better readability */
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff; /* White text color for title */
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff; /* White text color for subtitles */
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #d0d0d0; /* Slightly lighter white text for paragraphs */
  text-align: center;
  max-width: 800px;
`;

const FloatingSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Allow wrapping for responsive design */
  gap: 1.5rem;
  width: 100%;
`;

const FloatingSection = styled.div`
  background-color: #1e1e1e; /* Slightly lighter dark background for sections */
  color: #ffffff; /* White text color for cards */
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  height: auto; /* Allow height to adjust based on content */
  min-height: 200px; /* Minimum height for uniformity */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #d0d0d0; /* Slightly lighter white text for list items */

  li {
    margin-bottom: 0.75rem;
  }
`;

const About = () => (
  <AboutSection>
    <Title>About Me</Title>

    <Section>
      <Subtitle>Technical Skills</Subtitle>
      <FloatingSectionContainer>
        <FloatingSection>
          <h3>Programming Languages</h3>
          <List>
            <li>Python</li>
            <li>SQL</li>
            <li>Java</li>
          </List>
        </FloatingSection>
        <FloatingSection>
          <h3>Libraries and Tools</h3>
          <List>
            <li>TensorFlow</li>
            <li>Sklearn</li>
            <li>NLTK</li>
            <li>OpenCV</li>
            <li>Excel</li>
            <li>Power BI</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Linux</li>
          </List>
        </FloatingSection>
        <FloatingSection>
          <h3>ML Architectures</h3>
          <List>
            <li>CNN</li>
            <li>RNN</li>
            <li>Large Language Models (LLMs)</li>
          </List>
        </FloatingSection>
      </FloatingSectionContainer>
    </Section>

    <Section>
      <Subtitle>Work Experience</Subtitle>
      <FloatingSectionContainer>
        <FloatingSection>
          <h3>Machine Learning Intern at BPIT</h3>
          <p>Developed program to scrape data from PDFs of 1000+ pages.</p>
          <p>Worked on web scraping to retrieve student data from coding platforms.</p>
        </FloatingSection>
        <FloatingSection>
          <h3>Technical Head at WIBD IEEE Society</h3>
          <p>Developed and curated quiz and content for 50+ team members to enhance their technical knowledge.</p>
          <p>Collaborated with team members to plan and execute content strategies aligned with the society’s goals.</p>
          <p>Conducted research to stay updated on industry trends and produce relevant content.</p>
        </FloatingSection>
      </FloatingSectionContainer>
    </Section>

    <Section>
      <Subtitle>Education</Subtitle>
      <FloatingSectionContainer>
        <FloatingSection style={{ margin: '0 auto' }}>
          <h3>B.Tech in Artificial Intelligence and Data Science</h3>
          <p>Guru Gobind Singh Indraprastha University, Delhi</p>
          <p>Current GPA: 8.27</p>
        </FloatingSection>
      </FloatingSectionContainer>
    </Section>

    <Paragraph>“Driven by curiosity, I build intelligent systems to solve real-world problems.”</Paragraph>
  </AboutSection>
);

export default About;

