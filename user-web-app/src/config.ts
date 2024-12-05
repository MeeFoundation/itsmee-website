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
}

const localConfig: AppConfig = {
  type: "local",
  backendUrl: "http://localhost:8000",
};

const prodConfig: AppConfig = {
  type: "prod",
  backendUrl: "http://localhost:8000",
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
  userLinks: true,
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
export default {
  ...getConfig(),
};
