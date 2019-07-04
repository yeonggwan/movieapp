import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    div {
      grid-template-columns: repeat(auto-fit, 150px);
      grid-gap: 20px;
      a {
        margin-bottom: 50px;
        /* &:nth-child(1),
        &:nth-child(2) {
          margin-top: 0;
        } */
        div {
          height: 210px;
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
