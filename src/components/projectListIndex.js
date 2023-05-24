import React, { useEffect, useState } from 'react';
import ProjectDB from '../utils/articles.json';
import styles from '@/styles/contextTual.module.css';
import Link from "next/link";

function ProjectsListIndex() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Charger les données des projets à partir de votre source de données (par exemple, une API ou un fichier JSON)
      setProjects(ProjectDB);
    }
    fetchData();
  }, []);
  

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseOver = (image) => {
    setHoveredImage(image);
  };

  const handleMouseOut = () => {
    setHoveredImage(null);
  };

  return (
    <div>
      <section>
        <ul className={styles.listing}>
          {projects.map((project) => (
            <div className={styles.card} style={{ backgroundImage: `url(${project.images.thumbnail})` }} key={project.id}>
              <li>
                <Link className={styles.link} href={`/projects/${project.slug}`}>
                  <div
                    className={styles.cardTitle}
                    onMouseOver={() => handleMouseOver(project.image)}
                    onMouseOut={handleMouseOut}
                  >
                    {project.title}
                  </div>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </section>
      {hoveredImage && <img src={project.images.grid3} alt="Image associée au projet" />}
    </div>
  );
}

export default ProjectsListIndex;
