// src/data/experienceData.ts

interface Experience {
    tipo: string;
    cargo: string;
    lugar: string;
    fecha: string;
}

const experience: Experience[] = [
    {
        tipo: "experiencia",
        cargo: "FreeLancer Multidisciplinario",
        lugar: "",
        fecha: "2020 - 2024"
    },
    {
        tipo: "formación",
        cargo: "DESARROLLO DE APLICACIONES FULL STACK JAVASCRIPT TRAINEE",
        lugar: "INFOCLUB SPA - Sence Chile",
        fecha: "2022"
    },
    {
        tipo: "experiencia",
        cargo: "Jefe de taller - Administrador de garantias - Control de calidad",
        lugar: "Automotriz Carmona y Cia",
        fecha: "2015 - 2020"
    },
    {
        tipo: "formación",
        cargo: "Titulado de Ingeniería en Maquinaria y Vehículos Automotrices y Sistemas Electrónicos",
        lugar: "INACAP - La Serena",
        fecha: "2011 - 2014"
    }
];

export default experience;
