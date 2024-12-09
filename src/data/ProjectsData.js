
import interestCover from '../assets/projects_images/calculator_cover.PNG'
import encuestasCover from '../assets/projects_images/encuestas_cover.PNG'
import quizzicalCover from '../assets/projects_images/quizzical_cover.PNG'
import terniCover from '../assets/projects_images/terni_cover.PNG'
import chevronLeft from '../assets/skills_images/chevronLeft.SVG';
import chevronRight from '../assets/skills_images/chevronRight.SVG';

export const chevrons = {
  left: chevronLeft,
  right: chevronRight
}

export const spanish={
  title:"Algunos Proyectos e Ideas",
  projects:[
    {
      title: "Calculadora de intereses",
      image: interestCover,
      description: "Solo en ingés. Calculadora de intereses con varias opciones de capitalización",
      tools: [
        "Recharts", "HTML", "CSS", "React", "JavaScript" 
      ],
      link: "/interest-calculator",
      githubButton: "Ver en Github",
      githubLink: "https://github.com/IagoSoler/interest-calculator"  
    },
    {
      title: "Creador de encuestas",
      image: encuestasCover,
      description: "Creador de encuestas online.Centrado en BackEnd.",
      tools: [
        "PHP","MySQL","HTML", "CSS", "JavaScript"
      ],
      link: "/encuestas/views/login.php",
      githubButton: "Ver en Github",
      githubLink: "https://github.com/IagoSoler/Creador-de-encuestas"
    },
    {
      title: "Terni Lapilli",
      image: terniCover,
      description: "Tres en raya romano. Modo solitario y online",
      tools: [
        "PHP","MySQL","HTML", "CSS", "React", "JavaScript"
      ],
      link: "/terni",
      githubButton: "Ver en Github",
      githubLink: "https://github.com/IagoSoler/terni-lapilli"  
    },
    {
      title: "Quizzical",
      image: quizzicalCover,
      description: "Solo en ingés. Pequeño proyecto FrontEnd con llamada a API para preguntas estilo Trivia.",
      tools: [
        "HTML", "CSS", "React", "JavaScript"
      ],
      link: "/quizzical",
      githubButton: "Ver en Github",
      githubLink: "https://github.com/IagoSoler/Quizzical"  
    },
  ]
}
export const english = {
  title: "Some Projects and Ideas",
  projects: [
    {
      title: "Interest Calculator",
      image: interestCover,
      description: "Interest calculator with various capitalization options",
      tools: [
        "Recharts", "HTML", "CSS", "React", "JavaScript" 
      ],
      link: "/interest-calculator",
      githubButton: "View in Github",
      githubLink: "https://github.com/IagoSoler/interest-calculator"  
    },
    {
      title: "Survey Creator",
      image: encuestasCover,
      description: "Spanish only. Online survey creator. Backend focused.",
      tools: [
        "PHP","MySQL","HTML", "CSS", "JavaScript"
      ],
      link: "/encuestas/views/login.php",
      githubButton: "View in Github",
      githubLink: "https://github.com/IagoSoler/Creador-de-encuestas"
    },
    {
      title: "Terni Lapilli",
      image: terniCover,
      description: "Spanish only. Roman Tic-tac-toe. Single player and online mode",
      tools: [
        "PHP","MySQL","HTML", "CSS", "React", "JavaScript"
      ],
      link: "/terni",
      githubButton: "View in Github",
      githubLink: "https://github.com/IagoSoler/terni-lapilli"  
    },
    {
      title: "Quizzical",
      image: quizzicalCover,
      description: "Small Frontend project with API call for Trivia style questions.",
      tools: [
        "HTML", "CSS", "React", "JavaScript"
      ],
      link: "/quizzical",
      githubButton: "View in Github",
      githubLink: "https://github.com/IagoSoler/Quizzical"  
    },
  ]
}