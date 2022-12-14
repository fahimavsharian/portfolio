import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import HeadingText from "../HeadingText";
import Kyokai from "./Kyokai";
import Lisn from "./Lisn";
import KSig from "./KSig";

const Wrapper = styled.div`
  /* background-color: purple; */
  height: 100%;
  width: 100%;
  position: relative;
`;

const Container = styled.div`
  /* border: 2px solid orange; */
  /* background-color: aliceblue; */
  width: min(100%, 1200px);
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.colors.orange};
  width: max(100vw, 700px);
  height: max(200vh, 1600px);
  top: 250px;
  right: 20vw;
  position: absolute;
  z-index: -3;
  overflow: hidden;

  ${(props) => props.theme.sizes.tablet} {
    right: 10vw;
  }

  ${(props) => props.theme.sizes.mobile} {
    right: 20vw;
  }
`;

const Work = () => {
  return (
    <Wrapper id="work">
      <Container>
        <Box
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
        <HeadingText text="Work & Project" />
        <Kyokai />
        <Lisn />
        <KSig />
      </Container>
    </Wrapper>
  );
};

export default Work;
