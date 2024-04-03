
import { Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import cat2Image from "../assets/img/cat4.webp";
import cat3Image from "../assets/img/fat-cat.webp";
import voteApp from "../assets/img/vote_app.webm";

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
          <div className="project-container">
            <h2>Projects</h2>
            <p>I am passionate about doing a lot of things</p>
            <Carousel responsive={responsive} infinite={true} className="project-slider">
              <ProjectItem video={voteApp} title="Vote App" describe="This is a app made in Flutter and node js. the object of this project is create a app that use socket for crear a real time user votation" />
              <ProjectItem image={cat2Image} title="Flutter" describe="This is a app made in Flutter and node js. the object of this project is create a app that use socket for crear a real time user votation" />
              <ProjectItem image={cat3Image} title="React Native" />
            </Carousel>
          </div>
        </Col>
      </Container>
    </section>
  );
};

const ProjectItem = ({ image, title, video, describe }) => (
  <div className="item">
    {image && <img src={image} alt={title} />} 
    {video && <video src={video} alt={title} controls />}  
    <h5>{title}</h5>
    <p>{describe}</p>
  </div>
);
export default Projects;