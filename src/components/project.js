import { Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cat1 from "../assets/img/cat_2.png";
import Cat2 from "../assets/img/cat4.png";
import Cat3 from "../assets/img/fat-cat.png";
function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section>
      <Container className="project" id="projects">
        <Col className="project-row">
          <div>
            <h2>Projects</h2>
            <p>I am a appasionate doing s a lot of things</p>
            <Carousel responsive={responsive} infinite={true} className="project-slider" >
              <div className="item" style={{ width: 500, height: 500, objectFit: 'cover' }}>
                <img src={Cat1} />
                <h5>SQL</h5>
              </div>
              <div className="item" style={{ width: 500, height: 500, objectFit: 'cover' }}>
                <img src={Cat2} alt="Image" />
                <h5>Flutter</h5>
              </div>
              <div className="item" style={{ width: 500, height: 500, objectFit: 'cover' }}>
                <img src={Cat3} alt="Image" />
                <h5>REACT NATIVE</h5>
              </div>
            </Carousel>
          </div>
        </Col>

      </Container>
    </section>
  )
}
export default Projects;