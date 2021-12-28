import styled from "styled-components";

export const Col = styled.div`
  padding: 20px;
  height: 100vh;
  &.rootbox {
    background: #ebedef;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .about-summery {
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      padding-top: 150px;
      p {
        font-size: 15px;
        color: #839192;
        line-height: 1.5;
      }
    }
    .about-header {
      margin-bottom: 100px;
    }
  }
  &.search-result {
    /* background: #4593ab; */
    width: 50%;
    color: #fff;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  color: #666;
`;
