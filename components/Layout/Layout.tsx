import React, { useEffect, useState } from "react";
import * as Styles from "./Layout.style";
import { useRouter } from "next/router";

const Layout = (props: any) => {
    const router = useRouter();

    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

    useEffect(() => {
        const newBreadcrumb = router.pathname.split("/");
        setBreadcrumb(newBreadcrumb);
    }, []);

    return (
        <Styles.Wrapper>
            <div className="heading-wrapper">
                <div className="heading">{props.children[0]}</div>
                <div className="breadcumbs">
                    {breadcrumb.map((item: string, index: number) => {
                        return (
                            <span key={index}>
                                {item}
                                {index !== breadcrumb.length - 1 && (
                                    <span>/</span>
                                )}
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className="content">
                {props.children.slice(1).map((child: any) => {
                    return child;
                })}
            </div>
        </Styles.Wrapper>
    );
};

export default Layout;
