import React from "react";
import { motion } from "framer-motion";

export const Header = ({ inputValue, onChange }) => {
  return (
    <section className="content-wrapper">
      <div style={{ position: "sticky", top: 24, verticalAlign: "middle" }}>
        <h2 style={{ display: "inline-block" }}>Work Archive</h2>
        {/* <p>Jinjae Lee is a </p> */}
        {/* <ul style={{ display: "inline-block", listStyle: "none" }}>
          <li>About</li>
          <li>Play</li>
          <li>Contact</li>
        </ul> */}
      </div>

      {/* <p className="search-container">
        {window.innerWidth > 640 ? "인터랙션 디자인 / UX 디자인 " : "디자인 "} /
        프로토타이핑 / 프레이머 X /{" "}
        {window.innerWidth > 640 ? "리액트 / 자바스크립트 / 아두이노 " : "코딩"}{" "}
        / 브랜드 전략 / 워크숍 / 글쓰기
        {window.innerWidth > 640 && " / 세미나 / 커뮤니티"}
      </p> */}
      <p className="search-container">
        Jinjae Lee is a multi-disciplinary interaction designer at{" "}
        <a href="https://www.hyundai.com/worldwide/en">Hyundai Motors</a>,
        connecting physical and digital experiences for humanized future
        systems, previously at <a href="https://www.above.se">Above</a>, {""}
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
