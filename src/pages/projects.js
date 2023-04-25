import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import ProjectDB from '../utils/articles.json';
import ContextualMenu from "@/components/contextualMenu";
import Clock from "@/components/clock";
import Head from 'next/head'
import Image from 'next/image'
import { gsap } from 'gsap';
import { SplitText } from '../vendors/gsap/SplitText';


function ProjectsList() {
  const [projects, setProjects] = useState([]);

  const background = ProjectDB.background

  useEffect(() => {
    async function fetchData() {
      setProjects(ProjectDB);
    }
    fetchData();
  }, []);

  const textRef = useRef(null);
  const splitTextRef = useRef(null);
  const [ setCount] = useState(0);

  useEffect(() => {
    if(!splitTextRef.current) return
    const splitText = new SplitText(splitTextRef.current);
    gsap.set(splitText.chars, { opacity: 0, y: 100 });
    gsap.to(splitText.chars, {
    lazy: true,
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: 'power4.out',
    onComplete: () => {
    }
    });
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
    <div ref={textRef} className={styles.mainProject}>
      <h1 ref={splitTextRef} className={styles.workTitle} id="myText">MY WORK</h1>
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