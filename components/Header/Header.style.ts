import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import { color, fontSize, space, width } from "styles/functions";

export const Wrapper = styled(motion.header)`
    z-index: 10;
    top: 0;
    left: 0;
    position: fixed;
    padding: 2rem 0;
    height: min-content;
    width: 100%;
    display: flex;
    justify-content: center;
    /* border-bottom: solid red 1px; */
    background-color: ${color("light", 0.7)};
    backdrop-filter: blur(40px);
`;

export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${width("max")};
`;

export const Navbar = styled.nav`
    flex-grow: 1;
    align-items: center;
    list-style: none;
    display: flex;
    justify-content: center;
    li {
        color: black;
        &.active {
            color: ${color("accent")};
        }
        transition: all 0.3s ease-in-out;
        padding: 10px 20px;
        &:hover {
            cursor: pointer;
            border-radius: 6px;
            background-color: #fde9e1;
            color: black;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const NavItem = styled(Link)``;
