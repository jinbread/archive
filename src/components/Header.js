import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <section className="content-wrapper" style={{ height: "50vh" }}>
      <div style={{ position: "sticky", top: 24, verticalAlign: "middle" }}>
        <h2>Work Archive</h2>
      </div>

      <p className="search-container">
        {window.innerWidth > 640 ? "인터랙션 디자인 / UX 디자인 " : "디자인 "} /
        프로토타이핑 / 프레이머 X /{" "}
        {window.innerWidth > 640 ? "리액트 / 자바스크립트 / 아두이노 " : "코딩"}{" "}
        / 브랜드 전략 / 워크숍 / 글쓰기
        {window.innerWidth > 640 && " / 세미나 / 커뮤니티"}
      </p>
      <form>
        <input
          type="search"
          id="search"
          placeholder="filter"
          className="search-input"
        />
      </form>
    </section>
  );
};
