import React from "react";
import { motion } from "framer-motion";

const container = {
  width: "100%",
  minHeight: 240,
  // background: "white",
  borderRadius: 16,
  // marginBottom: 24,
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  border: "1px solid white",
  boxShadow: "0 0 20px 0 rgba(0, 0, 0, .15)"
};

const wrapper = {
  margin: 24,
  borderRadius: 24
};

const h2Text = {
  color: "black",
  textAlign: "left",
  fontWeight: 600,
  marginBottom: "4px"
};

const subText = {
  color: "black",
  textAlign: "left",
  fontWeight: 400,
  opacity: 0.9,
  fontSize: "0.8em",
  marginBottom: "4px"
};

const descText = {
  color: "blue",
  fontWeight: 600,
  fontSize: "0.6em",
  marginBottom: "4px",

  marginRight: 4,
  display: "inline-block",

  // background: "lightgray",
  paddingTop: 4,
  paddingBottom: 4,
  paddingRight: 8,
  paddingLeft: 8,
  borderRadius: 4,
  border: "1px solid blue"
};

const tagPlace = {
  // position: "absolute",
  textAlign: "left",
  marginTop: 8,
  marginBottom: 8
};

export const Card = ({ title, brand, date, summary, tags, animation }) => {
  return (
    <motion.div
      opacity={0}
      scale={0.8}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      style={container}
      variants={animation}
    >
      <div style={wrapper}>
        <h3 style={subText}>
          {brand} — {date}
        </h3>

        <h2 style={h2Text}>{title}</h2>
        <ul style={tagPlace}>
          {tags.map((tag, i) => {
            return (
              <li key={i} style={descText}>
                {tag}
              </li>
            );
          })}
        </ul>
        <p style={{ lineHeight: "1.3em" }}>{summary}</p>
      </div>
      <div
        style={{
          // display: "block",
          position: "absolute",
          marginLeft: 24,
          marginRight: 24,
          // marginBottom: 24,
          bottom: 0
        }}
      />
    </motion.div>
  );
};
