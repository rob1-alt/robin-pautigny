import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../../styles/slug.module.css';
import ProjectDB from '../../utils/articles.json';
import ContextualMenu from "../../components/contextualMenu";
import Clock from "../../components/clock";
import { gsap } from 'gsap';
import { SplitText } from '../../vendors/gsap/SplitText';
import Head from 'next/head'
import EtherPrice from '@/components/crypto'



// gsap.registerPlugin(SplitText);


function Project() {
const [project, setProject] = useState(null);
const router = useRouter();
const { slug } = router.query;
const textRef = useRef(null);
const splitTextRef = useRef(null);
const projectRef = useRef(null);
const [ setCount] = useState(0);



  useEffect(() => {
    if(!splitTextRef.current) return
    const splitText = new SplitText(splitTextRef.current);
    gsap.set(splitText.chars, { opacity: 0, y: 100 });
    gsap.to(splitText.chars, {
    lazy: true,
    duration: 1.5,
    opacity: 1,
    y: 0,
    stagger: 0.05,
    ease: 'power3.out',
    onComplete: () => {
    }
    });
    }, [project]);


    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 200) {
          gsap.to("#firstMockup", {
            opacity: 1, // L'opacité finale de l'élément
            duration: 1, // La durée de l'animation
            ease: 'power1.out', // L'effet de transition
          });
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    




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

  const handleClick = () => {
    window.open(project.content.link, '_blank');
  };

  console.log('%cSalut toi, tu cherches quoi ici ?', 'background: #222; color: #bada55')



return (
  
  <div ref={projectRef}>
                    <Head>
                    <title>{project.title}</title>
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
      <h1 ref={splitTextRef}  className={styles.workTitle} id="myText">{project.title}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Répéter l'animation</button> */}
    </div>
    <div style={ipadMockup1} id="firstMockup" className={styles.firstMockup}>
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
        <div className={styles.liveSite}>
          <a onClick={handleClick} >View live site</a>
        </div>
        <div className={styles.round}></div>
        {/* <p>pas grand chose</p> */}
      </div>
    </div>
    <div className={styles.gridContainer}>
      <div className={styles.gridItem} style={grid1}></div>
      <div className={styles.gridItem} style={grid2}></div>
      <div className={styles.gridItem} style={grid3}></div>
      <div className={styles.gridItem} style={grid4}></div>
    </div>
    {/* <Link href="/projects">Retour à la liste des projets</Link> */}
  </div>
);
}

export default Project;