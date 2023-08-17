import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ussain Basha M',
  title: "Hi all, I'm Ussain Basha",
  description:
    "I'm a passionate backend developer with experience in ETL transformation using Python, Flask, and Azure services. I've worked extensively on transformation pipelines within Kubernetes environments and Azure Functions. Additionally, I have expertise in setting up CI/CD pipelines, implementing Pytest for testing, and utilizing the Robot Framework for automation. My skill set also includes working with Azure services for cloud-based solutions.",
  resumeLink:
    'https://drive.google.com/file/d/1aH44j6JqLemz5aSWj1rTg-cdIsS_RuiS/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'UssainMunna',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: 'https://github.com/UssainMunna/',
  linkedin: 'https://www.linkedin.com/in/ussain-munna-11b515220/',
  github: 'https://github.com/UssainMunna',
  instagram: 'https://instagram.com/the_inevitable_guy?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D',
  twitter: 'https://twitter.com/UssainMunna3',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY BACK-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Backend Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Adept in Python, demonstrating excellence in conceptualizing and executing complex ETL pipelines to facilitate seamless data transformation and integration across a wide spectrum of sources.'
        ),
        emoji('⚡ Proficient in orchestrating transformation pipelines within Kubernetes and leveraging Azure Functions for efficient data processing.'),
        emoji('⚡ Experienced in developing complete ETL pipelines, utilizing Python versatility to fetch, reshape, and effectively migrate data from various heterogeneous sources.'),
      ],
      softwareSkills: [

        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Flask',
          iconifyTag: 'simple-icons:flask',
        },
        {
          skillName: 'SQL',
          iconifyTag: 'vscode-icons:file-type-sql',
        },
        {
          skillName: 'Pytest',
          iconifyTag: 'devicon:pytest-wordmark',
        },
        {
          skillName: 'ETL Pipeline',
          iconifyTag: 'eos-icons:pipeline',
        }
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Well-acquainted with Azure Functions, applying serverless computing to efficiently handle data transformations and integration tasks.'),
        emoji(
          '⚡Seasoned in utilizing JIRA as a pivotal tool for agile project management, facilitating cohesive teamwork and systematic issue resolution.'
        ),
        emoji(
          '⚡ Skilled in creating robust CI/CD pipelines to ensure smooth development workflows.'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Azure',
          iconifyTag: 'skill-icons:azure-light',
        },
        {
          skillName: 'MySQL',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Bit Bucket',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'JIRA',
          iconifyTag: 'logos:jira',
        },
        {
          skillName: 'Jenkins',
          iconifyTag: 'logos:jenkins',
        }
      ],
    }
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Python', //Insert stack or technology you have experience in
    progressPercentage: '85', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Azure',
    progressPercentage: '70',
  },
  {
    Stack: 'CI/CD',
    progressPercentage: '60',
  },
  {
    Stack: 'Docker', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'REST Services', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  }
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Dr.MGR Educational Research Institute',
    subHeader: 'Bachelor of Computer Science',
    duration: 'Aug 2017 - April 2020',
    desc: '',
    grade: '74%'
  },
  {
    schoolName: 'Madras Universirty of Distance Education',
    subHeader: 'Master of Computer Science',
    duration: 'Jul 2022 - April 2024',
    desc: '',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Backend Developer',
    company: 'Gold Coast IT Solutions',
    companyLogo: '/img/icons/common/gcit.jpg',
    date: 'Aug 2021',
    desc: 'Designed a scalable Azure Functions pipeline for FHIR health records, using Python for parsing. Async programming reduced latency. REST APIs via Azure Database for MySQL and Functions enabled efficient record consumption. Utilized Azure Data Lake Storage, MySQL, and Functions for end-to-end solution. Proficient in Jenkins-based Azure deployments. Developed multithreaded Python apps for resource optimization and improved performance.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ussain Munna',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Ussain Munna',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Hanzla',
    'Hanzla Tauqeer',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Hanzla Portfolio ',
    'Hanzla Tauqeer Portfolio',
  ],
};
