import React from "react";
import ReactDOM from "react-dom";
import { CardList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "react-feather";

import "./styles.css";
import test from "./test.json";

function App() {
  return (
    <div className="App">
      <section className="container">
        <div
          style={{
            position: "sticky",
            top: 26,
            textAlign: "right",
            marginRight: 26,
            zIndex: 20
          }}
        >
          <Menu />
        </div>
        <Header />
        <CardList data={test.ongoing} dataLabel={"Ongoing"} />
        <CardList data={test.done} dataLabel={"Done"} />
        <Footer />
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
