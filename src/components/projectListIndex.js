import React, { useEffect, useState, useRef } from 'react';
import ProjectDB from '../utils/articles.json';
import styles from '@/styles/contextTual.module.css';
import Link from "next/link";

export default function ProjectsListIndex({ projects }) {
  // Initialize with 0 to have first project hovered by default
  const [hoveredProject, setHoveredProject] = useState(0);
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div>
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
            onMouseEnter={() => {
              // If hovering the first project, remove hover effect
              if (index === 0) {
                setHoveredProject(null);
              } else {
                setHoveredProject(index);
              }
            }}
            onMouseLeave={() => {
              // When mouse leaves, set hover back to first project
              setHoveredProject(0);
            }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className={styles.listProjectTitle}>
                <h2>{project.title}</h2>
                <span>{project.content.year}</span>
              </div>
              <div>
                {project.images.thumbnailVideo ? (
                  <video ref={videoRef} src={project.images.thumbnailVideo} alt={project.title} autoPlay muted playsInline onClick={playVideo} loop  />
                ) : (
                  <img src={project.images.thumbnail} alt={project.title} />
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}