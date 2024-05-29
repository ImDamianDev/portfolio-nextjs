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
        cargo: "Servicios de mecánica",
        lugar: "D&F Mecánica Automotriz",
        fecha: "2020 - 2023"
    },
    {
        tipo: "formación",
        cargo: "DESARROLLO DE APLICACIONES FULL STACK JAVASCRIPT TRAINEE",
        lugar: "INFOCLUB SPA - Sence Chile",
        fecha: "2022"
    },
    {
        tipo: "experiencia",
        cargo: "Jefe de taller",
        lugar: "Automotriz Carmona y Cia",
        fecha: "2016 - 2020"
    },
    {
        tipo: "experiencia",
        cargo: "Administrador de garantías y Control de calidad",
        lugar: "Automotriz Carmona y Cia",
        fecha: "2016"
    },
    {
        tipo: "experiencia",
        cargo: "Asistente de Servicio",
        lugar: "Automotriz Carmona y Cia",
        fecha: "2015"
    },
    {
        tipo: "formación",
        cargo: "Titulado de Ingeniería en Maquinaria y Vehículos Automotrices y Sistemas Electrónicos",
        lugar: "INACAP - La Serena",
        fecha: "2011 - 2014"
    },
    {
        tipo: "experiencia",
        cargo: "Práctica Técnico Profesional de Nivel Medio en Electrónica",
        lugar: "LABTEC Ltda.",
        fecha: "2010"
    },
    {
        tipo: "formación",
        cargo: "Titulado de Técnico de nivel medio en electrónica",
        lugar: "Salesianos San Ramón - La Serena",
        fecha: "2006 - 2009"
    }
];

export default experience;
