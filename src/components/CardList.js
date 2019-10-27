import React from "react";
import { motion } from "framer-motion";
import { Card } from "./Card";

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

export const CardList = ({ data, dataLabel }) => {
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
    <section style={{ marginBottom: 48, marginLeft: 24, marginRight: 24 }}>
      <h2 style={{ position: "sticky", top: 24, zIndex: 11 }}>— {dataLabel}</h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        style={gridStyle}
      >
        {data.map((project, i) => {
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
  );
};
