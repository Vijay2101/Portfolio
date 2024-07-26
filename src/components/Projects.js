// Projects.js
import React from 'react';
import styled from 'styled-components';

// Styled components
const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #000000;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectCard = styled.a`
  background-color: #333333;
  color: #ffffff;
  padding: 2rem;
  border-radius: 12px;  // Slightly more rounded corners
  text-decoration: none;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);  // Increased shadow for a more modern look
  transition: transform 0.3s ease, box-shadow 0.3s ease;  // Smooth transition

  &:hover {
    transform: translateY(-12px);  // Increased hover effect for better visual feedback
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);  // Darker shadow on hover
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;  // Reduced margin for a more compact look
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;  // Consistent spacing
`;

const Projects = () => (
  <ProjectsSection>
    <Title>Projects</Title>
    <ProjectsContainer>
      {/* Project 1 */}
      <ProjectCard href="https://github.com/Vijay2101/Customer-Segmentation-and-Personalized-Marketing-Platform" target="_blank" rel="noopener noreferrer">
        <ProjectTitle>Customer Segmentation and Personalized Marketing Platform</ProjectTitle>
        <ProjectDescription>
          Developed a survey website for data collection and customer categorization for targeted marketing.
        </ProjectDescription>
        <ProjectDescription>
          Built an admin interface with features to retrieve, review, and delete surveys, and monitor analytics.
        </ProjectDescription>
        <ProjectDescription>
          Implemented PCA dimensionality reduction and k-means clustering for enhanced customer profiling.
        </ProjectDescription>
      </ProjectCard>

      {/* Project 2 */}
      <ProjectCard href="https://github.com/Vijay2101/Real-time-number-plate-recognition" target="_blank" rel="noopener noreferrer">
        <ProjectTitle>Real-time Number Plate Recognition</ProjectTitle>
        <ProjectDescription>
          Developed a real-time ANPR system for detecting vehicles and extracting license plate numbers using YOLOv8.
        </ProjectDescription>
        <ProjectDescription>
          Integrated EasyOCR for accurate license plate number extraction.
        </ProjectDescription>
      </ProjectCard>

      {/* Project 3 */}
      <ProjectCard href="https://github.com/Vijay2101/medical_ChatBot" target="_blank" rel="noopener noreferrer">
        <ProjectTitle>Medical ChatBot</ProjectTitle>
        <ProjectDescription>
          Created a chatbot application for responding to medical queries, enhancing user access to medical information.
        </ProjectDescription>
        <ProjectDescription>
          Implemented an LSTM model to identify 47 different user intents for accurate responses.
        </ProjectDescription>
      </ProjectCard>
    </ProjectsContainer>
  </ProjectsSection>
);

export default Projects;

