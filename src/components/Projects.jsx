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
        "the project is about a lot of stuff this is for testing only",
      projectLink: "project",
      githubLink: "github",
    },
    {
      id: 2,
      title: "NodeJS server",
      description:
        "the project is about a lot of stuff this is for testing only",
      projectLink: "project",
      githubLink: "github",
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
                <div className="post-entry-button">
                  <a aria-label="github" href={post.githubLink}>
                    <button className="button-projects">go to github</button>
                  </a>
                  <a aria-label="project" href={post.projectLink}>
                    <button className="button-projects">go to project</button>
                  </a>
                </div>
              </div>
            ) : (
              <p>{post.description.substring(0, 10)}...</p>
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
