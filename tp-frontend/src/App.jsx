import "./App.css";
import MainRouter from "./Router/MainRouter";

function App(props) {
  return (
    <div className="App">
      <MainRouter props={props}/>
    </div>
  );
}

export default App;
