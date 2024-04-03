import { Row } from "react-bootstrap";
import me from "../assets/img/me.jpeg";
import cat from "../assets/img/cat5.webp";
// Importar archivo CSS externo para estilos
import { COMMON } from "../i18n/constants"

const AboutMe = () => {

    return (
        <section className="about_me" id="AboutMe">
            <h2 className="about_title">{COMMON.ABOUT_ME_TITLE}</h2>
            <ul className="about_me_top_section">
            <h2>{COMMON.ABOUT_ME_DESCRIPTION}</h2>
            <img className="about_me_image" src={me} alt="me"></img>
            </ul>
            
            <div >
              

                <ul className="about_items">
                    <Row className="about_item">
                        <div>
                            <img src={cat} alt="item"></img>
                            <h2>{COMMON.ABOUT_ME_SKILLS}</h2>
                            </div>
                        
                           {COMMON.SKILLS_LIST.map((skill, index) => (
                                
                                <p key={index}>{skill}</p>
                            ))}
                    


                    </Row>
                    <Row className="about_item">
                        <div>
                            <img src={cat} alt="item"></img>
                            <h2>{COMMON.PASSION_TITLE}</h2>
                            </div>
                        
                           {COMMON.PASSIONS_LIST.map((skill, index) => (
                                
                                <p key={index}>{skill}</p>
                            ))}
                    


                    </Row>
                 
                </ul>
            </div>
        </section>
    );
};

export default AboutMe;