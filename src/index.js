import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./components/Card";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faBehance,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const archive = [
  {
    title: "Machine Learning for designers",
    tags: ["Workshop", "AI/ML", "Prototyping"],
    date: "2019.10",
    brand: "Hongik University",
    summary:
      "간단한 프로토타입을 함께 만들어보면서 머신러닝의 기본 개념을 이해하고, 실제 프로젝트에서 활용 가능한 프로토타입을 제작하기 위한 기초 스킬을 쌓을 수 있는 워크숍이다.",
    like: 0
  },
  {
    title: "What's Next?",
    tags: ["Talks", "Seminar"],
    date: "2019.07",
    brand: "Startup Alliance",
    like: 0
  },
  {
    title: "Future of the experiences around PC",
    tags: [
      "Interaction Design",
      "Prototyping",
      "React",
      "Framer X",
      "UX Engineering"
    ],
    date: "2019.07",
    brand: "Dell",
    like: 0
  },
  {
    title: "Hangul in Motion",
    tags: ["Interaction Design", "Frontend Development", "Javascript"],
    date: "2019.10",
    brand: "Project HIUT",
    like: 0
  },
  {
    title: "Future of the TV",
    brand: "Huawei",
    tags: ["UI Design", "Interaction Design", "Prototyping"],
    date: "2019.03",
    like: 0
  },
  {
    title: "Year-end Workshop 2018",
    tags: ["Workshop", "Facilitation"],
    date: "2018.12",
    brand: "Jinbread Works",
    like: 0
  },
  {
    title: "Home Wellbeing Experience",
    brand: "Electrolux",
    tags: ["UX Design", "Interaction Design", "Prototyping"],
    date: "2018.12",
    like: 0
  },
  {
    title: "IxDA Stockholm",
    brand: "IxDA Stockholm",
    tags: ["Community", "Photography"],
    date: "2018",
    like: 0
  },
  {
    title: "Air Monitoring Product Design",
    tags: [
      "UX Design",
      "Interaction Design",
      "Prototyping",
      "Connected Product"
    ],
    date: "2018.07",
    brand: "Blueair",
    like: 0
  },

  {
    title: "Hyundai WRC Real Play",
    tags: [
      "VR",
      "Digital Strategy",
      "UX Design",
      "Content Production",
      "Mobile",
      "Hardware"
    ],
    date: "2015",
    brand: "Hyundai Motorsport",
    summary:
      "This was first ever virtual reality contents for automotive industry.",
    like: 0
  }
];

const gridStyle = {
  marginTop: 24,
  marginBottom: 24,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "960px",
  display: "grid",
  gridGap: 32,
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))"
};

function App() {
  const [ongoing, setOngoing] = React.useState([
    {
      title:
        "How to cope with the future as an Industrial Designer — Spectrum Day #14",
      tags: ["Community", "Visual Design"],
      date: "2019.11",
      brand: "Design Spectrum",
      like: 0
    },
    {
      title: "Brand Strategy & Copywriting",
      tags: ["Branding", "Strategy", "Copywriting"],
      date: "2019.11",
      brand: "Duotone",
      like: 0
    },
    {
      title: "Inspiration — Spectrum Day #13",
      tags: ["Community"],
      date: "2019.11",
      brand: "Design Spectrum",
      like: 0
    },
    {
      title: "AI Trip Guide",
      tags: ["Product Design", "UX Design"],
      date: "2019.12",
      brand: "Data Labs",
      like: 0
    },
    {
      title: "Year-end Workshop 2019",
      tags: ["Workshop", "Facilitation"],
      date: "2019.12",
      brand: "Jinbread Works",
      like: 0
    }
  ]);

  const list = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    hidden: { opacity: 0 }
  };

  const items = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeInOut" }
    },
    hidden: { opacity: 0, y: 60 }
  };

  const onTap = e => {
    console.log(e);
  };

  return (
    <div className="App">
      {/* <section
        style={{
          position: "sticky",
          height: 64,
          boxShadow: "0 0 20px 0 rgba(0, 0, 0, .25)"
        }}
      >
        Header
      </section> */}
      <section
        style={{
          marginTop: 24,
          maxWidth: 960,
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <section style={{ marginBottom: 48, marginLeft: 24, marginRight: 24 }}>
          <div style={{ position: "sticky", top: 24 }}>
            <h1>Jinbread works </h1>
            <h2>Work Archive</h2>
          </div>
          <p
            style={{
              marginTop: 16,
              fontSize: "2.4em",
              fontFamily: "GmarketSans",
              lineHeight: "1.4em",
              // opacity: 0.2,
              fontWeight: 600,
              opacity: 0.2,
              color: "black"
            }}
          >
            {window.innerWidth > 640
              ? "인터랙션 디자인 / UX 디자인 "
              : "디자인 "}{" "}
            / 프로토타이핑 / 프레이머 X /{" "}
            {window.innerWidth > 640
              ? "리액트 / 자바스크립트 / 아두이노 "
              : "코딩"}{" "}
            / 브랜드 전략 / 워크숍 / 글
            {window.innerWidth > 640 && " / 세미나 / 커뮤니티"}
          </p>
          <form>
            <input
              type="search"
              id="search"
              placeholder="filter"
              style={{
                marginTop: 24,
                background: "#f7f7f7",
                WebkitAppearance: "none",
                height: 56,
                borderRadius: 4,
                display: "block",
                width: "100%",
                fontSize: "1.2em",
                paddingLeft: 16,
                border: "none"
              }}
            />
          </form>
          {/* <form style={{ display: "inline" }}>
            <input />
          </form> */}
        </section>

        <section style={{ marginBottom: 48, marginLeft: 24, marginRight: 24 }}>
          <h2 style={{ position: "sticky", top: 24 }}>— Ongoing</h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            style={gridStyle}
          >
            {ongoing.map((project, i) => {
              return (
                <motion.div variants={items}>
                  <Card
                    title={project.title}
                    tags={project.tags}
                    date={project.date}
                    brand={project.brand}
                    summary={project.summary}
                    key={i}
                    count={project.like}
                    onTap={onTap}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <section style={{ marginBottom: 48, marginLeft: 24, marginRight: 24 }}>
          <h2 style={{ position: "sticky", top: 24 }}>— Done</h2>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            style={gridStyle}
          >
            {archive.map((project, i) => {
              return (
                <motion.div variants={items}>
                  <Card
                    title={project.title}
                    tags={project.tags}
                    date={project.date}
                    brand={project.brand}
                    summary={project.summary}
                    key={i}
                    count={project.like}
                    onTap={onTap}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </section>
      <footer style={{ textAlign: "center", height: 120 }}>
        <p
          style={{
            fontSize: "1.5em",
            fontWeight: 500,
            opacity: 0.8
            // marginTop: 8
          }}
        >
          <a href="#" style={{ margin: 8 }}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" style={{ margin: 8 }}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="#" style={{ margin: 8 }}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" style={{ margin: 8 }}>
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </p>
        <p
          style={{
            fontSize: "0.8em",
            fontWeight: 500,
            opacity: 0.4,
            marginTop: 16
          }}
        >
          2019, Jinjae Lee
        </p>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
