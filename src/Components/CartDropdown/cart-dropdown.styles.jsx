import styled from "styled-components";

import {Basebutton, GoogleSignInButton, InvertedButton} from "../Button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    ${Basebutton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      margin-top: auto;
    }
`;
export const CartItems = styled.ul`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    list-style: none;
    margin: 0;
    padding: 0;
`;
export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

