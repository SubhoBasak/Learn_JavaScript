import "./App.css";
import Hierarchical from "./layouts/Hierarchical";
import data from "./data.json";

function App() {
  return (
    <div className="canvas">
      <Hierarchical data={data} />
    </div>
  );
}

export default App;
