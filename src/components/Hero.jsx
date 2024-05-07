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
  max-width: 1200px;
  object-fit: contain;
  object-position: center;

  @media (max-width: 768px) {
    scale: 1.515;

    margin-top: -20%;
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
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 16px;
  color: white;
  text-align: left;

  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: 8px;
  }
`;

const TimeText = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 16px;
  color: white;
  text-align: start;
  margin-top: 20px;
  margin-left: 16px;
  top: 0;
  right: 0;
  display: flex !important;
  flex-direction: row;

  align-items: end;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    margin-top: -1px;
    font-size: 1rem;
    letter-spacing: 8px;
    margin-left: 8px;
    margin-bottom: 8px;
    white-space: nowrap;
  }
`;

const PressButton = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 16px;
  color: white;
  text-align: start;
  margin-top: 20px;

  top: 0;
  right: 0;

  padding: 16px 30px 16px 24px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    flex-direction: column;
    padding: 20px 30px 20px 24px;
    white-space: nowrap;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  margin-left: 36px;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    margin-left: 16px;
  }
`;

const TextPt1Container = styled.div`
  display: flex !important;
  justify-content: start;
`;

function Hero() {
  // Rename to 'Hero' with uppercase 'H'

  const heroRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const timeRef = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(heroRef.current, {
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.inOut",
      delay: 0.2,
    });

    //make a gsap animation with the splittype and the textRef.current
    // Split the text
    const split1 = new SplitType(text1Ref.current, { types: "words, chars" });
    const split2 = new SplitType(text2Ref.current, { types: "words, chars" });
    const split3 = new SplitType(timeRef.current, { types: "words, chars" });
    // GSAP animation for the split text
    tl.from(
      split1.chars,
      {
        duration: 0.4,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.2, // Adjust delay to sync with overlay animation
      },
      "<",
    );
    tl.from(
      split2.chars,
      {
        duration: 0.4,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.2, // Adjust delay to sync with overlay animation
      },
      "<",
    );

    tl.from(
      split3.chars,
      {
        duration: 0.4,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.2, // Adjust delay to sync with overlay animation
      },
      "<",
    );
  }, []);
  return (
    <HeroContainer>
      <HeroOverlay ref={heroRef}>
        <HeroTextContainer>
          <TextPt1Container>
            <HeroText ref={text1Ref}>The</HeroText>
            <TimeText ref={timeRef}>2024-05-18</TimeText>
          </TextPt1Container>
          <HeroText ref={text2Ref}>Appointment</HeroText>
        </HeroTextContainer>
      </HeroOverlay>
      <HeroVideo autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </HeroVideo>
    </HeroContainer>
  );
}

export default Hero; // Export with the corrected name
