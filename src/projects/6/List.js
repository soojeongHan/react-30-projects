import React from "react";

const List = ({ cities }) => {
  const [value, setValue] = React.useState([]);
  const onChange = (e) => {
    const regex = new RegExp(e.target.value, "gi");
    const citiesArr = [...cities]
      .filter((c) => regex.test(c.city) || regex.test(c.state))
      .sort((i,j) => j.population - i.population)
      .slice(0, 10)
      .map((c) => {
        const population = c.population
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return {
          city: c.city,
          state: c.state,
          population,
        };
      });
    setValue(citiesArr);
  };
  return (
    <React.Fragment>
      <input
        type="text"
        className="search"
        placeholder="City or State"
        onChange={(e) => onChange(e)}
      />
      <ul className="suggestions">
        {value.map((c, i) => {
          const { city, state, population } = c;
          return (
            <li key={i}>
              <span className="name">
                {city}, {state}
              </span>
              <span className="population">{population}</span>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;
