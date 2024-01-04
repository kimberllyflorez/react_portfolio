import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HeaderImage from "../assets/img/cat6.png";





import TrackVisibility from "react-on-screen";
import { TypeH1 } from "react-bootstrap-icons";

function AppBanner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Developer", "Base on Australia",];
  const period = 4000;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  },)
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (

    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Welcome to my Portfolio</h2>
                  <h1>{` I'm Kimberlly!`}               </h1>
                  <h1>   <span className="txt-rotate" dataPeriod="1500">
                    <span className="wrap">{text}</span></span></h1>
                  <p>Software Developer skilled in crafting mobile applications, effective problem solver, committed to clean coding, design patterns, and seamless user experiences.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect</button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={3}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={HeaderImage} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>

  )
}
export default AppBanner;