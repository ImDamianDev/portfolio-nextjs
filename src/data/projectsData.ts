// projectsData.ts

interface Project {
  nameProject: string;
  description: string,
  repoUrl: string;
  webUrl: string;
  imgUrl: string;
}

const projects: Project[] = [
  {
    nameProject: "React Poke - App",
    description: "Aplicación creada con React que utiliza fetch para consumir datos de la API de PokeAPI en su versión 2.",
    repoUrl: "https://github.com/ImDamianDev/react-poke-app",
    webUrl: "https://imdamiandev-react-poke-app.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/1171520/screenshots/6540871/pokedex2.png",
  },
  {
    nameProject: "React Calculator - App",
    description: "Aplicación de calculadora creada con React que permite realizar operaciones matemáticas básicas.",
    repoUrl: "https://github.com/ImDamianDev/react-calculator",
    webUrl: "https://imdamiandev-react-calculator.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/6410682/screenshots/14709020/media/afabf7854adc663582e3d6347ac7b6c9.png?compress=1&resize=768x576&vertical=top",
  },
  {
    nameProject: "React AI Chatbot - App",
    description: "Aplicación de chatbot que utiliza la API de OpenAI. Puede mantener conversaciones básicas, responder preguntas comunes y proporcionar información útil.",
    repoUrl: "https://github.com/ImDamianDev/react-chatbot-app.git",
    webUrl: "https://imdamiandev-react-chatbot-app.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/1192538/screenshots/16507884/media/4ba9a8036268fee0111f2cc647ad09bf.png",
  },
];


export default projects;
