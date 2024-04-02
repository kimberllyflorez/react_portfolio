
import { Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cat1Image from "../assets/img/cat_2.png";
import cat2Image from "../assets/img/cat4.png";
import cat3Image from "../assets/img/fat-cat.png";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
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
    <section id="projects">
      <Container className="project">
        <Col className="project-row">
          <div>
            <h2>Projects</h2>
            <p>I am passionate about doing a lot of things</p>
            <Carousel responsive={responsive} infinite={true} className="project-slider">
              <ProjectItem image={cat1Image} title="SQL" />
              <ProjectItem image={cat2Image} title="Flutter" />
              <ProjectItem image={cat3Image} title="React Native" />
            </Carousel>
          </div>
        </Col>
      </Container>
    </section>
  );
};

const ProjectItem = ({ image, title }) => (
  <div className="item" style={{ width: 500, height: 500, objectFit: 'cover' }}>
    <img src={image} alt={title} />
    <h5>{title}</h5>
  </div>
);

export default Projects;