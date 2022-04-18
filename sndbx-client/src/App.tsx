import React from "react";
import "./App.css";
import { TextField } from "./components/TextField";
import FartScroll from "react-fartscroll";
import NewPost from "./pages/NewPost";

const App: React.FC = () => {
  return (
    <div>
      <div className="box">
        <div>
          <TextField text="yoo" ok={true} />
          <NewPost />
        </div>
      </div>
    </div>
  );
};

export default App;
