import React from "react";
import "./App.css";

const App = () => {
  const [state, setState] = React.useState({
    Index: null,
  });
  const { Index } = state;

  const onClick = (e) => {
    import(`./projects/${e.target.value}/Index.js`).then(
      // resolve
      ({ default: Index }) => {
        setState({ Index });
      },
      // reject
      () => {
        alert("아직 없는 프로젝트입니다..");
      }
    );
  };

  return (
    <React.Fragment>
      <header>
        <h1>Javascript-30-Projects</h1>
        <div className="project-list">
          {new Array(30).fill(0).map((_, i) => (
            <button key={i} onClick={(e) => onClick(e)} value={i + 1}>
              {i + 1}
            </button>
          ))}
        </div>
      </header>
      <main>{Index && <Index />}</main>
    </React.Fragment>
  );
};

export default App;
