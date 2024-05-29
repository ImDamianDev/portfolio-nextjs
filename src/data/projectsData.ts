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
    description: "Aplicación creada con la tecnología React que utiliza fetch para consumir datos de la API de PokeAPI en su versión 2. La app presenta una vista principal con tarjetas de Pokémon que muestran información básica como ID, nombre e imagen. Al seleccionar un Pokémon, se muestra una vista detallada con información adicional. El despliegue se realizó en Netlify.",
    repoUrl: "https://github.com/ImDamianDev/react-poke-app",
    webUrl: "https://imdamiandev-react-poke-app.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/1171520/screenshots/6540871/pokedex2.png",
  },
  {
    nameProject: "React Calculator - App",
    description: "Aplicación de calculadora creada con React que permite realizar operaciones matemáticas básicas. La interfaz es intuitiva y fácil de usar, diseñada para proporcionar una experiencia de usuario fluida y eficiente. El despliegue se realizó en Netlify.",
    repoUrl: "https://github.com/ImDamianDev/react-calculator",
    webUrl: "https://imdamiandev-react-calculator.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/6410682/screenshots/14709020/media/afabf7854adc663582e3d6347ac7b6c9.png?compress=1&resize=768x576&vertical=top",
  },
  {
    nameProject: "React AI Chatbot - App",
    description: "Aplicación de chatbot impulsada por inteligencia artificial, desarrollada con React. El chatbot puede mantener conversaciones básicas, responder preguntas comunes y proporcionar información útil. Esta aplicación demuestra el uso de técnicas modernas de IA integradas en una interfaz de usuario interactiva. El despliegue se realizó en Netlify.",
    repoUrl: "https://github.com/ImDamianDev/react-chatbot-app.git",
    webUrl: "https://imdamiandev-react-chatbot-app.netlify.app/",
    imgUrl: "https://cdn.dribbble.com/users/1192538/screenshots/16507884/media/4ba9a8036268fee0111f2cc647ad09bf.png",
  },
];


export default projects;
