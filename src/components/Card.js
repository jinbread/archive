import React from "react";
import { motion } from "framer-motion";
import { Heart } from "react-feather";

const container = {
  width: "100%",
  minHeight: 240,
  borderRadius: 12,
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  border: "none",
  boxShadow: "0 0 20px 0 rgba(0, 0, 0, .15)",
  background: "linear-gradient(45deg, #bb66cc 0%, #55ccff 100%)",
  backgroundRepeat: "no-repeat"
};

const wrapper = {
  padding: 24,
  borderRadius: 24
};

const h2Text = {
  color: "white",
  textAlign: "left",
  fontWeight: 600,
  marginBottom: "4px"
};

const subText = {
  color: "white",
  textAlign: "left",
  fontWeight: 400,
  opacity: 0.7,
  fontSize: "0.8em",
  marginBottom: "4px"
};

const descText = {
  color: "white",
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
  border: "1px solid white"
};

const tagPlace = {
  // position: "absolute",
  textAlign: "left",
  marginTop: 8,
  marginBottom: 8
};

export const Card = ({ title, brand, date, summary, tags, onTap, count }) => {
  return (
    <motion.div opacity={0} style={container} whileHover={{ scale: 0.95 }}>
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
      </div>
      <div
        style={{
          position: "absolute",
          marginLeft: 24,
          marginRight: 24,
          bottom: 0
        }}
      />
      <div style={{ position: "absolute", bottom: 24, right: 24 }}>
        <motion.div onTap={onTap} whileTap={{ scale: 0.8 }}>
          <Heart color={"white"} />
        </motion.div>
        <p style={{ textAlign: "center", fontSize: "0.8em", color: "white" }}>
          {count}
        </p>
      </div>
    </motion.div>
  );
};
