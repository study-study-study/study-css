import React from "react";
import styled from "styled-components";

const StyledSample = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Sample: React.VFC = () => <StyledSample>Sample</StyledSample>;
