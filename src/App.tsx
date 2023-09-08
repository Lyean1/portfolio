import ReactDOM from "react-dom";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>My Portfolio</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));