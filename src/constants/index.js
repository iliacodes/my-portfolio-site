import {
  blockchain,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  postgresql,
  git,
  solidity,
  ethersJS,
  hardhat,
  pinata,
  moonshot,
  blockify,
  nft,
  moralis, 
  lighthouse,
  AU,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ethersJS",
    icon: ethersJS,
  },
  {
    name: "hardhat",
    icon: hardhat,
  },
  {
    name: "pinata",
    icon: pinata,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "Blockify",
    icon: blockify,
  }

];

const experiences = [
  {
    title: "Education",
    company_name: "Moralis, Coursera",
    icon: moralis,
    iconBg: "#383E56",
    date: "Q3 2022",
    points: [
      "Moralis",
      "Defi 101, Ethereum 101, Cryptography & Privacy Coins, Bitcoin and Blockchain 101, Bitcoin Monetary Revolution",
      "Coursera",
      "Version Control, Programming with Javascript, Introduction to Front-End Development."
    ],
  },
  {
    title: "Bootcamp",
    company_name: "Lighthouse Labs",
    icon: lighthouse,
    iconBg: "#E6DEDD",
    date: "Q4 2022, Q1 2023",
    points: [
      "Front-end Development: Lighthouse Labs taught me the fundamentals of front-end web development, including HTML, CSS, and JavaScript.",
      "Back-end Development: The bootcamp also covered server-side programming languages and frameworks like Node.js and Ruby on Rails.",
      "Full-Stack Integration: Lighthouse Labs bootcamp taught me how to integrate the front-end and back-end of web applications to create a cohesive user experience.",
    ],
  },
  {
    title: "Bootcamps #2 #3",
    company_name: "Alchemy University",
    icon: AU,
    iconBg: "#383E56",
    date: "Q2 2023 - Present",
    points: [
      "Learning the basics of Solidity, Hardhat, EthersJS, Pinata, and other related technologies.",
      "Developing web applications using React.js Solidity.",
      "Focus on creation of NFT's and writing smart contracts.",
      "Alchemy University Bootcamp.",
      "Encode Solidity Bootcamp."
    ],
  },
];

const projects = [
  {
    name: "Blockify",
    description:
      "A music sharing dApp built on Goerli and deployed on repl. Utilizing skills learned with Etherjs, this app connects the webpage to the blockchain allowing users to share music, and if they're lucky, wins some ETH. 90 min cooldown applied.",
    image: blockify,
    source_code_link: "https://github.com/iliacodes/blockify",
  },
  {
    name: "Moonshot NFT",
    description:
    "An Nft created to randomize moonboy NFT words for motivation.",
    image: nft,
    source_code_link: "https://github.com/iliacodes/MoonShot-NFT",
  },
  {
    name: "Moonshot",
    description:
      "Web application that enables users search for and track NFT's, Crpto, and Stocks all in one place. Users can also create their own watchlists to track their their specific assets.",
    image: moonshot,
    source_code_link: "https://github.com/iliacodes/MoonShot",
  },
];

export { technologies, experiences, projects };