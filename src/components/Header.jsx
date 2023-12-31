import logo from '../assets/logoDark.svg';
import './header.css';

export function Header() {

    return(
        <div id='header'>
            <img id='logo' src={logo}></img>
            <nav>
                <div className='navElement'><h2>Prosjekter</h2></div>
                <div className='navElement'><h2>Om meg</h2></div>
                <div className='orangeButton'><h2>Si hei!</h2></div>
                
            </nav>
        </div>
    );
}