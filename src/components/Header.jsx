import logo from '../assets/logoDark.svg';
import './header.css';
import { Link } from "react-router-dom";


export function Header() {

    return(
        <div id='header'>
            <Link to={`/`}><img id='logo' src={logo}></img></Link>
            <nav>
                <Link to={`/`} className='navElement'><h2>Prosjekter</h2></Link>
                <Link to={`/omMeg`} className='navElement'><h2>Om meg</h2></Link>
                <Link to={`/siHei`} className='orangeButton'><h2>Si hei!</h2></Link>
                
            </nav>
        </div>
    );
}