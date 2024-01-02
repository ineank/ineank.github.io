import { Header } from "../components/Header";
import portrait from "../assets/portrait.jpg";
import postit from "../assets/character_postit.svg";
import winking from "../assets/character_winking.svg";
import "./aboutmepage.css";
import { Footer } from "../components/Footer";


export function Aboutmepage() {
    return(
        <>
            <Header/>
            <div className="container">
                <h1>Hei der!</h1>
                <div className="top_container">
                    <div>
                        <p>
                        Jeg er en designer som er lidenskapelig opptatt av å skape inkluderende og meningsfulle opplevelser. 
                        For øyeblikket studerer jeg Industriell Design ved NTNU i Trondheim, der hver dag gir meg nye muligheter 
                        til å utvide min kompetanse og forståelse for verden rundt oss.
                        </p>
                        <p>
                        I løpet av de siste årene har jeg dykket dypt ned i en verden av matematikk, informatikk og design i både 
                        Oslo og Trondheim. Dette har gitt meg en solid plattform innenfor matematikk og teknologi, som jeg nå kombinerer 
                        med metoder og innsikt innen design. Jeg ser på meg selv som en evig problemløser som stadig utvikler seg.
                        </p>
                    </div>
                    <img src={portrait} className="portrait" alt="Bilde av Ine Krogseth"></img>
                </div>

                <div className="middle_container">
                    <img src={postit}></img>
                    <div>
                        <p>
                        I designverdenen trives jeg best med webdesign, UX/UI-design og skapelsen av illustrasjoner.
                        </p>
                        <p>
                        Når jeg ikke dykker ned i designprosjekter, finner du meg ofte utendørs, hvor jeg nyter friluftslivet og løping. 
                        Musikk spiller en stor rolle i livet mitt, og jeg finner ofte roen foran pianoet eller med gitaren i fanget.
                        </p>
                    </div>

                </div>

                <div className="bottom_container">
                    <p>
                    Jeg ser frem til å dele mine lidenskaper og kompetanse med deg. Ta gjerne kontakt, så kan vi utforske mulighetene sammen!
                    </p>
                    <img src={winking}></img>

                </div>
            </div>
            <Footer />
        
            
            

        </>
    )
}