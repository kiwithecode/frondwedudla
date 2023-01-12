import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
/*import GazeCloudAPI from 'path/to/GazeCloudAPI.js';
import GazeRecorderAPI from 'path/to/GazeRecorderAPI.js';
import GazePlayer from 'path/to/GazePlayer.js';*/




         //Funciones de prueba de calibración
  /*   export const  PlotGaze = (GazeData) =>{
            //settea los valores de tracking en tiempo real
            document.getElementById("GazeData").innerHTML = " DirMiradaX: " + GazeData.GazeX + " DirMiradaY: " + GazeData.GazeY;
            document.getElementById("HeadPhoseData").innerHTML = " Rot/Pos CabezaX: " + GazeData.HeadX + " Rot/Pos CabezaY: " + GazeData.HeadY + " Posición CabezaZ: " + GazeData.HeadZ;
            document.getElementById("HeadRotData").innerHTML = " Yaw: " + GazeData.HeadYaw + " Pitch: " + GazeData.HeadPitch + " Roll: " + GazeData.HeadRoll;

            var x = GazeData.docX;
            var y = GazeData.docY;

            var gaze = document.getElementById("gaze");
            //Anchura interior del elemento
            x -= gaze.clientWidth/2;
            //Altura interior del elemento
            y -= gaze.clientHeight/2;
            //Setea la posición horizontal mediante la toma de la posición izquierda
	         gaze.style.left = x + "px";
            //Setea la posición vertical mediante la toma de la posición superior
	         gaze.style.top = y + "px";
            //Muestra o no el cursor de tracking de la mirada según las condiciones en tiempo real
            if(GazeData.state !==0)
            {
               if( gaze.style.display  === 'block')
                  gaze.style.display = 'none';
            }
            else
            {
               if( gaze.style.display  === 'none')
                  gaze.style.display = 'block';
            }

         }

         //Funciones de usabilidad en una web
         GazeRecorderAPI.OnNavigation = function(url)
			{
				document.getElementById("url").value = url;
			}

		function EndRec()
			{
				document.getElementById("inicio").style.display = 'none';
				GazeRecorderAPI.StopRec();
				GazeCloudAPI.StopEyeTracking();
			}

			export const PlayRec = () =>
			{
				EndRec();
				GazePlayer.SetCountainer(document.getElementById("reproductor"));
				var SesionReplayData = GazeRecorderAPI.GetRecData();
				GazePlayer.PlayResultsData(SesionReplayData  );
			}


			export const start =() =>
			{
				document.getElementById("inicio").style.display = 'block';
				var url = document.getElementById("urlstart").value;

				GazeCloudAPI.StartEyeTracking();
				GazeCloudAPI.OnCalibrationComplete  = function(){
					GazeRecorderAPI.Rec(url);
				};

			}

			export const Navigate=()=>
			{
				var url = document.getElementById("url").value;
				GazeRecorderAPI.Navigate (url );
			}

*/
export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>TEST DE CALIBRACIÓN</h2>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
