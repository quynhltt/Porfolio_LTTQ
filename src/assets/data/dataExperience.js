import { projectBeckhoff } from "./data";

export const dataExperience = [
  {
    id: 1,
    code: "TPB",
    position: "Frontend Developer",
    company: "TPBank Fico",
    timeline: "Jan 2023 - Present",
    description: "TPB - Fico is a consumer credit division under TP Bank - Tien Phong Bank, specializing in supporting fast, simple unsecured salary loan products, disbursed in just 2-3 working days.",
    // project: projectBeckhoff,
  },
  {
    id: 2,
    code: "BAV",
    position: "Software Developer",
    company: "Beckhoff Automation Vietnam",
    timeline: "May 2022 - Oct 2022",
    description: "Beckhoff Automation is a global provider of open automation systems based on advanced PC Control technology.",
    // project: projectBeckhoff,
  },
  {
    id: 3,
    code: "IPV",
    position: "Software Developer",
    company: "Intel Products Vietnam",
    timeline: "Mar 2021 - Sep 2021",
    description: "Intel Products Vietnam is a company operating in the field of assembling and testing computer chip products for export and research and development in the field of high technical information.",
    // project: projectBeckhoff,
  },
];

export const project = [
  {
    code: "TPB",
    projectName: "Merchant Portal ",
    detail: "Merchant Portal is the portal support for Shop Partner (Merchant) which allows our merchant to join, look up loan Information and loan status.",
    size: 30,
    role: "Frontend Developer",
    technologyStack: ["Angular 16", "PrimeNG", "Bootstrap", "TypeScript", "Figma", "GIT", "Postman"],
    responsibility: ["Response for develop the front-end UI of Merchant Portal.", "Screen and Feature: Login, User management, CDL Process, CDL Bulk Upload, CDL Manual Check, CDL Transaction."],
    knowledgeGained: [
      "Basic Graphic Design: Familiarity with graphic design tools like Photoshop or Figma for asset preparation.",
      "Responsive Design: Able to build web interfaces that work well on various screen sizes and devices.",
      "Version Control: Familiar with version control systems like Git to collaborate with a development team.",
      "Adaptability: Ability to learn new technologies and adapt to changing web development trends.",
      "Collaboration: Works well in a team, collaborates with designers and back-end developers to achieve project goals.",
    ],
  },
  {
    code: "TPB",
    projectName: "Digital Lending Platform",
    detail:
      "The mission is to deploy a new Lending Platform that will quickly support Fico's current product lines such as digitizing the operations and application creation process, including receiving new leads, completing applications, and collecting loans.",
    size: 30,
    role: "Frontend Developer",
    technologyStack: ["Angular 12", "PrimeNG", "Bootstrap", "TypeScript", "Figma", "Git", "Postman"],
    responsibility: ["Response for developing the front-end UI of Digital Lending Platform.", "Screen and Feature: Raise to AF, Raise Deviation, Manual Approve, Pool Confirm Reject, Pool Confirm Cancel, Send Back, Search App"],
    knowledgeGained: [
      // { "HTML, CSS, and JavaScript": "Proficient in using these core web technologies to create and style web pages, and add interactivity." },
      // { "Basic Frameworks": "Knowledge of front-end framework Angular, and the ability to work with them." },
      // { "UI/UX Principles": "Understanding of user interface and user experience design principles to create user-friendly web interfaces." },
      // {
      //   "Finance workflow process flows":
      //     "Learned about the business of finance workflow process flows, which helps businesses streamline tedious and repetitive finance processes such as purchase requests to increase the productivity and efficiency of the teams involved.",
      // },
    ],
  },
  {
    code: "BAV",
    projectName: "HMI (Human Machine Interface)",
    detail: "",
    size: 4,
    role: "Software Developer",
    technologyStack: ["HTML", "JavaScript", "TwinCAT HMI"],
    responsibility: ["Design and develop HMI (human-machine interface) based on the machine's features.", "Write software documentation and present them in instructional videos."],
    knowledgeGained: [],
  },
];
