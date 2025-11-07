// Navigation items
export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" }, 
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
] as const

// Skills data
export const SKILLS = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
] as const

// Education data
export const EDUCATION_DATA = [
  {
    institution: "Manakula Vinayagar Institute of Technology",
    degree: "Bachelor of Technology in CSE",
    duration: "Jul 2021 - Jun 2025",
    grade: "CGPA – 7.5",
    location: "Puducherry",
  },
  {
    institution: "Amalorpavam Higher Secondary School",
    degree: "Higher Secondary Course (HSC)",
    duration: "2020 - 2021",
    grade: "Percentage - 87%",
    location: "Puducherry",
  },
  {
    institution: "Amalorpavam Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    duration: "2018 - 2019",
    grade: "Percentage - 82%",
    location: "Puducherry",
  },
] as const

// Projects data
export const PROJECTS_DATA = [
  {
    id: "vehicle-detection",
    title: "Vehicle Detection and Identification",
    description:
      "A system used to detect and identify vehicles, including number plate detection for security purposes.",
    tech: ["Python"],
    teamSize: 3,
  },
  {
    id: "nft-certification",
    title: "NFT Based Certification System for digital artwork using Polygon Blockchain",
    description:
      "A decentralized certification system for digital artwork leveraging NFT technology on the Polygon blockchain. Ensures authenticity, ownership, and provenance tracking.",
    tech: ["JavaScript", "Solidity"],
    teamSize: 3,
  },
] as const

// Contact data
export const CONTACT_DATA = [
  {
    icon: "Phone",
    label: "Phone",
    value: "+91 8072396488",
    href: "tel:+918072396488",
    color: "text-green-400",
    bgColor: "hover:shadow-green-500/20",
  },
  {
    icon: "Mail",
    label: "Email",
    value: "arunpandiancse25@gmail.com",
    href: "mailto:arunpandiancse25@gmail.com",
    color: "text-blue-400",
    bgColor: "hover:shadow-blue-500/20",
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    value: "Arunpandian-C",
    href: "https://www.linkedin.com/in/Arunpandian-C",
    color: "text-blue-500",
    bgColor: "hover:shadow-blue-500/20",
  },
  {
    icon: "Github",
    label: "GitHub",
    value: "arunpandian9159",
    href: "https://github.com/arunpandian9159",
    color: "text-purple-400",
    bgColor: "hover:shadow-purple-500/20",
  },
] as const

// Certificates data
export const CERTIFICATES = [
  {
    src: "/Capgemini.png",
    alt: "Capgemini Fullstack Course Certificate",
    title: "Capgemini Fullstack Training"
  },
  {
    src: "/Learnathon.png",
    alt: "ICT Learnathon 2023 Certificate",
    title: "ICT Learnathon 2023"
  },
  {
    src: "/Skill la thon.png",
    alt: "Skill-a-thon 2024 Certificate",
    title: "UiPath Skill-a-thon 2024"
  },
  {
    src: "/python-certiport.png",
    alt: "Python Certificate",
    title: "Python Certification"
  },
  {
    src: "/tripxplo intern certificate.png",
    alt: "Tripmilestone Internship Certificate",
    title: "Frontend Development Internship"
  }
] as const

// Personal information
export const PERSONAL_INFO = {
  name: "Arunpandian C",
  title: "Frontend Developer",
  email: "arunpandiancse25@gmail.com",
  phone: "+91 8072396488",
  location: "Puducherry, India",
  birthday: "25 September 2003",
  age: "21",
  degree: "B.Tech in CSE",
  college: "Manakula vinayagar Institute of technology",
  status: "Open to Work",
  profileImage: "/images/profile.jpg",
  resume: "/Resume.docx",
} as const

// Social links
export const SOCIAL_LINKS = {
  github: "https://github.com/arunpandian9159",
  linkedin: "https://www.linkedin.com/in/Arunpandian-C",
  email: "mailto:arunpandiancse25@gmail.com",
  phone: "tel:+918072396488",
} as const