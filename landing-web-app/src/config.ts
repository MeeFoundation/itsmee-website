export const appLink = "https://app.itsmee.org/";
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
      ariaLabel: "Discord",
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
      link: `${appLink}#sign-in`,
      style: "outlined",
      id: "sign-in",
      buttonType: "primary",
    },
    {
      name: "Sign up",
      link: `${appLink}#sign-up`,
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
      ariaLabel: "X",
    },
    {
      link: github,
      icon: "github",
      target: "_blank",
      ariaLabel: "Github",
    },
    {
      link: discord,
      icon: "discord",
      target: "_blank",
      ariaLabel: "discord",
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
