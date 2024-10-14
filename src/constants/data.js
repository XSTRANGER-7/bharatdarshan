import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    virtualtour,
    roadmap2,
    roadmap3,
    roadmap4,
    roadmap5,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
    yourAi,
    yourSol,
    yourReact,
    yourNode,
    yourHard
  } from "../assets"; 

  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#roadmap",
    },
    // {
    //   id: "1",
    //   title: "Pricing",
    //   url: "#pricing",
    // },
    {
      id: "1",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "2",
      title: "Games",
      url: "#features",
    },
    {
      id: "3",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "4",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourHard, yourSol, yourReact, yourNode, yourAi];
  
  export const brainwaveServices = [
    "update soon",
    "update soon",
    "update soon",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Virtual Tour",
      text: "Gves you a virtual tour of the environment or the Historical place",
      date: "June 2024",
      status: "progress",
      imageUrl: virtualtour,
      colorful: true,
      // url: "https://space-jack-2d.vercel.app/",
    },
    {
      id: "1",
      title: "3D Models",
      text: "3D Models of the Historical place",
      date: "June 2024",
      status: "progress",
      imageUrl: roadmap2,
      url: "#login",
    },
    {
      id: "2",
      title: "Educational Content",
      text: "Educational Content for the Historical place",
      date: "June 2024",
      status: "progress",
      imageUrl: roadmap3,
      url: "#login",
    },
    {
      id: "3",
      title: "Earn NFT or Tokens through Games and Redeem in Market Place",
      text: "Tours Based Quizzes.",
      date: "June 2024",
      status: "progress",
      imageUrl: roadmap4,
      url: "https://quiz-blockchainn.vercel.app/",
    },
    {
      id: "4",
      title: "Mystery Box",
      text: "Random Quizzes will be asked.",
      date: "June 2024",
      status: "progress",
      imageUrl: roadmap5,
      url: "/game",
    },
  ];
  
  export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Ask anything",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Improve everyday",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Connect everywhere",
      text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    // {
    //   id: "3",
    //   title: "Fast responding",
    //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    //   backgroundUrl: "./src/assets/benefits/card-4.svg",
    //   iconUrl: benefitIcon4,
    //   imageUrl: benefitImage2,
    //   light: true,
    // },
    // {
    //   id: "4",
    //   title: "Ask anything",
    //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    //   backgroundUrl: "./src/assets/benefits/card-5.svg",
    //   iconUrl: benefitIcon1,
    //   imageUrl: benefitImage2,
    // },
    // {
    //   id: "5",
    //   title: "Improve everyday",
    //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    //   backgroundUrl: "./src/assets/benefits/card-6.svg",
    //   iconUrl: benefitIcon2,
    //   imageUrl: benefitImage2,
    // },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
  
  ];
  