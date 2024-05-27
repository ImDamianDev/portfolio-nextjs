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
    imgUrl: "https://cdn.dribbble.com/users/6410682/screenshots/14709020/media/afabf7854adc663582e3d6347ac7b6c9.png?compress=1&resize=768x576&vertical=top",
  },
  {
    nombreProyecto: "react-chatbot-app",
    repoUrl: "https://github.com/ImDamianDev/react-chatbot-app.git",
    webUrl: "https://imdamiandev-react-chatbot-app.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/1192538/screenshots/16507884/media/4ba9a8036268fee0111f2cc647ad09bf.png",
  },
];

export default projects;
