import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
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
    <>
      <Card isFooterBlurred className="w-full h-[300px] hover:">
        <Image
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={data.imgUrl}
          width={500}
          height={500}
        />
        <CardFooter className="absolute bg-secondary/90 bottom-0 z-10 border-t-1 border-secondary">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <h3 className="text-medium font-bold text-white">{data.nombreProyecto}</h3>
              <p className="text-tiny font-semibold text-white/60">Caso de estudio</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href={data.webUrl}
            >
              <Button radius="full" size="sm" className="bg-secondary border-2 border-white">View Web</Button>
            </Link>
            <Link href={data.repoUrl}
            >
              <Button radius="full" size="sm" className="bg-secondary border-2 border-white">View Repo</Button>
            </Link>
          </div>
        </CardFooter>
      </Card >
    </>
  );
};

export default WorksCard;
