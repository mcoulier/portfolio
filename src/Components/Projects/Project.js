import React from "react";
import "../../App.css";

export default function Project({ title, url, image }) {
  return (
    <div className="project">
      <h2 className="projectTitle">{title}</h2>
      <a href={url} target="_blank" rel="noreferrer">
        <img
          className="projectImage"
          src={image}
          alt="projectImage"
          width={200}
          height={140}
        />
      </a>
    </div>
  );
}
