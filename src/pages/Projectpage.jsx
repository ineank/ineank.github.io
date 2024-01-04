import { Header } from '../components/Header';
import projectsData from '../projects.json';
import './projectpage.css';

export function Projectpage() {
    const selectedProject = projectsData.find((project) => project.project === "Xpedition");

    if (!selectedProject) {
        return <p>Project not found</p>;
      }


    return(
        <>
            <Header />
            <div>
                <h1>"{selectedProject.project}",</h1>
                <h2>{selectedProject.semester}</h2>
                <div>
                    <h2>{selectedProject.summary}</h2>
                    <img className="image_top" src={selectedProject.image[1]}></img>
                </div>
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