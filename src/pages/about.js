import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/Home.module.css'
import ContextualMenu from '../components/contextualMenu'
import Clock from "@/components/clock";
import { gsap } from 'gsap';
import { SplitText } from '../vendors/gsap/SplitText';
import Image from "next/image";






function About(){

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
            <ContextualMenu/>
            <Clock/>
            <div ref={textRef} className={styles.mainProject}>
                <h1 ref={splitTextRef} className={styles.aboutTitle} id="myText">ABOUT ME</h1>
            </div>
            <div className={styles.aboutMeContainer}>
                <div className={styles.pictureFull}>
                    <span className={styles.firstName}>Robin</span>
                    <Image
                        src="/seflPortrait.png"
                        width={1628}
                        height={2440}
                        alt="Picture of the author"
                        className={styles.portrait}
                    />
                    <span className={styles.lastName}>Pautigny</span>
                </div>
                <div className={styles.summary}>
                    <h2>Personal Summary</h2>
                </div>
            </div>
            {/* <iframe  src="https://open.spotify.com/embed/playlist/4oGy1dYDhTJxMdD42hrqig?utm_source=generator&theme=0" width="20%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        </div>
    )
}

export default About