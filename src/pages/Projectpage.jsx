import { Header } from '../components/Header';
import projectsData from '../projects.json';

export function Projectpage() {
    const selectedProject = projectsData.find((project) => project.project === "Xpedition");

    if (!selectedProject) {
        return <p>Project not found</p>;
      }


    return(
        <>
            <Header />
            <div>
                <h1>{selectedProject.project}</h1>
            </div>
            <div className="lists">
                <div>
                    <p>Min rolle</p>
                </div>
                <div>
                    <p>Teknologi</p>
                </div>
                <div>
                    <p>Leveranse</p>
                </div>
            </div>
        </>
    )
}

export default Projectpage;