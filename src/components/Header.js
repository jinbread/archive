import React from "react";

export const Header = ({ inputValue, onChange }) => {
  return (
    <section className="content-wrapper">
      <div style={{ position: "sticky", top: 24, verticalAlign: "middle" }}>
        <h2 style={{ display: "inline-block" }}>Work Archive</h2>
      </div>

      <p className="search-container">
        Jinjae Lee is a UX / Interaction Designer at{" "}
        <a href="https://www.hyundai.com/worldwide/en">Hyundai Motors</a>,
        connecting physical and digital to humanize technology, previously at{" "}
        <a href="https://www.above.se">Above</a>,{" "}
        <a href="https://www.hyperisland.com/">Hyper Island</a>, and {""}
        <a href="http://www.innocean.com/">Innocean</a>.
      </p>
      <div style={{ width: "100%" }}>
        <form>
          <input
            // type="search"
            // id="search"
            placeholder="filter"
            className="search-input"
            value={inputValue}
            onChange={onChange}
          />
        </form>
      </div>
    </section>
  );
};
