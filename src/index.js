import React from "react";
import ReactDOM from "react-dom";
import { CardList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "react-feather";

import "./styles.css";
import test from "./test.json";

function App() {
  console.log("render");
  const doneData = test.filter(x => x.state === "done");
  const ongoingData = test.filter(x => x.state === "ongoing");

  const [ongoing, setOngoing] = React.useState(ongoingData);
  const [done, setDone] = React.useState(doneData);
  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {
    if (searchInput !== "") {
      setOngoing(
        ongoingData.filter(x =>
          x.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
      setDone(
        doneData.filter(x =>
          x.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setOngoing(ongoingData);
      setDone(doneData);
    }
  }, [searchInput, doneData, ongoingData]);

  const onChange = e => {
    setSearchInput(e.target.value);
  };

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

        <Header inputValue={searchInput} onChange={onChange} />
        <CardList data={ongoing} dataLabel={"Ongoing"} />
        <CardList data={done} dataLabel={"Archive"} />
        <Footer />
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
