import React from "react";
import "./style.css";
import sounds from "./sounds/sounds";

const Index = () => {
  const divRef = React.useRef();
  React.useLayoutEffect(() => {
    divRef.current.focus();
    const keys = Array.from(document.querySelectorAll(".keys > .key"));
    keys.forEach((key) =>
      key.addEventListener("transitionend", removeTranstion)
    );
  }, []);
  const removeTranstion = (e) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  };
  function onKeyDown(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    const audio = new Audio(
      sounds.find((v) => {
        return String(v).includes(key.querySelector(".sound").innerHTML);
      })
    );
    if (!audio) return;
    audio.play();
    key.classList.add("playing");
  }

  return (
    <div
      className="drum"
      onKeyDown={(e) => onKeyDown(e)}
      tabIndex="0"
      ref={divRef}
    >
      <div className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
