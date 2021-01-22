import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContentWrapper from '../styles/contentWrapper';

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ___Section___ = ({ content }) => {
  // Extract GraphQL data
  const sectionDetails = content[0].node;

  return (
    <StyledSection id="___SectionHashId___">
      <StyledContentWrapper>
        <h3>___SectionTitle___</h3>
      </StyledContentWrapper>
    </StyledSection>
  );
};

___Section___.propTypes = {
  content: PropTypes.any.isRequired
};

export default ___Section___;
