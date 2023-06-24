import "./App.css";
import { useData } from "./contexts/DataContext";

function App() {
  const { data } = useData();
  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default App;
