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
    nameProject: "Dulce Carolina",
    description: "Aplicación creada con la tecnología React que utiliza fetch para consumir datos de la API de PokeAPI en su versión 2. La app presenta una vista principal con tarjetas de Pokémon que muestran información básica como ID, nombre e imagen. Al seleccionar un Pokémon, se muestra una vista detallada con información adicional. El despliegue se realizó en Netlify.",
    repoUrl: "https://github.com/ImDamianDev/react-poke-app",
    webUrl: "https://dulce-carolina.vercel.app/",
    imgUrl: "https://cdn.dribbble.com/users/1171520/screenshots/6540871/pokedex2.png",
  },
];


export default projects;
