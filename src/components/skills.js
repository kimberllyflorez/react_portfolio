import { Container, Nav, Row, Tab, Col } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import BannerCat from "../assets/img/fat-cat.png";
import SkillCard from "./skillCard";
import { Justify } from "react-bootstrap-icons";

function Skills() {

    const techSkills = [
        "Mokito",
        "unit testing",
        "bloc",
        "provider",
        "redux",
        "Sql",
        "play store",
        "britrise",
        "store",
        "git",
        "firebase",
        "retrofit",
        "dio",
        "axios",
    ];
    const softSkills = [
        "Problem Solving",
        "Code Reviewing",
        "Critical Thinking",
        "Good Communication",
        "Self-Taught",
    ];


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col size={5}>
                        <div>
                            <Row className="skill-title" xs={12} md={6} xl={7}>
                                <img alt="BannerCat" src={BannerCat} />
                                <h2> Skills</h2>
                            </Row>
                            <p>something to introduct something</p>

                            <Tab.Container id="skill-tabs" defaultActiveKey="tech">
                                <Nav variant="pills" className="nav-pills mb-5 justify-center" id="">
                                    <Nav.Item>
                                        <Nav.Link eventKey="tech">Tech Skills</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="soft">Soft Skills</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tech">
                                            <ResponsiveMasonry>
                                                <Masonry columnsCount={4}>{
                                                    techSkills.map((skill, index) => {
                                                        const skillLowel = skill.toUpperCase();
                                                        return <SkillCard key={index} skill={skillLowel} />
                                                    })
                                                } </Masonry>
                                            </ResponsiveMasonry>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey={"soft"}>
                                        <Masonry>{
                                                softSkills.map((skill, index) => {
                                                    return <SkillCard key={index} skill={skill} />
                                                })
                                            }
                                            </Masonry>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Skills;