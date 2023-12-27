import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import video from "../assets/videos/basic_doc.mp4";
import { gsap } from "gsap"; // Import GSAP
import SplitType from "split-type";
import song from "../assets/audio/Wongel.mp3";

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const HeroVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    height: 50%;
    margin-top: 0px;
  }
`;

const HeroOverlay = styled.div`
  scale: 1.015;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  filter: blur(10px);
  color: white;

  display: flex;
  justify-content: end;
  align-items: start;
  flex-direction: column;

  & > h1 {
    display: flex;
    flex-direction: column;
    align-items: start;

    padding: 16px 30px 0px 30px;

    @media (max-width: 768px) {
      padding: 20px;
      padding-bottom: 0px;
    }
  }
`;

const HeroText = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 16px;
  color: white;
  text-align: center;

  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 1.4;
  }
`;

const TimeText = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 16px;
  color: white;
  text-align: start;
  margin-top: 20px;
 
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;

  align-items: end;

  padding: 0px 30px 16px 36px;
  margin: 0;
  

  @media (max-width: 768px) {
    font-size: 1rem;
    flex-direction: column;
    padding: 0px 30px 20px 20px;
    white-space: nowrap;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Hero() {
  // Rename to 'Hero' with uppercase 'H'

  const heroRef = useRef(null);
  const textRef = useRef(null);
  const timeRef = useRef(null);
  useEffect(() => {
    gsap.to(heroRef.current, {
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.inOut",
      delay: 0.2,
    });

    //make a gsap animation with the splittype and the textRef.current
    // Split the text
    const split = new SplitType(textRef.current, { types: "words, chars" });
   


    // GSAP animation for the split text
    gsap.from(split.chars, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: "power2.out",
      delay: 0.4, // Adjust delay to sync with overlay animation
    });
    
  }, []);

  return (
    <HeroContainer>
      <HeroOverlay ref={heroRef}>
        <HeroText ref={textRef}>OPEN FOR NEWYEAR</HeroText>
        <TimeText ref={timeRef}>2024-01-01 01-03</TimeText>
      </HeroOverlay>
      <HeroVideo autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </HeroVideo>
      <audio src={song} autoPlay loop>
        Your browser does not support the audio element.
      </audio>
    </HeroContainer>
  );
}

export default Hero; // Export with the corrected name
