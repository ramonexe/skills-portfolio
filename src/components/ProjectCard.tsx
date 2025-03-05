import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.25rem;
`;

const CardDescription = styled.p`
  margin: 0 0 16px;
  font-size: 1rem;
  color: #666;
`;

const CardButton = styled.a`
  margin-top: auto;
  padding: 8px 16px;
  background-color: #1f3661;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1c59c9;
  }
`;

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link }) => (
  <Card>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton href={link} target="_blank" rel="noopener noreferrer">Visitar Página</CardButton>
    </CardContent>
  </Card>
);

export default ProjectCard;