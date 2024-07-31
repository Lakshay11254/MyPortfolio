import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import todo from "../../Assets/Projects/todo.png";
import store from "../../Assets/Projects/store.png";
import yt from "../../Assets/Projects/yt.png";
import gpt from "../../Assets/Projects/gpt.png";
import rest from "../../Assets/Projects/rest.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
          And you can find many more by clicking on the Star Button at the top right of the Navbar.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="This TodoApp is a user-friendly to-do app designed to streamline your daily tasks. With features like task creation, priority setting, and deadline reminders, TaskMaster ensures you stay organized and productive. Never miss an important task again with our intuitive and efficient task management system"
              ghLink="https://github.com/Lakshay11254/todo2.0"
              demoLink="https://lakshaystodo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="LM'S STORE"
              description="Welcome to LM Store, your go-to online store for the latest in fashion and accessories. Discover our curated collections of stylish apparel, footwear, and accessories, all crafted with quality and affordability in mind. Shop with confidence and enjoy fast shipping and top-notch customer service"
              ghLink="https://github.com/Lakshay11254/next-ecom"
              demoLink="https://lmstore.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yt}
              isBlog={false}
              title="My YT without ADS"
              description="Experience the best of YouTube with our app! Watch your favorite videos, discover trending content, and subscribe to your favorite channels with ease. Enjoy a seamless viewing experience with personalized recommendations and an intuitive interface"
              ghLink="https://github.com/Lakshay11254/ytclone"
              demoLink="https://lakshayyt.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt}
              isBlog={false}
              title="GPT 1.0"
              description="GPT Assistant is an AI-powered chatbot that helps users with a wide range of tasks, from answering questions to providing recommendations. It's designed for anyone looking to enhance productivity and access information quickly and efficiently."
              ghLink="https://github.com/Lakshay11254/ChatGPT/tree/main/ChatGPT%20w%20OpenAI"
              demoLink="https://myownchatgpt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rest}
              isBlog={false}
              title="Restaurant App"
              description="Discover a world of culinary delights with our Restaurant Finder app. Easily browse menus, read reviews, and make reservations at your favorite local spots. Enjoy exclusive deals and a seamless dining experience, all in one place."
              ghLink="https://github.com/Lakshay11254/food-app/tree/main/food-app"
              demoLink="https://food-appz.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
