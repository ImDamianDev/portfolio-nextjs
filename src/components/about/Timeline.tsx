
import { FaBriefcase, FaFileDownload, FaUserGraduate } from "react-icons/fa";
import experience from "@/data/experienceData";

// Definir la interfaz Experience
interface Experience {
  tipo: string;
  cargo: string;
  lugar: string;
  fecha: string;
}

export const Timeline: React.FC = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px] mx-auto pb-8">

        <div className="bg-secondary absolute h-full w-1 left-[26px] rounded md:inset-x-1/2" />

        {experience.map((experience: Experience, index: number) => (

          <div key={experience.cargo} className={`relative grid md:grid-cols-subgrid md:col-span-2 pl-16 md:pl-0 md:gap-16`}>

            <div className={`px-3 py-4 rounded-xl bg-secondary/20 border-b-2 border-secondary ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
              <h3 className="font-semibold text-secondary mb-2">{experience.cargo}</h3>
              <p className="text-xs mb-2">{experience.lugar}</p>
              <p className="text-xs">{experience.fecha}</p>
            </div>

            <div className="absolute left-2 top-2 h-10 w-10 rounded-full bg-background border-2 border-secondary content-center md:inset-x-1/2 md:-ml-[18px]">
              {experience.tipo === "formación" ? <FaUserGraduate className="mx-auto" /> : <FaBriefcase className="mx-auto" />}
            </div>

          </div>
        ))}

      </div>

      <a
        href="https://drive.google.com/file/d/1SM5dG2iSrjN-kKeaIeR2JZ3TJPuJMO5j/view?usp=sharing"
        className="flex justify-center items-center gap-2 py-2 border-3 border-secondary rounded-xl md:w-48 md:mx-auto hover:bg-secondary hover:scale-105 transition-all"
      >
        <FaFileDownload /> Descargar CV
      </a>

    </>

  );
};
