const { modularizeImports } = require("../../next.config");

const about = {
    profesional: 'Certified Software Engineer with a strong track record of tackling various projects in fast-paced and challenging environments. Developed over 8 years of experience leading teams through unique problems and demanding customer scenarios. Created two custom full-stack web applications utilizing React, Express, Python, Flask, SQL, and many other technologies. Currently looking for software engineering opportunities with a focus on logistical, financial, and web3.0.',
    additional: 'Outside of my profesional work I enjoy skateboarding, rollerskating, traveling, and gaming with my friends. Thanks for visiting my site!'    
}

const skills = {
    languages: ["Python", "JavaScript", "HTML", "CSS"],
    frameworks: ["Flask", "Express", "React", "jQuery", "Bootstrap", "ChakraUI"],
    libraries: ["Node.js"],
};

const projects = [
  {
    name: "Personal Portfolio",
    link: "https://personal-portfolio-kklob.vercel.app/",
    github: "https://github.com/KKlob/Personal-Portfolio",
    summary: "My own little part of the internet. Not just for the professional aspects, but for my own fun projects and enjoyment as well. Eventually this will be a portal to an admin interface where I can access and manage other software projects I deploy.",
  },
  {
    name: "Who's That CongressPerson?",
    link: "#",
    github: "https://github.com/KKlob/Capstone2.5_Frontend",
    summary: "Responsive, intuitive web app built primarily for use on a smartphone or other hand-held device. Single-Page-Application allowing easy access to relevant Congressional Member information. Simplifying the way we understand how our Politicians represent us.",
  },
  {
    name: "Minimalistic Ethereum Block Explorer",
    link: "#",
    github: "https://github.com/KKlob/Capstone1",
    summary: "Ethereum is a leading force in the crypto-currency space today. It has the most active developers and arguably the most economic activity of all blockchains. However, there is still much work to be done on providing a user-friendly interface when it comes to interacting with the blockchain or gathering information from it. A block explorer like Etherscan.io shows a ton of information that can be hard to understand at times, especially for the average person. MEBE is an app that simplifies the information displayed by a typical block explorer like Etherscan.io.",
  }
];

export {about, skills, projects};