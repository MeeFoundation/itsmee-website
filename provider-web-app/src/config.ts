export const meeFoundation = "https://mee.foundation/";
export const github =
  "https://github.com/MeeFoundation/private-advertising-website";
export const discord = "https://discord.gg/PB8qxrQXup";
export const header = {
  logoLink: meeFoundation,
  links: [],
  rightLinks: [
    {
      name: "Join us",
      link: discord,
      icon: "discord",
      target: "_blank",
      id: "discord",
    },
  ],
  footerLinks: [
    {
      name: "About us",
      link: `${meeFoundation}about/`,
      id: "about",
    },
    {
      link: `${meeFoundation}privacy-policy/`,
      name: "Privacy",
      id: "privacy-policy",
    },
  ],
  authLinks: [
    {
      name: "Log in",
      link: "/#sign-in",
      style: "outlined",
      id: "sign-in",
      buttonType: "primary",
    },
    {
      name: "Sign up",
      link: "/#sign-up",
      style: "filled",
      id: "sign-up",
      buttonType: "primary",
      className: "hidden md:flex",
    },
  ],
};
export const footer = {
  links: [
    {
      link: "https://x.com/mee_foundation",
      icon: "twitter-x",
      target: "_blank",
    },
    {
      link: github,
      icon: "github",
      target: "_blank",
    },
    {
      link: discord,
      icon: "discord",
      target: "_blank",
    },
  ],
  rightLinks: [
    {
      name: "About us",
      link: `${meeFoundation}about/`,
      id: "about",
    },
    {
      link: `${meeFoundation}privacy-policy/`,
      name: "Privacy",
      id: "privacy-policy",
    },
  ],
};

export type EnvType = "local" | "prod";

export const getAppEnv = (): EnvType => {
  if (typeof window !== "undefined") {
    const currentHost = window.location.hostname;
    if (/.*localhost.*/.test(currentHost)) {
      return "local";
    } else {
      return "prod";
    }
  } else {
    return "prod";
  }
};

export interface AppConfig {
  type: "local" | "prod";
  backendUrl: string;
  cookieDomain: string;
}

const localConfig: AppConfig = {
  type: "local",
  backendUrl: "http://localhost:8000",
  cookieDomain: "localhost",
};

const prodConfig: AppConfig = {
  type: "prod",
  backendUrl: "http://localhost:8000",
  cookieDomain: ".itsmee.org",
};

const getConfig = (): AppConfig => {
  const env = getAppEnv();
  switch (env) {
    case "local":
      return localConfig;
    case "prod":
      return prodConfig;
    default:
      throw new Error("Unknown env was used in app configuration");
  }
};

export default {
  ...getConfig(),
};
