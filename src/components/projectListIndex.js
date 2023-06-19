import React, { useEffect, useState } from 'react';
import ProjectDB from '../utils/articles.json';
import styles from '@/styles/contextTual.module.css';
import Link from "next/link";

export default function ProjectsListIndex({ projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className={styles.projectsList}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={styles.project}
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <h2>{project.title}</h2>
          {hoveredProject === index && (
            <img src={project.images.thumbnail} alt={project.title} />
          )}
        </div>
      ))}
    </div>
  );
}