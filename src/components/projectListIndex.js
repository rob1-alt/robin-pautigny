import React, { useEffect, useState } from 'react';
import ProjectDB from '../utils/articles.json';
import styles from '@/styles/contextTual.module.css';
import Link from "next/link";

export default function ProjectsListIndex({ projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  // const filteredProjects = projects.filter(project => !project.test);


  return (
<div>

    {/* <div className={styles.marquee}>
      <p>PROJECTS • Projects </p>
    </div> */}
    <div className={styles.marquee}>
  <div className={styles.track}>
    <div className={styles.content}>&nbsp;PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS- PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS</div>
  </div>
</div>
    <div className={styles.projectsList}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={styles.project}
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <Link href={`/projects/${project.slug}`}>
            <div className={styles.listProjectTitle}>
              <h2>{project.title}</h2>
              <span>{project.content.year}</span>
            </div>
            <img src={project.images.thumbnail} alt={project.title} />
          </Link>
        </div>
      ))}
      
    </div>
    
  </div>
  );
}
