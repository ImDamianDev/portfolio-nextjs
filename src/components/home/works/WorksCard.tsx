import { Button, } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface WorksCardProps {
  data: {
    nombreProyecto: string;
    repoUrl: string;
    webUrl: string;
    imgUrl: string;
  };
}

const WorksCard: React.FC<WorksCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row bg-secondary/10">

      <div className="flex flex-col justify-around mb-3 p-4">

        <h3 className="mb-3">
          Titulo
        </h3>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ullam aliquid tenetur tempora corrupti a reprehenderit voluptates? Maxime placeat sunt vero voluptate iusto nesciunt? Quod esse exercitationem ullam architecto aperiam.</p>


        <div className="flex gap-6 my-6 md:mb-0 md:w-80">

          <Link href={data.webUrl}
            className="w-full md:w-1/2 py-2 text-center border border-secondary bg-secondary rounded-md text-foreground hover:bg-transparent hover:text-secondary hover:scale-105 hover:font-semibold transition-all"

          >
            Ver Online
          </Link>

          <Link href={data.repoUrl}
            className="w-full md:w-1/2 py-2 text-center border border-secondary rounded-md text-secondary hover:bg-secondary hover:text-foreground hover:scale-105 hover:font-semibold transition-all"
          >
            Ver Repositorio
          </Link>

        </div>

      </div>

      <Image
        alt="Relaxing app background"
        className="z-0 w-full object-cover clip-diagonal"
        src={data.imgUrl}
        width={300}
        height={300}
      />
    </div>
  );
};

export default WorksCard;
