import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer style={{ textAlign: "center", height: 120 }}>
      <p
        style={{
          fontSize: "1.5em",
          fontWeight: 500,
          opacity: 0.8
        }}
      >
        <a href="https://twitter.com/jinbreadlee" style={{ margin: 8 }}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com/jinbread" style={{ margin: 8 }}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a href="https://linkedin.com/in/jinbread" style={{ margin: 8 }}>
          <FontAwesomeIcon icon={faLinkedin} />
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
  );
};
