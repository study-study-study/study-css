import styled from "styled-components";

export const Area = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    background: #efefef;
    margin: 0 auto;
    padding: 12px 20px;
    max-width: 1040px;
  }
`;

export const Items = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 0.75rem;
  color: #747474;
  &:after {
    padding: 0 5px;
    font-family: "Font awesome 5 Free";
    font-weight: 900;
    content: "\f105";
  }
`;
