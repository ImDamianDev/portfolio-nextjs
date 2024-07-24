
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

interface WorksCardProps {
  data: {
    nameProject: string;
    description: string;
    repoUrl: string;
    webUrl: string;
    imgUrl: string;
  };
}

const WorksCard: React.FC<WorksCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row md:bg-primary/5">

      <Image
        alt="Relaxing app background"
        className="z-0 w-full object-cover rounded-2xl h-[200px] md:h-full"
        src={data.imgUrl}
        width={300}
        height={300}
      />

      <div className="flex flex-col justify-around mb-3 pt-6 md:p-6">

        <h3 className="mb-3 text-2xl text-secondary/90 font-semibold">
          {data.nameProject}
        </h3>

        <p>{data.description}</p>


        <div className="flex gap-6 mt-6 md:mb-0 md:w-80">

          <Link href={data.webUrl}
            className="flex gap-2 px-3 py-1.5 text-base rounded-xl border-1 border-primary bg-primary/10 hover:scale-95 transition-all duration-150"

          >
            <FaLink size={"1.5em"} />
            Vista Previa
          </Link>

          <Link href={data.repoUrl}
            className="flex gap-2 px-3 py-1.5 text-base rounded-xl border-1 border-primary bg-primary/10 hover:scale-95 transition-all duration-150"
          >
            <FaGithub size={"1.5em"} />
            Repositorio
          </Link>

        </div>

      </div>


    </div>
  );
};

export default WorksCard;
