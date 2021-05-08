import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import resume_rodrigo_martins from '../images/resume-rodrigo-martins.png';
import MLDB_img from '../images/projects/MLDB.png';
import Blog_img from '../images/projects/React-BLOG.png';
import Robofriends_img from '../images/projects/React-ROBOFRIENDS.png';
import TicTacToe_img from '../images/projects/React-TICTACTOE.png';
import UltraCorp_img from '../images/projects/ULTRA-CORPORATION.png';

const resumeData = {
  name: "Rodrigo Martins",
  aboutMe: "My name is Rodrigo Martins. I'm a Brazilian Software Developer who have worked for 11 years as a Lawyer in Brazil before changing the direction of my career toward Computer Science in the United States. I have just graduated on a Master's degree in Computer Science at Pace University. Currently I'm working at CustomerDiscovery.co as a Software Developer Intern. I'm interested in learning more about Web and Mobile Development and diving deeper into JavaScript, React and NodeJS. I'm always looking for learning new skills and I'm willing to excel in the Tech industry.",
  birthday: "April 9th",
  hometown: "Rio de Janeiro, Brazil",
  livingIn: "Stamford, CT, United States",
  hobbies: [
    "Photography",
    "Soccer",
    "Skiing",
    "Coding",
    "Travelling"
  ],
  social: {
    email: {
      link: "mailto:rodrigo_rmartins@outlook.com",
      icon: <EmailIcon className="contactMe__icon"/>,
    },
    facebook: {
      link: "https://www.facebook.com/rmartins85",
      icon: <FacebookIcon className="contactMe__icon"/>,
    },
    linkedIn: {
      link: "https://www.linkedin.com/in/rodrigoribmartins/",
      icon: <LinkedInIcon className="contactMe__icon" />,
    },
    gitHub: {
      link: "https://github.com/rodrigo-r-martins",
      icon: <GitHubIcon className="contactMe__icon" />,
    }
  },
  resume: resume_rodrigo_martins,
  technicalSkills: {
    programmingLanguages: [
      "JavaScript",
      "Python",
      "Java",
      "HTML",
      "CSS",
      "SQL",
      "XML"
    ],
    webMobileApplications: [
      "React",
      "Angular",
      "Ionic",
      "Android",
      "NodeJS",
      "ExpressJS",
      "GitHub"
    ],
    dataScienceMl: [
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Scikit-learn",
      "Jupyter Notebook"
    ],
    databaseCloud: [
      "MySQL",
      "IBM Db2",
      "Firebase"
    ],
  },
  education: [
    {
      school: "Pace University",
      location: "New York, NY",
      major: "Computer Science",
      degree: "Master of Science",
      gpa: "3.98 / 4.0",
      date: "Sep 2019 - May 2021"
    },
    {
      school: "Udemy - Zero to Mastery Academy",
      location: "Online",
      major: "Python Development",
      degree: "Certificate",
      gpa: null,
      date: "Jun 2020 - Aug 2020"
    },
    {
      school: "Udemy - Zero to Mastery Academy",
      location: "Online",
      major: "Web Development",
      degree: "Certificate",
      gpa: null,
      date: "May 2020 - Jun 2020"
    },
    {
      school: "Coursera",
      location: "Online",
      major: "Data Science",
      degree: "IBM Professional Certificate",
      gpa: null,
      date: "Jan 2020 - May 2020"
    },
    {
      school: "Pontificia Universidade Catolica do Rio de Janeiro",
      location: "Rio de Janeiro, Brazil",
      major: "Real State Law",
      degree: "Postgraduate Degree",
      gpa: "9.6 / 10.0",
      date: "Jan 2015 - Jun 2016"
    },
    {
      school: "Universidade Estacio de Sa",
      location: "Rio de Janeiro, Brazil",
      major: "Law and Social Science",
      degree: "Bachelor of Science",
      gpa: "7.25 / 10.0",
      date: "Jan 2002 - Jun 2007"
    }
  ],
  experience: [
    {
      position: "Software Developer Intern",
      company: "CustomerDiscovery.co",
      period: "Apr 2021 - Current",
      location: "Remote",
      description: "Collaborating with frontend team to develop a responsive web platform using React, JavaScript, HTML and CSS to work on both web and mobile."
    },
    {
      position: "Lawyer",
      company: "Cartorio 13 Oficio de Notas (Notary Public Office)",
      period: "Jun 2008 - Sep 2019",
      location: "Rio de Janeiro, Brazil",
      description: "Conducted contract negotiations with clients and performed documents review to support the Notary Public Office in licensing real estate contracts. Served as the representation in divorce procedures and implemented legal strategies to conduct will negotiations."
    },
    {
      position: "Notary Public Assistant",
      company: "Cartorio 13 Oficio de Notas (Notary Public Office)",
      period: "Dec 2006 - Apr 2008",
      location: "Rio de Janeiro, Brazil",
      description: "Performed document analysis for preparing notarial contracts and participated in notarial contract registration. Worked on applications of necessary taxes for performing notarial contracts."
    },
    {
      position: "Legal Intern",
      company: "Universidade Estacio de Sa",
      period: "Jul 2004 - Jul 2005",
      location: "Rio de Janeiro, Brazil",
      description: "Provided customer service and law counsel to clients of the University office pro bono. Performed case analysis, preparing legal documents and monitoring cases, to ensure that clients receive optimal service. Researched legal decisions from previous cases to assist in finding the best solutions for current cases."
    }
  ],
  projects: [
    {
      name: "MLDB",
      description: "Collaborated in a team to implement a full-stack web application using Agile development methodologies that focus on movie information in one platform, and where users can register to the website, purchase tickets, and give feedback about the service. Movies data has been pulled from The Movie Database API (TMDb)",
      techStack: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "NodeJS",
        "ExpressJS",
        "MySQL"
      ],
      image: MLDB_img,
      github: "https://github.com/rodrigo-r-martins/MLDB",
      link: ""
    },
    {
      name: "Blog",
      description: "Developed an interactive blog web application using ReactJS, JavaScript, HTML and CSS using the data from JSON Placeholder Rest API to simulate initial blog posts, and where users can add, delete, and display their own posts.",
      techStack: [
        "React",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      image: Blog_img,
      github: "https://github.com/rodrigo-r-martins/react-blog",
      link: "https://react-blog-2687d.web.app/"
    },
    {
      name: "Robofriends",
      description: "Developed an interactive web application using ReactJS that allow users to search friends among robots and their cards will be displayed dynamically. Extracted images of robots from Robohash website and the data from JSON Placeholder Rest API.",
      techStack: [
        "React",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      image: Robofriends_img,
      github: "https://github.com/rodrigo-r-martins/robofriends",
      link: ""
    },
    {
      name: "Tic Tac Toe",
      description: "Developed an interactive Tic Tac Toe game using ReactJS, JavaScript, HTML and CSS.",
      techStack: [
        "React",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      image: TicTacToe_img,
      github: "https://github.com/rodrigo-r-martins/react-tic_tac_toe",
      link: "https://tic-tac-toe-fc24b.web.app/"
    },
    {
      name: "Ultra Corporation",
      description: "Developed a responsive website using Vanilla JavaScript, HTML and CSS.",
      techStack: [
        "JavaScript",
        "HTML",
        "CSS"
      ],
      image: UltraCorp_img,
      github: "",
      link: ""
    },
  ]
}

export default resumeData;