import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
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
    <div className="w-full h-[300px] grid md:grid-cols-2 mb-6">

      <Image
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover bg-slate-400"
        src={data.imgUrl}
        width={300}
        height={300}
      />

      <div className="bg-lime-300">
        <Link href={data.webUrl}
        >
          <Button radius="full" size="sm" className="bg-secondary border-2 border-white">View Web</Button>
        </Link>
        <Link href={data.repoUrl}
        >
          <Button radius="full" size="sm" className="bg-secondary border-2 border-white">View Repo</Button>
        </Link>
      </div>

    </ div>
  );
};

export default WorksCard;
