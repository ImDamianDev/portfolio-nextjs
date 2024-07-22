
import { TitleSection } from '@/components';
import WorksCard from './WorksCard';
import projects from '@/data/projectsData';
import { PiNotebookDuotone } from 'react-icons/pi';

// Definir la interfaz Project (asumida basada en tu estructura previa)
interface Project {
  nameProject: string;
  description: string;
  repoUrl: string;
  webUrl: string;
  imgUrl: string;
}

export const Works: React.FC = () => {
  return (

    <div id="study-cases">

      <div className='flex items-center mb-8 gap-3 text-secondary'>
        <PiNotebookDuotone size="1.5em" />
        <TitleSection text="Casos de estudio" />
      </div>

      <div id="hero-body" className='grid gap-12'>

        {projects.map((project: Project) => (
          <WorksCard key={project.repoUrl} data={project} />
        ))}

      </div>

    </div>

  );
};