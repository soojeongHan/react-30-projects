import React from "react";
import "./style.css";

const Index = () => {
  const [className, setClassName] = React.useState({
    openName: null,
    openActiveName: null,
  });
  const { openName, openActiveName } = className;

  const handleClick = (e) => {
    const openName = Array.from(
      e.target.tagName === "P"
        ? e.target.parentNode.classList
        : e.target.classList
    ).pop();
    setClassName({
      openName,
      openActiveName: null,
    });
  };

  const handleTransitionEnd = (e) => {
    if (e.propertyName.includes("flex")) {
      const openActiveName = Array.from(e.target.classList)[1];
      if (openName === openActiveName) {
        setClassName((preState) => ({
          ...preState,
          openActiveName,
        }));
      }
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
      {contents.map((pContent, panelIndex) => {
        const index = panelIndex + 1;
        return (
          <div
            key={index}
            className={`panel panel${index} ${
              openName === `panel${index}`
                ? openActiveName === `panel${index}`
                  ? "open open-active"
                  : "open"
                : ""
            }`}
            onClick={(e) => handleClick(e)}
            onTransitionEnd={(e) => handleTransitionEnd(e)}
          >
            {pContent.map((p, pIndex) => (
              <p key={pIndex}>{p}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Index;
