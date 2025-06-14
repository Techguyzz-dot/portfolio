import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Tech",
  lastName: "Guyzz",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Development Company",
  avatar: "/images/avatar.jpg",
  email: "contact@techguyzz.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"], // Updated to reflect common languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName} Newsletter</>,
  description: (
    <>
      Stay updated with the latest in software development, tech trends, and insights from our team of expert developers.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/techguyzz",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/techguyzz/",
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/techguyzz",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpeg",
  label: "Home",
  title: `${person.name} - Software Development Solutions`,
  description: `Leading software development company specializing in custom solutions and digital transformation`,
  headline: <>Transforming Ideas into Powerful Software Solutions</>,
  featured: {
    display: true,
    title: <>Latest Project: <strong className="ml-4">Enterprise Software Suite</strong></>,
    href: "/work/enterprise-software-suite",
  },
  subline: (
    <>
      We are Tech Guyzz, a software development company dedicated to delivering innovative
      <br /> solutions that drive business growth and digital transformation.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a leading software development company from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/techguyzz",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tech Guyzz is a dynamic software development company specializing in creating innovative digital solutions. 
        We combine technical expertise with creative problem-solving to deliver high-quality software that meets 
        modern business needs. Our team of skilled developers and engineers is committed to transforming complex 
        challenges into elegant, efficient solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Our Services",
    experiences: [
      {
        company: "Custom Software Development",
        timeframe: "2020 - Present",
        role: "Core Service",
        achievements: [
          <>
            Developed scalable enterprise solutions for clients across various industries, resulting in 
            improved operational efficiency and reduced costs.
          </>,
          <>
            Implemented modern tech stacks and best practices, ensuring robust and maintainable codebases 
            for long-term success.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Software Development Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Web & Mobile Development",
        timeframe: "2020 - Present",
        role: "Specialized Service",
        achievements: [
          <>
            Created responsive web applications and mobile solutions that have helped clients increase 
            their digital presence and user engagement.
          </>,
          <>
            Implemented cutting-edge technologies and frameworks to deliver high-performance applications 
            with exceptional user experiences.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Our Expertise",
    institutions: [
      {
        name: "Software Development",
        description: <>Expertise in full-stack development, cloud solutions, and enterprise software.</>,
      },
      {
        name: "Digital Transformation",
        description: <>Specializing in helping businesses modernize their digital infrastructure.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technologies We Master",
    skills: [
      {
        title: "Full Stack Development",
        description: <>Proficient in modern frameworks and technologies for end-to-end development.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpeg",
            alt: "Full Stack Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud Solutions",
        description: <>Expert in cloud architecture, deployment, and management using leading platforms.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Cloud Solutions",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Tech Insights & Development Updates",
  description: `Stay updated with the latest in software development and tech trends from ${person.name}`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Our Projects – ${person.name}`,
  description: `Explore our portfolio of software development projects and solutions`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
