import React, { useEffect, useRef, useState } from "react";
import { MyCustomCSS } from "../..";
import Link from "next/link";
import { useRouter } from "next/router";

import * as Styles from "./Header.style";

const Header = () => {
    const router = useRouter();
    const ref = useRef() as React.MutableRefObject<HTMLElement>;

    useEffect(() => {
        const handleScroll = () => {
            if (ref) {
                if (ref.current.getBoundingClientRect().top < 0) {
                    ref.current.classList.add("hide");
                } else {
                    ref.current.classList.remove("hide");
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Styles.Wrapper ref={ref}>
            <Styles.NavWrapper>
                <div className="logo">
                    <h1>Shankshipt</h1>
                </div>
                <Styles.Navbar>
                    <li className={router.asPath == "/" ? "active" : ""}>
                        <Styles.NavItem href="/">Home</Styles.NavItem>
                    </li>
                    <li className={router.asPath == "/about" ? "active" : ""}>
                        <Styles.NavItem href="/about">About</Styles.NavItem>
                    </li>
                    <li className={router.asPath == "/stories" ? "active" : ""}>
                        <Styles.NavItem href="/stories">Stories</Styles.NavItem>
                    </li>
                    <li className={router.asPath == "/archive" ? "active" : ""}>
                        <Styles.NavItem href="/archive">Archive</Styles.NavItem>
                    </li>
                    <li className={router.asPath == "/contact" ? "active" : ""}>
                        <Styles.NavItem href="/contact">Contact</Styles.NavItem>
                    </li>
                </Styles.Navbar>
                <div>search</div>
            </Styles.NavWrapper>
        </Styles.Wrapper>
    );
};

export default Header;
