import React from "react";
import ImgDown from "../images/down-arrow.png";
import ImgUp from "../images/up-arrow.png";

export default function Projects() {
  const [current, setCurrent] = React.useState(0);
  const [posts] = React.useState([
    {
      id: 1,
      title: "Github Battle",
      description:
        "This was the first project I developed using React. It was great to get a grasp on how the framework works and how I can develop projects with React. In this project you can see what the top repositories for 6 different languages, and you can 'battle' different GitHub user profile to see who has the higher score.",
      tech: "JavaScript, HTML, CSS, React",
      projectLink: "https://githubbattle.miguelfranganito.com/",
      githubLink: "https://github.com/miguelmateusmf/Github-Battle",
    },
    {
      id: 2,
      title: "NodeJS Server",
      description:
        "My goal with this project was to start to understand how I can use NodeJS, and I was able to develop a server. In the near future I have plans to develop an API using NodeJS!",
      tech: "TypeScript, HTML, Node.js",
      projectLink: "",
      githubLink: "https://github.com/miguelmateusmf/NodeJS-Server-Example",
    },
    {
      id: 3,
      title: "Portfolio",
      description:
        "This is the project you're seeing right now! Where you get to know a bit more about me.",
      tech: "JavaScript, HTML, CSS, React",
      projectLink: "https://www.miguelfranganito.com/",
      githubLink: "https://github.com/miguelmateusmf/Portfolio",
    },
    {
      id: 4,
      title: "To Do List",
      description:
        "This was my first project completed with Vue. I'm still learning how to develop using the framework and so far I've gathered a good base to continue exploring the framework. As the name shows I decided to start by developing a TODO App",
      tech: "JavaScript, HTML, CSS, Vue",
      projectLink: "https://todolist.miguelfranganito.com/",
      githubLink: "https://github.com/miguelmateusmf/To-Do-List",
    },
    {
      id: 5,
      title: "Github Battle - Version 2",
      description:
        "As you can see by the title this is another version of Github Battle. The difference is in how the components were developed. I started by learning class components, but soon after I learned function components and how to develop React projects with Hooks. This is Github Battle but developed with function components and Hooks, my second project.",
      tech: "JavaScript, HTML, CSS, React",
      projectLink: "",
      githubLink:
        "https://github.com/miguelmateusmf/Github-Battle-Hooks-version",
    },
  ]);

  return (
    <div className="screen mobile">
      <h1 className="title-nomargin title-padding">Projects List</h1>
      {posts.map((post) => (
        <article className="post-entry">
          <div className="post-entry-text">
            <header>
              <h2 className="title-nomargin">{post.title}</h2>
            </header>
            {current === post.id ? (
              <div>
                <p>{post.description}</p>
                <p>Technologies: {post.tech}</p>
                <div className="post-entry-button">
                  <a aria-label="github" href={post.githubLink}>
                    <button className="button-projects">go to github</button>
                  </a>
                  {post.projectLink !== "" ? (
                    <a aria-label="project" href={post.projectLink}>
                      <button className="button-projects">go to project</button>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              <p>{post.description.substring(0, 100)}...</p>
            )}
          </div>
          <div className="post-entry-button">
            {current !== post.id ? (
              <button
                className="button-projects"
                onClick={() => setCurrent(post.id)}
              >
                <img src={ImgDown} alt="down arrow" width="20px"></img>
              </button>
            ) : (
              <button className="button-projects" onClick={() => setCurrent(0)}>
                <img src={ImgUp} alt="down arrow" width="20px"></img>
              </button>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
