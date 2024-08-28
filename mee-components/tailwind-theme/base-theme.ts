import { merge } from "lodash-es";
import defaultConfig from "tailwindcss/defaultConfig";
import defaultTheme from "tailwindcss/defaultTheme";
import { X } from "../dist/server/chunks/astro/assets-service_DN71SLHP.mjs";

interface Opacity {
  opacityValue?: string;
}
function withOpacity(variableName: string) {
  return ({ opacityValue }: Opacity) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

const theme = {
  extend: merge({
    colors: {
      ...defaultConfig.theme?.extend?.colors,
      brand: {
        "50": "rgb(var(--color-brand-50) / <alpha-value>)",
        "100": "rgb(var(--color-brand-100) / <alpha-value>)",
        "200": "rgb(var(--color-brand-200) / <alpha-value>)",
        "300": "rgb(var(--color-brand-300) / <alpha-value>)",
        "400": "rgb(var(--color-brand-400) / <alpha-value>)",
        "500": "rgb(var(--color-brand-500) / <alpha-value>)",
        "600": "rgb(var(--color-brand-600) / <alpha-value>)",
        "700": "rgb(var(--color-brand-700) / <alpha-value>)",
        "800": "rgb(var(--color-brand-800) / <alpha-value>)",
        "900": "rgb(var(--color-brand-900) / <alpha-value>)",
        "950": "rgb(var(--color-brand-950) / <alpha-value>)",
      },
      grey: {
        "50": "rgb(var(--color-grey-50) / <alpha-value>)",
        "100": "rgb(var(--color-grey-100) / <alpha-value>)",
        "200": "rgb(var(--color-grey-200) / <alpha-value>)",
        "300": "rgb(var(--color-grey-300) / <alpha-value>)",
        "400": "rgb(var(--color-grey-400) / <alpha-value>)",
        "500": "rgb(var(--color-grey-500) / <alpha-value>)",
        "600": "rgb(var(--color-grey-600) / <alpha-value>)",
        "700": "rgb(var(--color-grey-700) / <alpha-value>)",
        "800": "rgb(var(--color-grey-800) / <alpha-value>)",
        "900": "rgb(var(--color-grey-900) / <alpha-value>)",
        "950": "rgb(var(--color-grey-950) / <alpha-value>)",
      },
      error: {
        "50": "rgb(var(--color-error-50) / <alpha-value>)",
        "100": "rgb(var(--color-error-100) / <alpha-value>)",
        "200": "rgb(var(--color-error-200) / <alpha-value>)",
        "300": "rgb(var(--color-error-300) / <alpha-value>)",
        "400": "rgb(var(--color-error-400) / <alpha-value>)",
        "500": "rgb(var(--color-error-500) / <alpha-value>)",
        "600": "rgb(var(--color-error-600) / <alpha-value>)",
        "700": "rgb(var(--color-error-700) / <alpha-value>)",
        "800": "rgb(var(--color-error-800) / <alpha-value>)",
        "900": "rgb(var(--color-error-900) / <alpha-value>)",
        "950": "rgb(var(--color-error-950) / <alpha-value>)",
      },
      warning: {
        "50": "rgb(var(--color-warning-50) / <alpha-value>)",
        "100": "rgb(var(--color-warning-100) / <alpha-value>)",
        "200": "rgb(var(--color-warning-200) / <alpha-value>)",
        "300": "rgb(var(--color-warning-300) / <alpha-value>)",
        "400": "rgb(var(--color-warning-400) / <alpha-value>)",
        "500": "rgb(var(--color-warning-500) / <alpha-value>)",
        "600": "rgb(var(--color-warning-600) / <alpha-value>)",
        "700": "rgb(var(--color-warning-700) / <alpha-value>)",
        "800": "rgb(var(--color-warning-800) / <alpha-value>)",
        "900": "rgb(var(--color-warning-900) / <alpha-value>)",
        "950": "rgb(var(--color-warning-950) / <alpha-value>)",
      },
      success: {
        "50": "rgb(var(--color-success-50) / <alpha-value>)",
        "100": "rgb(var(--color-success-100) / <alpha-value>)",
        "200": "rgb(var(--color-success-200) / <alpha-value>)",
        "300": "rgb(var(--color-success-300) / <alpha-value>)",
        "400": "rgb(var(--color-success-400) / <alpha-value>)",
        "500": "rgb(var(--color-success-500) / <alpha-value>)",
        "600": "rgb(var(--color-success-600) / <alpha-value>)",
        "700": "rgb(var(--color-success-700) / <alpha-value>)",
        "800": "rgb(var(--color-success-800) / <alpha-value>)",
        "900": "rgb(var(--color-success-900) / <alpha-value>)",
        "950": "rgb(var(--color-success-950) / <alpha-value>)",
      },
      orange: {
        "50": "rgb(var(--color-orange-50) / <alpha-value>)",
        "100": "rgb(var(--color-orange-100) / <alpha-value>)",
        "200": "rgb(var(--color-orange-200) / <alpha-value>)",
        "300": "rgb(var(--color-orange-300) / <alpha-value>)",
        "400": "rgb(var(--color-orange-400) / <alpha-value>)",
        "500": "rgb(var(--color-orange-500) / <alpha-value>)",
        "600": "rgb(var(--color-orange-600) / <alpha-value>)",
        "700": "rgb(var(--color-orange-700) / <alpha-value>)",
        "800": "rgb(var(--color-orange-800) / <alpha-value>)",
        "900": "rgb(var(--color-orange-900) / <alpha-value>)",
        "950": "rgb(var(--color-orange-950) / <alpha-value>)",
        lighter: "#FCDCBB",
        light: "#F9B689",
        dark: "#8E764F",
      },
      purple: {
        "50": "rgb(var(--color-purple-50) / <alpha-value>)",
        "100": "rgb(var(--color-purple-100) / <alpha-value>)",
        "200": "rgb(var(--color-purple-200) / <alpha-value>)",
        "300": "rgb(var(--color-purple-300) / <alpha-value>)",
        "400": "rgb(var(--color-purple-400) / <alpha-value>)",
        "500": "rgb(var(--color-purple-500) / <alpha-value>)",
        "600": "rgb(var(--color-purple-600) / <alpha-value>)",
        "700": "rgb(var(--color-purple-700) / <alpha-value>)",
        "800": "rgb(var(--color-purple-800) / <alpha-value>)",
        "900": "rgb(var(--color-purple-900) / <alpha-value>)",
        "950": "rgb(var(--color-purple-950) / <alpha-value>)",
        light: "#8E4F85",
        DEFAULT: "#BC52AD",
        dark: "#764F8E",
      },
      transparent: "transparent",
      black02: "#00000020",
      primary: "rgb(var(--color-brand-500) / <alpha-value>)",
      black: {
        DEFAULT: "#000",
      },
      white: {
        DEFAULT: "#fff",
        trans70: "#ffffffb3",
      },
      gray: {
        philippine: "#90878F",
        light: "#767676",
        DEFAULT: "#4D4D4D",
        dark: "#444444",
        900: "#111827",
      },
      blue: {
        cadet: "#5299A3",
        sky: "#7ED9E7",
        DEFAULT: "#447F88",
        dark: "#4F668E",
      },
      yellow: {
        lighter: "#CBBC99",
        light: "#F9DF89",
        DEFAULT: "#FFDF80",
        dark: "#C5C05C",
      },
      green: {
        moss: "#858E4F",
        DEFAULT: "#668E4F",
      },
      brown: {
        spicy: "#8E564F",
      },
    },
    boxShadow: {
      ...defaultConfig.theme?.extend?.boxShadow,
      "1": "var(--shadow-1)",
      "1-strong": "var(--shadow-1-strong)",
      "2": "var(--shadow-2)",
      "2-strong": "var(--shadow-2-strong)",
      "3": "var(--shadow-3)",
      "3-strong": "var(--shadow-3-strong)",
      "4": "var(--shadow-4)",
      "4-strong": "var(--shadow-4-strong)",
      "5": "var(--shadow-5)",
      "5-strong": "var(--shadow-5-strong)",
      button: "var(--shadow-button)",
      "button-danger": "var(--shadow-button-danger)",
      "button-tertiary": "var(--shadow-button-tertiary)",
    },
    fontSize: {
      xxs: ["0.625rem", "0.875rem"],
      xl: ["1.25rem", "1.875rem"],
      "3xl": ["1.875rem", "2.5rem"],
      "4xl": ["2.25rem", "2.75rem"],
      "5xl": ["3rem", "3.75rem"],
      "7xl": ["4.5rem", "5rem"],
      "25xl": "6rem",
      meeBtn: ["22px", "26px"],
    },
    transitionDelay: {
      200: "200ms",
      400: "400ms",
      800: "800ms",
      1000: "1000ms",
      1200: "1200ms",
      1400: "1400ms",
      1600: "1600ms",
      1800: "1800ms",
      2000: "2000ms",
      2200: "2200ms",
    },
    lineHeight: {
      thick: "1.3",
    },
    fontFamily: {
      sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
      imperial: ["NYT Imperial", ...defaultTheme.fontFamily.sans],
    },
    letterSpacing: {
      "0.02": "0.005rem",
    },
    translate: {
      7.5: "1.875rem",
    },
    spacing: {
      ...defaultConfig.theme?.extend?.spacing,
      1.25: "0.313rem",
      1.75: "0.438rem",
      2.25: "0.563rem",
      3.75: "0.938rem",
      6.5: "1.625rem",
      7.5: "1.875rem",
      10.5: "2.625rem",
      12.5: "3.125rem",
      13: "3.25rem",
      13.5: "3.375rem",
      14.5: "3.625rem",
      15: "3.75rem",
      16.5: "4.125rem",
      17.25: "4.313rem",
      17.5: "4.375rem",
      21: "5.25rem",
      22.5: "5.625rem",
      23: "5.75rem",
      23.5: "5.875rem",
      24.25: "6.063rem",
      24.5: "6.125rem",
      25: "6.25rem",
      30: "7.5rem",
      33: "8.25rem",
      34.5: "8.625rem",
      35.5: "8.875rem",
      38.25: "9.563rem",
      42: "10.5rem",
      44.5: "11.125rem",
      45: "11.25rem",
      52.5: "13.125rem",
      58: "14.5rem",
      65: "16.25rem",
      73: "18.25rem",
      93.5: "23.375rem",
      100: "25rem",
      120: "30rem",
      125: "31.25rem",
      130: "32.5rem",
      135: "33.75rem",
      150: "37.5rem",
      167: "41.75rem",
      192: "48rem",
      480: "120rem",
      1250: "312.5rem",
      5000: "1250rem",
    },
    width: {
      ...defaultConfig.theme?.extend?.width,
      4.5: "1.125rem",
      "about-sm": "20.9375rem",
      about: "21.25rem",
      "about-lg": "16.75rem",
      160: "40rem",
      "6/25": "24%",
    },
    maxWidth: {
      ...defaultConfig.theme?.extend?.maxWidth,
      111: "27.75rem",
    },
    height: {
      ...defaultConfig.theme?.extend?.height,
      0.75: "0.188rem",
    },
    gap: {
      ...defaultConfig.theme?.extend?.gap,
      18.5: "4.625rem",
      50.5: "12.625rem",
    },
    backgroundImage: {
      ...defaultConfig.theme?.extend?.backgroundImage,
      "primary-gradient": "var(--primary-gradient)",
      "primary-gradient-hover": "var(--primary-gradient-hover)",
    },
    zIndex: {
      70: "70",
      100: "100",
      200: "200",
      300: "300",
      999: "999",
    },
    borderRadius: {
      8.5: "2.125rem",
      "1/2": "50%",
      "2.5xl": "20px",
    },
    transitionDuration: {
      400: "400ms",
      800: "800ms",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      riseIn: {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" },
      },
      riseOut: {
        "0%": { transform: "translateY(-100%)" },
        "100%": { transform: "translateY(0)" },
      },
      riseLeft: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
      riseRight: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0)" },
      },
      collapse: {
        "0%": { transform: "scale(1)" },
        "100%": { transform: "scale(0)" },
      },
      collapse3d: {
        "0%": { transform: "scale3d(1,1,1)" },
        "100%": { transform: "scale3d(0,0,0)" },
      },
      moveCard: {
        "0%": { opacity: 0, transform: "translateX(-50%)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
      },
      drawUnderline: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
      pulseArrow: {
        "0%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(6px)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      "riseIn-short": "riseIn 400ms ease-out both",
      riseIn: "riseIn 800ms ease-out both",
      "riseIn-long": "riseIn 1000ms ease-out both",
      "riseOut-short": "riseOut 400ms ease-out both",
      riseOut: "riseOut 800ms ease-out both",
      "riseOut-long": "riseOut 1000ms ease-out both",
      "riseLeft-short": "riseLeft 400ms ease-out both",
      riseLeft: "riseLeft 800ms ease-out both",
      "riseLeft-long": "riseLeft 1000ms ease-out both",
      "riseRight-short": "riseRight 400ms ease-out both",
      riseRight: "riseRight 800ms ease-out both",
      "riseRight-long": "riseRight 1000ms ease-out both",
      fadeIn: "fadeIn 400ms ease-in both",
      "fadeIn-long": "fadeIn 800ms ease-in both",
      fadeOut: "fadeOut 400ms ease-out both",
      drawUnderline: "drawUnderline 400ms linear both",
      "moveCard-short": "moveCard 400ms ease-out both",
      moveCard: "moveCard 800ms ease-out both",
      pulseArrow: "pulseArrow 800ms ease-out",
      "fadeIn-short": "fadeIn 250ms ease-in-out forwards",
      "fadeOut-short": "fadeOut 200ms ease-in-out forwards",
      "fadeOut-long": "fadeOut 1.5s ease-in-out forwards",
      collapse: "collapse 1.5s ease-in-out forwards",
      collapse3d: "collapse3d 1.5s ease-in-out forwards",
    },
    textColor: {
      skin: {
        "blog-base": withOpacity("--color-text-base"),
        "blog-accent": withOpacity("--color-accent"),
        "blog-inverted": withOpacity("--color-fill"),
      },
    },
    backgroundColor: {
      skin: {
        "blog-fill": withOpacity("--color-fill"),
        "blog-accent": withOpacity("--color-accent"),
        "blog-inverted": withOpacity("--color-text-base"),
        "blog-card": withOpacity("--color-card"),
        "blog-card-muted": withOpacity("--color-card-muted"),
      },
    },
    outlineColor: {
      skin: {
        "blog-fill": withOpacity("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        "blog-line": withOpacity("--color-border"),
        "blog-fill": withOpacity("--color-text-base"),
        "blog-accent": withOpacity("--color-accent"),
      },
    },
    fill: {
      skin: {
        "blog-base": withOpacity("--color-text-base"),
        "blog-accent": withOpacity("--color-accent"),
      },
      "blog-transparent": "transparent",
    },
  }),
};

export default theme;
