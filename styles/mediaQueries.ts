const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "430px",
    tablet: "834px",
    laptop: "1280px",
    laptopL: "1440px",
    desktop: "2560px",
};
const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};

export { device, size };
