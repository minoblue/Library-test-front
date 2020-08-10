import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  text-align: center;
  padding: 50px;
`;

export default ({ loadingInfo, style = {}, ...props }) => (
  <Loading style={{ ...style }}>
    <span>Loading</span>
  </Loading>
);
