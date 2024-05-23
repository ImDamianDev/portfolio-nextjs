// projectsData.ts

interface Project {
  nombreProyecto: string;
  repoUrl: string;
  webUrl: string;
  imgUrl: string;
}

const projects: Project[] = [
  {
    nombreProyecto: "react-poke-app",
    repoUrl: "https://github.com/ImDamianDev/react-poke-app",
    webUrl: "https://imdamiandev-react-poke-app.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/1171520/screenshots/6540871/pokedex2.png",
  },
  {
    nombreProyecto: "react-calculator",
    repoUrl: "https://github.com/ImDamianDev/react-calculator",
    webUrl: "https://imdamiandev-react-calculator.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/1171520/screenshots/6540871/pokedex2.png",
  },
  {
    nombreProyecto: "react-chatbot-app",
    repoUrl: "https://github.com/ImDamianDev/react-chatbot-app.git",
    webUrl: "https://imdamiandev-react-chatbot-app.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/1171520/screenshots/6540871/pokedex2.png",
  },
];

export default projects;
