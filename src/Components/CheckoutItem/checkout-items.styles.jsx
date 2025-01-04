import styled from "styled-components";

export const CheckoutlistItem = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`
export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`
export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`
export const CheckoutItemName = styled.span`
  width: 23%;
`
export const CheckoutItemQuantity = styled.span`
  width: 23%;
  display: flex;
  align-items: center;
  `
export const CheckoutItemPrice = styled.span`
  width: 23%;
`
export const CheckoutArrow = styled.div`
  cursor: pointer;
  padding: 0 .5rem;
`
export const CheckoutValue = styled.span`
  margin: 0 10px;
`
export const CheckoutRemoveButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: .5rem;
  font-weight: 700;
  font-size: 1rem;
`


/*
.checkout-item-container {
  width: 100%;
  display: flex;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  list-style: none;
  margin: 0;
  flex-direction: column;
  gap: 1rem;

  .checkout-item{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .image-container {
      width: 23%;
      padding-right: 15px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .name,
    .quantity,
    .price {
      width: 23%;
    }

    .quantity {
      display: flex;

      .arrow {
        cursor: pointer;
        padding: 0 .5rem;
      }

      .value {
        margin: 0 10px;
      }
    }

    .remove-button {
      cursor: pointer;
      background: transparent;
      border: none;
      padding: .5rem;
      font-weight: 700;
      font-size: 1rem;
    }
  }
  }

*/
