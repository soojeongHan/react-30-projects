import React from "react";
import List from "./List";
import "./style.css";

const Index = () => {
  React.useLayoutEffect(() => {
    const url =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
      (async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCities(data);
      })();
  }, []);
  const [cities, setCities] = React.useState();

  return (
    <div className="type-ahead">
      <form className="search-form">
        <List cities={cities} setCities={setCities}/>
      </form>
    </div>
  );
};

export default Index;
