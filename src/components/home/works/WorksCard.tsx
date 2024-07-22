
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col md:flex-row bg-primary/5">

      <div className="flex flex-col justify-around mb-3 p-4">

        <h3 className="mb-3 text-lg font-semibold">
          {data.nameProject}
        </h3>

        <p>{data.description}</p>


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
