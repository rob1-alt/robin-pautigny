import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../../styles/slug.module.css';
import ProjectDB from '../../utils/articles.json';
import ContextualMenu from "../../components/contextualMenu";
import Clock from "../../components/clock";
import { gsap } from 'gsap';
import { SplitText } from '../../vendors/gsap/SplitText';


gsap.registerPlugin(SplitText);


function Project() {
const [project, setProject] = useState(null);
const router = useRouter();
const { slug } = router.query;

const textRef = useRef(null);
  const splitTextRef = useRef(null);
  const projectRef = useRef(null);

  console.log(splitTextRef);

  useEffect(() => {
    console.log('splitTextRef', splitTextRef.current)
    if(!splitTextRef.current)return 
    const splitText = new SplitText(splitTextRef.current);
    gsap.set(splitText.chars, { opacity: 0, y: 100 });
    gsap.to(splitText.chars, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: 'power4.out',
    });
  }, [splitTextRef.current]);


// fetch the data of the json file  
  useEffect(() => {
  async function fetchData() {
    const data = ProjectDB.filter((project) => project.slug === slug)[0];
    setProject(data);
    }
    fetchData();
  }, [slug, projectRef]);
  if (!project) return

  const ipadMockup1 = {
    backgroundImage: `url(${project.images.ipadMockup})`,
  };
  const ipadMockup2 = {
    backgroundImage: `url(${project.images.doubleIpadMockup})`,
  };
  const grid1 = {
    backgroundImage: `url(${project.images.grid1})`,
  } 
  const grid2 = {
    backgroundImage: `url(${project.images.grid2})`,
  } 
  const grid3 = {
    backgroundImage: `url(${project.images.grid3})`,
  } 
  const grid4 = {
    backgroundImage: `url(${project.images.grid4})`,
  } 
  const link = {
    href :  `{project.content.links}`,
  };


return (
  <div ref={projectRef}>
    <ContextualMenu/>
    <Clock/>
    <div ref={textRef} className={styles.mainProject}>
      <h1 ref={splitTextRef}  className={styles.workTitle} id="myText">{project.title}</h1>
    </div>
    <div style={ipadMockup1} className={styles.firstMockup}>
    </div>
    <div style={ipadMockup2} className={styles.firstMockup}>
    </div>
    <div className={styles.description}>
      <div className={styles.tags}>
        <p>{project.tags.tag1}</p>
        <p>{project.tags.tag2}</p>
        <p>{project.tags.tag3}</p>
      </div>
      <p className={styles.contentDescription}>{project.content.description}</p>
      <div className={styles.links}>
        <a href={link}>View live site</a>
        <div className={styles.round}></div>
        <p>pas grand chose</p>
      </div>
    </div>
    <div className={styles.gridContainer}>
      <div className={styles.gridItem} style={grid1}></div>
      <div className={styles.gridItem} style={grid2}></div>
      <div className={styles.gridItem} style={grid3}></div>
      <div className={styles.gridItem} style={grid4}></div>
    </div>
    <Link href="/projects">Retour à la liste des projets</Link>
  </div>
);
}

export default Project;