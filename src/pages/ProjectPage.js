import projects from "../data/projects";
import ProjectDetails from "../components/ProjectDetails";

function ProjectPage() {

  return (
    <section id="ProjectsSection" className="Projects texture-waves-light">
      <div className="Projects-headline background-light texture-noise2 border-solid">
        <h2>Projects</h2>
      </div>
      {Object.values(projects).map((project) => (
        <ProjectDetails key={project.name} project={project}/>
      ))}
      <div className="Headline-separator texture-noise2 background-accent2 border-solid"></div>
      <div/>
    </section>
  );
}

export default ProjectPage;