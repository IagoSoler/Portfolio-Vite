
import reactIcon from '../assets/skills_images/React_icon.PNG';
import javascriptIcon from '../assets/skills_images/JavaScript_icon.PNG';
import htmlIcon from '../assets/skills_images/HTML_icon.PNG';
import cssIcon from '../assets/skills_images/CSS_icon.PNG';
import phpIcon from '../assets/skills_images/PHP_icon.PNG';
import gitIcon from '../assets/skills_images/Git_icon.PNG';
import spainIcon from '../assets/skills_images/Spain_icon.PNG';
import ukIcon from '../assets/skills_images/UK_icon.PNG';
import galiciaIcon from '../assets/skills_images/Galicia_icon.PNG';
import chevronLeft from '../assets/skills_images/chevronLeft.SVG';
import chevronRight from '../assets/skills_images/chevronRight.SVG';

export const chevrons = {
  left: chevronLeft,
  right: chevronRight
}

export const spanish = {
  title:"Habilidades relevantes:",
  languagesTitle: "Mis idiomas:",
  backendTitle: "Backend y otras tecnologías:",
  frontend: [
    {
      title: "React",
      image: reactIcon,
      description: "Nivel: intermedio",
      level: 33
    },
    {
      title: "JavaScript",
      image: javascriptIcon,
      description: "Nivel: intermedio",
      level: 40
    },
    {
      title: "HTML",
      image: htmlIcon,
      description: "Nivel: intermedio",
      level: 33
    },

    {
      title: "CSS",
      image: cssIcon,
      description: "Nivel: básico",
      level: 10
    }
  ],
  backend: [    {
    title: "PHP",
    image: phpIcon,
    description: "Nivel: básico",
    level: 15
  },{
    title: "Git",
    image: gitIcon,
    description: "Nivel: básico",
    level: 5
  }],
  languages: [ {
    title: "Español",
    image: spainIcon,
    description: "Nivel: Nativo",
    level: 100
  },{
    title: "Inglés",
    image: ukIcon,
    description: "Nivel: Fluido",
    level: 90
  },
  {
    title: "Gallego",
    image: galiciaIcon,
    description: "Nivel: Nativo",
    level: 100
  }  ]
}
export const english = {
  title:"Relevant skills:",
  languagesTitle: "My languages:",
  backendTitle: "Backend and other technologies:",
  frontend: [
    {
      title: "React",
      image: reactIcon,
      description: "Level: intermediate",
      level: 33
    },
    {
      title: "JavaScript",
      image: javascriptIcon,
      description: "Level: intermediate",
      level: 40
    },
    {
      title: "HTML",
      image: htmlIcon,
      description: "Level: intermediate",
      level: 33
    },
    {
      title: "CSS",
      image: cssIcon,
      description: "Level: basic",
      level: 10
    }
  ],
  backend: [
    {
      title: "PHP",
      image: phpIcon,
      description: "Level: basic",
      level: 15
    },
    {
      title: "Git",
      image: gitIcon,
      description: "Level: basic",
      level: 5
    }
  ],
  languages: [
    {
      title: "Spanish",
      image: spainIcon,
      description: "Level: Native",
      level: 100
    },
    {
      title: "English",
      image: ukIcon,
      description: "Level: Fluent",
      level: 90
    },
    {
      title: "Galician",
      image: galiciaIcon,
      description: "Level: Native",
      level: 100
    }
  ]
}

