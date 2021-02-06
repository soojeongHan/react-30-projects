import React from "react";
import photo from "./photo.png";
import "./style.css";

const Index = () => {
  const [value, setValue] = React.useState({
    spacing: 10,
    blur: 5,
    color: "#ffc600",
  });

  const handleChanging = (e) => {
    setValue((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="css-variables">
      <h2>
        Update CSS Variables with
        <span
          className="h1"
          style={{ color: value.color, paddingLeft: "15px" }}
        >
          JS
        </span>
      </h2>
      <div className="controls">
        <label>Spacing:</label>
        <input
          type="range"
          name="spacing"
          min="10"
          max="200"
          value={value.spacing}
          onChange={(e) => handleChanging(e)}
          onMouseMove={(e) => handleChanging(e)}
        />

        <label>Blur:</label>
        <input
          type="range"
          name="blur"
          min="0"
          max="25"
          value={value.blur}
          onChange={(e) => handleChanging(e)}
          onMouseMove={(e) => handleChanging(e)}
        />

        <label>Base Color</label>
        <input
          type="color"
          name="color"
          value={value.color}
          onChange={(e) => handleChanging(e)}
          onMouseMove={(e) => handleChanging(e)}
        />
      </div>
      <div className="image">
        <img
          src={photo}
          alt="images"
          style={{
            padding: `${value.spacing}px`,
            filter: `blur(${value.blur}px)`,
            backgroundColor: value.color,
          }}
        />
      </div>
    </div>
  );
};

export default Index;
