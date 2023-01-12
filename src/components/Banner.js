import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "seguimiento ocular?" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

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
                <span className="tagline">BIENVENIDOS AL PROYECTO </span>
                <h1>{`¿Qué es el `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "seguimiento ocular?" ]'><span className="wrap">{text}</span></span></h1>
                  <p>El seguimiento ocular es un tipo de tecnología de sensor que brinda a una computadora las herramientas para comprender y rastrear hacia dónde mira una persona.</p>
                  <br></br>
                  <p>¿En qué nos ayuda el seguimiento ocular?</p>
                  <br></br>

                  <p>Un rastreador ocular puede detectar la presencia, la atención y el enfoque de un usuario mientras interactúa con una aplicación, un punto de contacto o un sitio web específicos.</p>
                  <br></br>
                  <p>Ahora, la tecnología de seguimiento ocular puede ofrecer información detallada sobre el comportamiento del usuario y la página dinámica, así como el diseño de la aplicación, además de ofrecer herramientas intuitivas que mejoran el viaje del usuario.</p>
                  <br></br>
                  <p>Como el seguimiento ocular proporciona un mapa visual de cómo sus usuarios interactúan con su sitio web, páginas de destino, puede identificar las fortalezas y debilidades relacionadas con la experiencia del usuario (UX) y la ubicación del contenido.
                  </p>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
