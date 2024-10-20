// src/container/projects/ProjectsContainer.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Spin, Alert } from 'antd';

const { Meta } = Card;

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectContainer: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log(axios.get('http://127.0.0.1:8000/api/questions'))
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/questions');
        
        const data = response.data.results.map((product: any) => ({
          id: product.id,
          title: product.question_text,
          description: product.pub_date,
          image: product,
          link: '#', // Replace with actual link if available
          
        }));



        setProjects(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <Alert message="Error" description={error} type="error" showIcon />
      </div>
    );
  }

  return (
    
    <div className="projects-container">
      <h1>My Projects</h1>
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col key={project.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={project.title} src={project.image} />}
            >
              <Meta title={project.title} description={project.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectContainer;