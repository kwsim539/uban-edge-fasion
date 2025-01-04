import styled from "styled-components";

export const CategoryContainer = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); // 464px
  column-gap: .7rem;
  row-gap: .7rem;
  margin-bottom: 1rem;
  justify-content: center;
`;
export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
/*
.category-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); // 464px
  column-gap: .7rem;
  row-gap: .7rem;
  /!*padding: 0 0.5rem;*!/
  margin-bottom: 1rem;
  justify-content: center;
}*/
