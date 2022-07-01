import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --height: 100vh;
        --width: 100vw;
        --ff-serif: 'Cormorant Upright', 'Merriweather', Georgia, serif;
        --ff-sans:'Varela Round',Verdana, Geneva, Tahoma, sans-serif;
        --clr-dark: 0 0% 9%;
        --clr-light: 26 100% 97%;
        --clr-accent: 8 79% 72%;
    }

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}
	body,
	h1,
	h2,
	h3,
	h4,
	h6,
	p,
	figure,
	picture {
		margin: 0;
	}
	h1,
	h2,
	h3,
	h4,
	h6{
        font-family:var(--ff-serif);
    }
	


	body {
        font-family: var(--ff-sans);
		min-height: 100vh;
        background-color: hsl(var(--clr-light));
	}


	img,
	picture {
		max-width: 100%;
		display: block;
	}


	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	@media (prefers-reduced-motion: reduce) {
		*,
		*::after,
		*::before {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}
    #__next{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: fit-content;
        background-color: hsl(var(--clr-light));
        padding-top: 105px;
    }
`;

export default GlobalStyle;

// units are in rems
// colors are in hsl
export const theme = {
    colors: {
        dark: "0 0% 9%",
        light: "26 100% 97%",
        accent: "8 79% 72%",
    },
    space: {
        xs: 0.25,
        sm: 0.5,
        md: 1,
        lg: 2,
        xl: 4,
        xxl: 8,
    },
    font: {
        size: {
            xxsm: 0.875,
            xsm: 1.5,
            sm: 1.875,
            md: 2.25,
            lg: 3,
            xl: 4,
            xxl: 7.6875,
            xxxl: 15.9375,
        },
        family: {
            sans: "'Varela Round',Verdana, Geneva, Tahoma, sans-serif",
            serif: "'Cormorant Upright', 'Merriweather', Georgia, serif",
        },
        weight: {
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
        },
    },
    size: {
        width: {
            base: "100%",
            small: "200px",
            large: "500px",
            xlarge: "800px",
            max: "1320px",
        },
        height: {
            base: "100%",
            small: "200px",
            large: "500px",
            xlarge: "800px",
        },
    },
};
