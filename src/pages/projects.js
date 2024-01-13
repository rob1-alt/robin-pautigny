import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import ProjectDB from '../utils/articles.json';
import ContextualMenu from "@/components/contextualMenu";
import Clock from "@/components/clock";
import Head from 'next/head'
import { gsap } from 'gsap';
import { SplitText } from '../vendors/gsap/SplitText';
import EtherPrice from '@/components/crypto'
import Footer from '@/components/footer'


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
        <meta name="description" content="Hello I'm Robin, a twenty one years old creative entrepreneur based in Paris. I'm a 4th year student at HETIC. Come and see my awesome projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/thumbnail.png"/>
        <meta property="og:title" content="Robin Pautigny"/>
        <meta property="og:image:width" content="500"/>
        <meta property="og:image:height" content="830"/>
        <meta property="og:image:alt" content="Thumbnail"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ContextualMenu/>
      <EtherPrice/>
      <Clock/>
    <div ref={textRef} className={styles.mainProject}>
      <h1 ref={splitTextRef} className={styles.workTitle} id="myText">MY WORK</h1>
    </div>
    <section >
        <ul className={styles.listing}>
          {projects.map((project) => (
          <Link href={`/projects/${project.slug}`}>
            <div className={styles.card} style={{ backgroundImage: `url(${project.images.thumbnail})`}} >
            <li key={project.id}>
              <div className={styles.link}>
                <div className={styles.cardTitle}>{project.title}</div>
              </div>
            </li> 
            </div>
            </Link>
          ))}
        </ul>
    </section>
    <Footer/>
    </div>
  );
}

export default ProjectsList;
