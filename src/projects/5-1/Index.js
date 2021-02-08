import React from "react";
import "./style.css";

const Index = () => {
  const handleClick = (e) => {
    const classList =
      e.target.tagName !== "P"
        ? e.target.classList
        : e.target.parentNode.classList;
    classList.toggle("open");
  };

  const handleTransitionEnd = (e) => {
    if (e.propertyName.includes("flex")) {
      e.target.classList.toggle("open-active");
    }
  };

  const contents = [
    ["Hey", "Let's", "Dance"],
    ["Give", "Take", "Recieve"],
    ["Experience", "It", "Today"],
    ["Give", "All", "You can"],
    ["Life", "In", "Motion"],
  ];

  console.count("rendering");
  return (
    <div className="panels">
      {contents.map((pTagContent, panelIndex) => {
        const index = panelIndex + 1;
        return (
          <div
            key={index}
            className={`panel panel${index}`}
            onClick={(e) => handleClick(e)}
            onTransitionEnd={(e) => handleTransitionEnd(e)}
          >
            {pTagContent.map((p, pIndex) => (
              <p key={pIndex}>{p}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Index;
