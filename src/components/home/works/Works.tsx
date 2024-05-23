
import { SectionTitle } from '@/components/ui/section-title/SectionTitle';
import WorksCard from './WorksCard';
import projects from '@/data/projectsData';

// Definir la interfaz Project (asumida basada en tu estructura previa)
interface Project {
  nombreProyecto: string;
  repoUrl: string;
  webUrl: string;
  imgUrl: string;
}

export const Works: React.FC = () => {
  return (
    <div className="p-7 flex flex-col max-w-[1200px] mx-auto">
      <SectionTitle text="Proyectos" />

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project: Project) => (
          <WorksCard key={project.repoUrl} data={project} />
        ))}
      </div>

    </div>
  );
};