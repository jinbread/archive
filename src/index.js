import React from "react";
import ReactDOM from "react-dom";
import { CardList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "react-feather";

import "./styles.css";
import test from "./test.json";

const setData = (dataset, input) => {
  return dataset.filter(x =>
    x.title.toLowerCase().includes(input.toLowerCase())
  );
};

function App() {
  const doneData = test.filter(x => x.state === "done");
  const ongoingData = test.filter(x => x.state === "ongoing");

  const [searchInput, setSearchInput] = React.useState("");

  const done = React.useMemo(() => setData(doneData, searchInput), [
    doneData,
    searchInput
  ]);

  console.log(done);

  const ongoing = React.useMemo(() => setData(ongoingData, searchInput), [
    ongoingData,
    searchInput
  ]);

  // const [ongoing, setOngoing] = React.useState(ongoingData);
  // const [done, setDone] = React.useState(doneData);

  // React.useEffect(() => {
  //   if (searchInput !== "") {
  //     setOngoing(
  //       ongoingData.filter(x =>
  //         x.title.toLowerCase().includes(searchInput.toLowerCase())
  //       )
  //     );
  //     setDone(
  //       doneData.filter(x =>
  //         x.title.toLowerCase().includes(searchInput.toLowerCase())
  //       )
  //     );
  //   }
  // }, [searchInput, doneData, ongoingData]);

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
