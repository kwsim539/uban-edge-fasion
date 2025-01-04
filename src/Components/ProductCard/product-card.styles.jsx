import styled from "styled-components";



export const ProductCardMedia = styled.div`
    margin: 0 0 .5rem 0;
    order: -1;
    position: relative;
    overflow: hidden;
    height: fit-content;
    width: 100%;
    display: inline-block;
    & img {
        aspect-ratio: 3/4;
        inline-size: 100%;
        block-size: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
        border: none;
    }
    & button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        bottom: 20px;
        display: none;
        left: 10%;
    }
`;

export const ProductCardFooter = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 0 1rem;
`;

export const ProductCardName = styled.div`
    //margin-bottom: 15px;
`;

export const ProductCardPrice = styled.div`
    //margin-bottom: 15px;
`;

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 550px;
    align-items: center;
    position: relative;
    &:hover {
        img {
            opacity: 0.8;
        }
        button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

/*
.product-card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .media{
    margin: 0 0 .5rem 0;
    order: -1;
    position: relative;
    overflow: hidden;
    height: fit-content;
    width: 100%;
    display: inline-block;

    img {
      aspect-ratio: 4/3;
      inline-size: 100%;
      block-size: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center center;
      border: none;
    }

  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 20px;
    display: none;
    left: 10%;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  .footer {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 0 1rem;

    .name {
      //margin-bottom: 15px;
    }

    .price {

    }
  }
}
*/
