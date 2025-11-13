export type ApplicationSliderData = {
  title: string;
  body: string;
  bubbleId: string;
};

export const applicationSliderData: ApplicationSliderData[] = [
  {
    title: "credit card with one of your relatives",
    body: "so they can buy an airline ticket to come see you",
    bubbleId: "top",
  },
  {
    title: "home address with close friends",
    body: "no more returned undeliverable letters and packages",
    bubbleId: "top-right",
  },
  {
    title: "legal documents with your attorney",
    body: "without using email that hackers can read",
    bubbleId: "top-left",
  },

  {
    title: "medical history with your doctor or nutritionist",
    body: "without having to type it all in over and over",
    bubbleId: "right",
  },
  {
    title:
      "parent’s health insurance info, and list of care givers with your siblings",
    body: "so they can help organize doctor's visits",
    bubbleId: "left",
  },
  {
    title:
      "child’s contact info with other parents to coordinate after-school activities",
    body: "without exposing your child’s information to anyone else",
    bubbleId: "bottom-right",
  },
];

export const applicationSliderBubbles = [
  {
    id: "left",
    url: "./images/application-slider/close-friends.png",
    x: "",
    y: "",
    transformOrigin: "right",
  },
  {
    id: "top-left",
    url: "./images/application-slider/partner.png",
    x: "",
    y: "",
    transformOrigin: "bottom right",
  },
  {
    id: "top",
    url: "./images/application-slider/business-partner.png",
    x: "",
    y: "",
    transformOrigin: "bottom",
  },
  {
    id: "top-right",
    url: "./images/application-slider/parents.png",
    x: "",
    y: "",
    transformOrigin: "bottom left",
  },
  {
    id: "right",
    url: "./images/application-slider/sibling.png",
    x: "",
    y: "",
    transformOrigin: "left",
  },
  {
    id: "bottom-right",
    url: "./images/application-slider/health-care.png",
    x: "",
    y: "",
    transformOrigin: "top left",
  },
  {
    id: "bottom",
    url: "./images/application-slider/community.png",
    x: "",
    y: "",
    transformOrigin: "top",
  },
  {
    id: "bottom-left",
    url: "./images/application-slider/child.png",
    x: "",
    y: "",
    transformOrigin: "top right",
  },
];

export type MobileApplicationSliderData = {
  title: string;
  body: string;
  imageUrl: string;
};

export const mobileApplicationData = applicationSliderData.map((x) => {
  const bubble = applicationSliderBubbles.find((b) => b.id === x.bubbleId);

  return {
    title: x.title,
    body: x.body,
    imageUrl: bubble ? bubble.url : "",
  };
});
