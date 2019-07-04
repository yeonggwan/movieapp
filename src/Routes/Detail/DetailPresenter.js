import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const Cover = styled.div`
  width: 30%;
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    display: block;
    width: 70%;
    margin: 0 auto;
  }
`;

const CoverImg = styled.img`
  width: 100%;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 30px 0 0 0;
    padding-bottom: 40px;
    h3 {
      font-size: 20px;
      font-weight: 600;
    }
    div {
      margin: 10px 0 15px 0;
    }
    p {
      width: 100%
      margin-bottom: 20px;
    }
  }
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
`;

const ProductionBox = styled.div`
  width: 70%;
  margin-top: 30px;
  padding: 20px 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    width: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 31%;
        margin: 0 3.5% 20px 0;
        :nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
`;

const ProductionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const Production = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ProductionList = styled.li`
  width: 10%;
  margin-right: 1.1111111%;
  &:nth-child(5n) {
    margin-right: 0;
  }
  font-size: 16px;
  color: #000;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductionLogo = styled.img`
  width: 100%;
`;

const SeasonBox = styled(ProductionBox)``;

const SeasonTitle = styled(ProductionTitle)``;

const Season = styled(Production)`
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
  @media screen and (max-width: 600px) {
    justify-content: space-between;
    li {
      width: 47.5%;
      margin-bottom: 20px;
    }
  }
`;

const SeasonList = styled(ProductionList)`
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 18.4%;
  margin-right: 2%;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const SeasonImg = styled(ProductionLogo)``;

const SubTitle = styled.p`
  margin: 7px 0 5px 0;
  font-size: 12px;
  text-align: left;
`;

const SubYear = styled.p`
  color: white;
  font-weight: 400;
  font-size: 10px;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | MovieApp</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | MovieApp</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover>
          <CoverImg
            src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
          />
        </Cover>
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {result.production_companies &&
            result.production_companies.length > 0 && (
              <ProductionBox>
                <ProductionTitle>제작회사</ProductionTitle>
                <Production>
                  {result.production_companies.map(logo => (
                    <ProductionList key={logo.id}>
                      {logo.logo_path ? (
                        <ProductionLogo
                          src={`https://image.tmdb.org/t/p/w200${
                            logo.logo_path
                          }`}
                          alt={logo.name}
                          title={logo.name}
                        />
                      ) : (
                        logo.name
                      )}
                    </ProductionList>
                  ))}
                </Production>
              </ProductionBox>
            )}
          {result.seasons && result.seasons.length > 0 && (
            <SeasonBox>
              <SeasonTitle>제작회사</SeasonTitle>
              <Season>
                {result.seasons.map(season => (
                  <SeasonList key={season.id}>
                    {season.poster_path ? (
                      <SeasonImg
                        src={`https://image.tmdb.org/t/p/w200${
                          season.poster_path
                        }`}
                        alt={season.name}
                        title={season.name}
                      />
                    ) : (
                      <SeasonImg
                        src={require("../../Components/assets/noPosterSmall.png")}
                        alt={season.name}
                        title={season.name}
                      />
                    )}
                    <SubTitle>{season.name}</SubTitle>
                    <SubYear>
                      {season.air_date
                        ? season.air_date.substring(0, 4)
                        : "Unknown"}
                    </SubYear>
                  </SeasonList>
                ))}
              </Season>
            </SeasonBox>
          )}
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
