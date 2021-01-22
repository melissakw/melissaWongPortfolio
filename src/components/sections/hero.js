import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { motion, useAnimation } from 'framer-motion';

import Context from '../../context/';
import ContentWrapper from '../../styles/contentWrapper';
import Underlining from '../../styles/underlining';
import Social from '../social';
import SplashScreen from '../splashScreen';
import { lightTheme, darkTheme } from '../../styles/theme';

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 4rem;
    }
    .inner-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .name-text-color {
      background-image: linear-gradient(
        30deg,
        ${({ theme }) => theme.colors.tertiary} 0%,
        ${({ theme }) => theme.colors.secondary} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .wave {
      animation-name: hand-wave-animation;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      transform-origin: bottom;
      display: inline-block;
    }
    @keyframes hand-wave-animation {
      0% {
        transform: rotate(6deg);
      }
      10% {
        transform: rotate(15deg);
      }
      20% {
        transform: rotate(-6deg);
      }
      30% {
        transform: rotate(15deg);
      }
      40% {
        transform: rotate(-6deg);
      }
      50% {
        transform: rotate(8deg);
      }
      60% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
    .image-content {
      width: 100%;
      max-width: 18rem;
      margin-top: 4rem;
      margin-left: 0;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 2rem;
      }
    }
    .profile-image {
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
      filter: grayscale(20%) contrast(1) brightness(90%);
      transition: all 0.3s ease-out;
      &:hover {
        filter: grayscale(50%) contrast(1) brightness(90%);
        transform: translate3d(0px, -0.125rem, 0px);
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
      }
    }
  }
`;

const AnimatedUnderlining = motion.custom(Underlining);

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node;
  const { isIntroDone, darkMode } = useContext(Context).state;

  const gControls = useAnimation();
  const eControls = useAnimation();
  const sControls = useAnimation();
  const uControls = useAnimation();

  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 }
        });
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 }
        });
        await sControls.start({
          opacity: 1,
          x: 0
        });
        await uControls.start({
          boxShadow: `inset 0 -2rem 0 ${
            darkMode ? darkTheme.colors.secondary : lightTheme.colors.secondary
          }`,
          transition: { delay: 0.4, ease: 'circOut' }
        });
      }
    };
    pageLoadSequence();
  }, [isIntroDone, darkMode, eControls, gControls, sControls, uControls]);

  return (
    <StyledSection id="hero">
      {!isIntroDone && <SplashScreen />}
      <StyledContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gControls}
          data-testid="animated-heading"
        >
          <h1 className="title">
            <div className="greetings name-text-color">
              {frontmatter.greetings}
              <motion.div
                animate={eControls}
                style={{ originX: 0.7, originY: 0.7 }}
              >
                <Img
                  className="emoji wave"
                  fluid={frontmatter.icon.childImageSharp.fluid}
                />
              </motion.div>
            </div>
            {frontmatter.title}
          </h1>
          <h2 className="subtitle">
            {frontmatter.subtitlePrefix}{' '}
            <AnimatedUnderlining animate={uControls} big>
              {frontmatter.subtitle}
            </AnimatedUnderlining>
          </h2>
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={sControls}>
          <Social fontSize=".95rem" padding=".3rem 1.25rem" width="auto" />
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  );
};

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  ).isRequired
};

export default Hero;
