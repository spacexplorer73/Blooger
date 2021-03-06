import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { FaTimes } from "react-icons/fa"

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #438d80;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;

    &:hover {
        color: #333;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 3rem;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: lfr;
    grid-template-rows: repeat(6 80px);
    text-align: center;
    padding: 4rem 0;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6 60px);
    }

`

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    padding: 30px 0;
    cursor: pointer;

    &:hover {
        color: #333;
        tranistion: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #53c4af;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #010606;


    }
`