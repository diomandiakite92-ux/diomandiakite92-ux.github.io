import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const SHOW_STATIC_PROJECTS = false;
const SHOW_GITHUB_PROJECTS = true;
const GITHUB_USERNAME = "diomandiakite92-ux";
const GITHUB_MAX = 6;
const INCLUDE_FORKS = false;
const INCLUDE_ARCHIVED = false;

const staticProjects = [
  {
    imgPath: chatify,
    isBlog: false,
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://chatify-49.web.app/",
  },
  {
    imgPath: bitsOfCode,
    isBlog: false,
    title: "Bits-0f-C0de",
    description:
      "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blogs.soumya-jit.tech/",
  },
  {
    imgPath: editor,
    isBlog: false,
    title: "Editor.io",
    description:
      "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
    ghLink: "https://github.com/soumyajit4419/Editor.io",
    demoLink: "https://editor.soumya-jit.tech/",
  },
  {
    imgPath: leaf,
    isBlog: false,
    title: "Plant AI",
    description:
      "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
    ghLink: "https://github.com/soumyajit4419/Plant_AI",
    demoLink: "https://plant49-ai.herokuapp.com/",
  },
  {
    imgPath: suicide,
    isBlog: false,
    title: "Ai For Social Good",
    description:
      "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.",
    ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
  },
  {
    imgPath: emotion,
    isBlog: false,
    title: "Face Recognition and Emotion Detection",
    description:
      "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
  },
];

function Projects() {
  const [githubProjects, setGithubProjects] = useState([]);
  const [githubError, setGithubError] = useState("");

  useEffect(() => {
    if (!SHOW_GITHUB_PROJECTS) return;
    const controller = new AbortController();

    async function loadRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error("GitHub API error");
        }
        const repos = await response.json();
        const filtered = repos
          .filter((repo) => (INCLUDE_FORKS ? true : !repo.fork))
          .filter((repo) => (INCLUDE_ARCHIVED ? true : !repo.archived))
          .slice(0, GITHUB_MAX)
          .map((repo) => ({
            title: repo.name,
            description: repo.description || "Project on GitHub.",
            ghLink: repo.html_url,
            demoLink: repo.homepage || "",
            isBlog: false,
          }));
        setGithubProjects(filtered);
      } catch (err) {
        if (err.name === "AbortError") return;
        setGithubError("Impossible de charger les projets GitHub.");
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {SHOW_GITHUB_PROJECTS &&
            githubProjects.map((project) => (
              <Col
                key={project.ghLink}
                md={4}
                className="project-card"
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}

          {SHOW_GITHUB_PROJECTS && githubError && (
            <Col md={12} className="project-card">
              <p style={{ color: "white" }}>{githubError}</p>
            </Col>
          )}

          {SHOW_STATIC_PROJECTS &&
            staticProjects.map((project) => (
              <Col key={project.title} md={4} className="project-card">
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
