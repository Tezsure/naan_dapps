import "./App.css";
import Dapp from "./Components/Dapp";
import { dapps } from "./data/dapps";

function App() {
  return (
    <div className="App">
      {dapps.map((dapp) => {
        return <Dapp dapp={dapp} />;
      })}
      ;
    </div>
  );
}

export default App;
