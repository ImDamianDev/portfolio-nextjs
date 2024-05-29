
import { SectionTitle } from '@/components/ui/section-title/SectionTitle';
import WorksCard from './WorksCard';
import projects from '@/data/projectsData';

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

    <div id="study-cases" className='lg:min-h-[90vh]'>

      <div className='border-b-2 border-secondary w-fit ml-6 lg:ml-0 sticky top-17 my-12'>
        <SectionTitle text="Casos de estudio" />
      </div>

      <div id="hero-body" className='grid gap-12'>

        {projects.map((project: Project) => (
          <WorksCard key={project.repoUrl} data={project} />
        ))}

      </div>

    </div>

  );
};