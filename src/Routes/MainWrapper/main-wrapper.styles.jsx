import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainHeader = styled.header`
    display: flex;
    padding: 1rem;
`
export const HeaderContainer = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const LogoWrapper = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 70px;
`
export const MainNav = styled.nav`
    display: flex;
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
`
export const NavItem = styled.li`
    display: flex;
    align-items: center;
`
export const NavLink = styled(Link)`
    padding: .7rem 1rem;
    cursor: pointer;
    text-transform: uppercase;
`
