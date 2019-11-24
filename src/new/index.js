import React from "react";
import ReactDOM from "react-dom";
import GGEditor, { Mind } from "gg-editor";
import Save from "./components/Save";

import "./styles.css";

const data = {
  roots: [
    {
      label: "中心主题",
      children: [
        {
          label: "分支主题 1"
        },
        {
          label: "分支主题 2"
        },
        {
          label: "分支主题 3"
        }
      ]
    }
  ]
};

function App() {
  return (
    <GGEditor className="editor">
      <Save />
      <Mind className="mind" data={data} />
    </GGEditor>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
