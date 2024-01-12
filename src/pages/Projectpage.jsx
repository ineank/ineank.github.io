import { Header } from '../components/Header';
import projectsData from '../projects.json';
import './projectpage.css';
import UXfigure from '../assets/UXfigure.svg';

export function Projectpage() {
    const selectedProject = projectsData.find((project) => project.project === "Xpedition");

    if (!selectedProject) {
        return <p>Project not found</p>;
      }


    return(
        <>
            <Header />
            <div className='headline'>
                <h1>"{selectedProject.project}",</h1>
                <h2>{selectedProject.semester}</h2>
            </div>
                <div className='intro'>
                    <h2 className='index'>{selectedProject.summary}</h2>
                    <img className="image_top" src={selectedProject.image[1]}></img>
                </div>
            
            <div className="lists">
                <div>
                    <p><b>Min rolle</b></p>
                    {Object.keys(selectedProject.role).map(key => (
                        <p key={key}>{selectedProject.role[key]}</p>
                    ))}

                </div>
                <div>
                    <p><b>Teknologi</b></p>
                    {Object.keys(selectedProject.technology).map(key => (
                        <p key={key}>{selectedProject.technology[key]}</p>
                    ))}
                </div>
                <div>
                    <p><b>Leveranse</b></p>
                    {Object.keys(selectedProject.delivery).map(key => (
                        <p key={key}>{selectedProject.delivery[key]}</p>
                    ))}
                </div>
            </div>

            <div className='image_group'>
                <div>
                    <img src={selectedProject.image[2]}></img>
                    <img src={selectedProject.image[3]}></img>
                </div>
                <img src={selectedProject.image[4]}></img>
            </div>

            <div className='about_project'>
                <div>
                    <h2>Om prosjektet</h2>
                    <p>{selectedProject.about}</p>
                </div>
                <img src={UXfigure}></img>
            </div>

            <div className='process_top'>
                <div>
                    <h2>Prosess</h2>
                    <p>{selectedProject.process[1]}</p>
                    <p>{selectedProject.process[2]}</p>
                </div>
                <img src={selectedProject.process_image[1]}></img>
            </div>

            <div className='process_bottom'>
                <div className='process_left'>
                    <img src={selectedProject.process_image[2]}></img>
                    <img src={selectedProject.process_image[3]}></img>
                </div>
                <div>
                    <p>{selectedProject.process[3]}</p>
                    <p>{selectedProject.process[4]}</p>

                </div>
            </div>

            <div className='learnings'>
                <h2>Hva har jeg lært?</h2>
                <div>
                    <p>{selectedProject.learnings[1]}</p>
                    <p>{selectedProject.learnings[2]}</p>
                </div>
            </div>
        </>
    )
}

export default Projectpage;