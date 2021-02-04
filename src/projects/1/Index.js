import React from "react";
import "./style.css";
import sounds from "./sounds/sounds";

const Index = () => {
  const divRef = React.useRef();
  // 컴포넌트를 로딩하면, 키보드를 바로 눌러도 효과를 낼 수 있게 focus() 처리한다.
  React.useLayoutEffect(() => {
    divRef.current.focus();
  }, []);

  // transition이 끝나면, playing 클래스를 제거한다.
  const removeTranstion = (e) => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  };

  function onKeyDown(e) {
    // drum 클래스의 keys 클래스의 key 값들을 배열로 만들어, e.keyCode값과 dataset의 값이 일치하는 값을 찾아낸다.
    const key = Array.from(divRef.current.firstChild.childNodes).find((v) => {
      return v.dataset.key === String(e.keyCode);
    });
    // key 값이 없으면 return;
    if (!key) return;
    // span tag의 InnerHTML의 값으로 sounds 배열 중 일치하는 값을 찾는다.
    const audio = new Audio(
      sounds.find((v) => {
        return String(v).includes(key.lastChild.innerHTML);
      })
    );
    // audio 값이 없으면 return;
    if (!audio) return;
    // audio를 재생하고, playing 클래스를 추가하여, transition 효과를 낸다.
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
      <div className="keys" onTransitionEnd={removeTranstion}>
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
