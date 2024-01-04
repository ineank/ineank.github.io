//import FrontFigure from "../components/FronFigure";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer"
import FrontFigure from "../assets/frontFigur2.svg";
import path1 from '../assets/path.svg';
import blob from '../assets/blob.svg';
import project_dot from '../assets/projectDot.svg';
import path_projects from '../assets/path_projects.svg';
import frontBackground from '../assets/front_background.svg';
import './homepage.css';
import projectsData from '../projects.json';
import { Link } from "react-router-dom";



export function Homepage() {

    return (
        <div>
            <Header/>
            {/*<FrontFigure/>*/}
            <div className="main">
                <div className="grid_container_1">
                    <h1>Ine A. Krogseth</h1>
                    <h2>Design handler om å berike livene våre gjennom inkluderende og minneverdige oppleverlser.</h2>
                    <div id="label_1" className="label"><h2>Illustrasjoner</h2></div>
                    <div id="label_2" className="label"><h2>UX/UI-design</h2></div>
                    <div id="label_3" className="label"><h2>Webutvikling</h2></div>
                    <div id="label_4" className="label"><h2>Brukertesting</h2></div>

                    <img className="front_figure" src={FrontFigure}></img>
                    <img className="front_image" src={path1}></img>
                    <img className="blob" src={blob}></img>

                    

                </div>

                <div className="grid_container_2">
                    <h1>Prosjekter</h1>
                    <h2>Gjør deg kjent med mine prosjekter</h2>
                    <img className="project_path" src={path_projects}></img>
                    {projectsData.map((project) => (
                        <Link key={project._id} to={`/projects/${project.project}`}>
                            <img className="project_dot" src={project_dot} alt="Project Dot" />
                        </Link>
                    ))}
                </div>

                {/*
                <div>
                    <img src={blob} id='blob'></img>
                    <img src={path1} className='path'></img>
                    <img src={FrontFigure} id='frontFigure'></img>
                </div>
                
                <div id='flex_container'>
                    <div id='flex_left'>
                        <h1>Ine A. Krogseth</h1>
                        <h2>Design handler om å berike livene våre gjennom inkluderende og minneverdige oppleverlser.</h2>
                        <div>
                            <div className="label"><h2>Illustrasjoner</h2></div>
                            <div className="label"><h2>UX/UI-design</h2></div>
                            <div className="label"><h2>Webutvikling</h2></div>
                            <div className="label"><h2>Brukertesting</h2></div>
                        </div>
                        
                    </div>
            
                </div>
                */}
                
            </div>
            
            <Footer />
        </div>
    );
}