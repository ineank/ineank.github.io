import projectsData from '../projects.js';

export function Projectpage() {
    const selectedProject = projectsData.find((project) => project.project === "Xpedition");

    if (!selectedProject) {
        return <p>Project not found</p>;
      }

    return(
        <>
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