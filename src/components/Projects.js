import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/la.png";
import projImg2 from "../assets/img/tft.png";
import projImg3 from "../assets/img/shmup.png";
import projImg4 from "../assets/img/Discord.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  const projects = [
    {
      title: "Project1",
      description:(
        <a href="https://github.com/FluffyKyubey/Lost-Ark-Group-Finder" target="blanks">"Lost arc Group finder daily tracker"</a> 
      ),
        imgUrl: projImg1,
      },
    {
      title: "tft stat tracker",
      description: (
        <a href="https://github.com/FluffyKyubey/tftstattrackercomparer" target="blanks">a tft stat tracking and comparison site</a> 
      ),
      imgUrl: projImg2,
    },
    {
      title: "Web Game",
      description: (
        <a href="https://github.com/FluffyKyubey/shmup" target="blanks">Side Scrolling Shoot em up game</a> 
      ),
      imgUrl: projImg3,
    },
    {
      title: "Discord bot",
      description: (
        <a href="https://github.com/FluffyKyubey/discordbot" target="blanks">"Lost arc Group finder daily tracker"</a> 
      ),
      imgUrl: projImg4,
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
                <h2>Projects</h2>
                <p>Here are some of my notable projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
