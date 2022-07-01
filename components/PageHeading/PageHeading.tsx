import * as Styles from "./PageHeading.style";

const PageHeading = ({ heading }: { heading: string }) => {
    return (
        <Styles.HeadingWrapper>
            <h2 className="heading">{heading}</h2>
            <div className="line-wrapper">
                <svg
                    className="line"
                    xmlns="http://www.w3.org/2000/svg"
                    width="298"
                    height="32"
                    viewBox="0 0 298 32"
                    fill="none"
                >
                    <path
                        d="M1 17.1944C62.6418 7.28318 174.478 -8.49028 296 27"
                        stroke="#F6BFB3"
                        strokeWidth="9"
                    />
                </svg>
            </div>
        </Styles.HeadingWrapper>
    );
};

export default PageHeading;
