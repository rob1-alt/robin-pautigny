import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/Home.module.css'
import ContextualMenu from '../components/contextualMenu'
import Clock from "@/components/clock";
import { gsap } from 'gsap';
import { SplitText } from '../vendors/gsap/SplitText';
import Image from "next/image";
import { ScrollTrigger } from '../vendors/gsap/ScrollTrigger'
import Head from 'next/head'
import EtherPrice from '@/components/crypto'
import CustomCursor from '@/components/CustomCursor';



gsap.registerPlugin(ScrollTrigger);





function About(){

    const textRef = useRef(null);
    const splitTextRef = useRef(null);
    const [ setCount] = useState(0);
    const imgRef = useRef(null)


    useEffect(() => {
        const el = imgRef.current;
        gsap.fromTo(
            el,
            {
              opacity: 0,
              scale: 0.8,
              transformOrigin: "center center",
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: el,
              },
            }
          );
        }, []);
  
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
                    <title>About me</title>
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
            <CustomCursor/>
            {/* <EtherPrice/> */}
            <Clock/>
            <div ref={textRef} className={styles.mainProject}>
                <h1 ref={splitTextRef} className={styles.aboutTitle} id="myText">ABOUT ME</h1>
            </div>
            <div className={styles.aboutMeContainer}>
                <div className={styles.pictureFull}>
                    <span className={styles.firstName}>Robin</span>
                    <Image
                        src="/selfPortrait2024_1.jpg"
                        width={1628}
                        height={2440}
                        alt="Picture of the author"
                        className={styles.portrait}
                        ref={imgRef}
                    />
                    <span className={styles.lastName}>Pautigny</span>
                </div>
                <div className={styles.summary}>
                    <h2>Personal Summary</h2>
                    <span>Hi, my name is Robin Pautigny, I'm 21 and I'm in my 5th year of a Master's Degree at <a className={styles.linksText} href="https://hetic.net" target="_blank">HETIC</a>. I live in Fontainebleau, not far from the Paris region. Perfect for working in Paris.<br/></span>
                    <span>Ever since my childhood, I have harbored an entrepreneurial spirit, a passion instilled in me by my father. Indeed, I have always been a natural problem-solver. Today, I proudly identify as a Product Owner, and I must confess that I derive immense satisfaction from this role. I firmly believe that it will significantly contribute to my journey towards becoming a successful entrepreneur, encompassing project management, roadmap creation, and a deep understanding of the technical aspects.<br/>Above all, it is the business aspect 💸 that truly drives and inspires me.</span>
                    <span><br/>During my first 4 years at HETIC, I endeavored to create as much as possible. I launched my own freelance company to develop websites and dashboards for clients. Additionally, I partnered with a friend to open a shop, which you can find <a href="/projects/overcop" className={styles.linksText}>here</a>. Currently, we are working on a top-secret project. 👀</span>
                    <h2 className={styles.download}><a href="/CVPAUTIGNY.pdf" download="🎉CV-ROBIN-PAUTIGNY🎉">Download my resume</a></h2>
                </div>
            </div>
            {/* <iframe  src="https://open.spotify.com/embed/playlist/4oGy1dYDhTJxMdD42hrqig?utm_source=generator&theme=0" width="20%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        </div>
    )
}

export default About