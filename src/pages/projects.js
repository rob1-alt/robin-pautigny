import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import ProjectDB from '../utils/articles.json';
import ContextualMenu from "@/components/contextualMenu";
import Clock from "@/components/clock";
import Head from 'next/head'
import Image from 'next/image'


function ProjectsList() {
  const [projects, setProjects] = useState([]);

  const background = ProjectDB.background






  useEffect(() => {
    async function fetchData() {
      setProjects(ProjectDB);
    }
    fetchData();
  }, []);

  return (

    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextualMenu/>
      <Clock/>
    <div className={styles.mainProject}>
      <h1 className={styles.workTitle} id="myText">MY WORK</h1>
    </div>
    <section >
        <ul className={styles.listing} style={{backgroundImage: `url(${background})`}}>
          {projects.map((project) => (
            <div className={styles.card}>
            <li key={project.id}>
              <Link href={`/projects/${project.slug}`}>
                <div className={styles.cardTitle}>{project.title}</div>
              </Link>
            </li> 
            </div>
          ))}
        </ul>
    </section>

    </div>
  );
}

export default ProjectsList;
