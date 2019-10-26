import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./components/Card";
import { motion } from "framer-motion";

import "./styles.css";

const ongoing = [
  {
    title: "Brand Strategy & Copywriting",
    tags: ["Branding", "Strategy", "Copywriting"],
    date: "2019.11",
    brand: "Duotone"
  },
  {
    title: "Inspiration — Spectrum Day",
    tags: ["Design Community", "Staffing"],
    date: "2019.11",
    brand: "Design Spectrum"
  },
  {
    title: "AI Trip Guide",
    tags: ["Product Design", "UX Design"],
    date: "2019.12",
    brand: "Data Labs"
  },
  {
    title: "Year-end Workshop 2019",
    tags: ["Workshop", "Facilitation"],
    date: "2019.12",
    brand: "Jinbread Works"
  }
];

const archive = [
  {
    title: "Machine Learning for designers",
    tags: ["Workshop", "AI", "Prototyping", "ML", "Arduino", "Processing"],
    date: "2019.10",
    brand: "Hongik University"
  },
  {
    title: "What's Next?",
    tags: ["Talks", "Seminar"],
    date: "2019.07",
    brand: "Startup Alliance"
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
    brand: "Dell"
  },
  {
    title: "Hangul in Motion",
    tags: ["Interaction Design", "Frontend Development", "Javascript"],
    date: "2019.10",
    brand: "Project HIUT"
  },
  {
    title: "Future of the TV",
    brand: "Huawei",
    tags: ["UI Design", "Interaction Design", "Prototyping"],
    date: "2019.03"
  },
  {
    title: "Year-end Workshop 2018",
    tags: ["Workshop", "Facilitation"],
    date: "2018.12",
    brand: "Jinbread Works"
  },
  {
    title: "Home Wellbeing Experience",
    brand: "Electrolux",
    tags: ["UX Design", "Interaction Design", "Prototyping"],
    date: "2018.12"
  },
  {
    title: "Host IxDA Stockholm events",
    brand: "IxDA Stockholm",
    tags: ["Design Community", "Staffing", "Photography"],
    date: "2018"
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
    brand: "Blueair"
  },

  {
    title: "Hyundai WRC VR Real Play",
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
      "This was first ever virtual reality contents for automotive industry."
  }
];

const gridStyle = {
  marginTop: 24,
  marginBottom: 24,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "960px",
  display: "grid",
  gridGap: 24,
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))"
};

function App() {
  const list = {
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    hidden: { opacity: 0 }
  };

  const items = {
    visible: { opacity: 1, y: 0, scale: 1 },
    hidden: { opacity: 0, y: 30, scale: 0.9 }
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
          <h1>Jinbread works </h1>
          <h2 style={{ display: "inline" }}>Work Archive</h2>
          {/* <form style={{ display: "inline" }}>
            <input />
          </form> */}
        </section>
        <section style={{ marginBottom: 48, marginLeft: 24, marginRight: 24 }}>
          <h2>— Ongoing</h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            style={gridStyle}
          >
            {ongoing.map((project, i) => {
              return (
                <motion.div
                  variants={items}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 0.95 }}
                >
                  <Card
                    title={project.title}
                    tags={project.tags}
                    date={project.date}
                    brand={project.brand}
                    summary={project.summary}
                    key={i}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <section style={{ marginBottom: 48, marginLeft: 24, marginRight: 24 }}>
          <h2>— Done</h2>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            style={gridStyle}
          >
            {archive.map((project, i) => {
              return (
                <motion.div
                  variants={items}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 0.95 }}
                >
                  <Card
                    title={project.title}
                    tags={project.tags}
                    date={project.date}
                    brand={project.brand}
                    summary={project.summary}
                    key={i}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </section>
      <footer style={{ textAlign: "center", height: 120 }}>
        <p />
        <p style={{ fontSize: "0.8em", fontWeight: 500, opacity: 0.4 }}>
          2019, Jinjae Lee
        </p>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
