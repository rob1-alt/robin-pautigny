import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/Home.module.css'
import ContextualMenu from '../components/contextualMenu'
import Clock from "@/components/clock";
import { gsap } from 'gsap';
import { SplitText } from '../vendors/gsap/SplitText';
import Image from "next/image";
import Portrait from '/public/seflPortrait.png'
import { ScrollTrigger } from '../vendors/gsap/ScrollTrigger'

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
                        ref={imgRef}
                    />
                    <span className={styles.lastName}>Pautigny</span>
                </div>
                <div className={styles.summary}>
                    <h2>Personal Summary</h2>
                    <span>Hi, my name is Robin Pautigny, I'm 21 and I'm in my 5th year of a Master's Degree at <a className={styles.linksText} href="https://hetic.net" target="_blank">HETIC</a>. I live in Fontainebleau, not far from the Paris region. Perfect for working in Paris.<br/></span>
                    <span>Ever since I was a child, I've had this entrepreneurial spirit, and I think it was my dad who gave me the virus. In fact, I've always been a problem-solver. Today, I define myself as a Product Owner, and I have to say that I really enjoy this job. I think it's really going to help me on my journey to becoming a good entrepreneur. Whether it's the project management aspect, the roadmap or the tech aspect.<br/> But above all in the business aspect 💸. </span>
                    <span><br/>During my first 4 years at HETIC , I tried to create as many things as possible. I launched my own freelance company to create websites and dashboards for my clients. I also launched a shop with a friend, which you can find <a href="/projects/overcop" className={styles.linksText}>here</a>. And right now we're working on a top secret project. 👀</span>
                    <h2 className={styles.download}><a href="/seflPortrait.png" download="🎉Robin's Awesome Resume 🎉">Download my resume</a></h2>
                </div>
            </div>
            {/* <iframe  src="https://open.spotify.com/embed/playlist/4oGy1dYDhTJxMdD42hrqig?utm_source=generator&theme=0" width="20%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        </div>
    )
}

export default About