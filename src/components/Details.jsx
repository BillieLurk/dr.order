import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100svh;
  background-color: black;
  border-top: 1px solid white;
  margin: 0 22px 0 22px;
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  @media (max-width: 768px) {
    margin: 0 12px 0 12px;
  }
`;

const INFO = styled.h1`
  font-size: 64px;
  letter-spacing: 16px;
  margin: 0;
  padding: 0;
  padding-bottom: 60px;
  padding-top: 30px;
  @media (max-width: 768px) {
    font-size: 32px;
    letter-spacing: 8px;
  }
`;

const Devider = styled.div`
  border-top: 1px solid white;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Link = styled.a`
  text-underline-offset: 3px;
  color: white;
`;

const ItemContainer = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 40px;
  @media (max-width: 768px) {
  font-size: 24px;
    }
}
`;

const Content = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

const Details = () => {
  return (
    <Wrapper>
      <INFO>INFO</INFO>
      <ItemContainer>
        <Title>WHERE?</Title>
        <Content>
          <Link href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x465f78265e7eb5a9:0x17a4f4e04d1fa759?sa=X&ved=1t:8290&ictx=111">
            Slakthusgatan 6, 121 62 Johanneshov
          </Link>
          <p>Rooftop/indoor depending on the weather</p>
        </Content>
      </ItemContainer>
      <ItemContainer>
        <Title>WHEN?</Title>
        <Content>
          05/18 @ 18:00-03:00
          <p>
            save this website to remains up-to-date by saving it whenever occur
          </p>
        </Content>
      </ItemContainer>
      <ItemContainer>
        <Title>RSVP/OSA?</Title>
        <Content>
          <Link href="https://forms.gle/TkkUuNCFtVF8Wyny9">HERE!</Link>{" "}
          <span style={{ marginLeft: "0.0rem" }}>A GOOGLE FORM!</span>
        </Content>
      </ItemContainer>

      <ItemContainer>
        <Title>LINE-UP</Title>
        <Content>18-20 STRÖM B2B DR</Content>
        <Content>22-23 ENDARKENMENT</Content>
        <Content>23-00 GL0RY</Content>
        <Content>00-01 STRÖM</Content>
        <Content>01-02 H-Field</Content>
        <Content>02-03 ELIS KRÖGER</Content>
      </ItemContainer>
    </Wrapper>
  );
};

export default Details;
