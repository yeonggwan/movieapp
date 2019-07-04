import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 600px) {
    padding-bottom: 40px;
    div {
      grid-template-columns: repeat(auto-fill, 140px);
      grid-gap: 15px;
      a {
        margin-top: 50px;
        &:nth-child(1),
        &:nth-child(2) {
          margin-top: 0;
        }
        div {
          height: 200px;
        }
      }
    }
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-gap: 30px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
