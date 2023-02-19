import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/happiness">
            <Quotes category={"happiness"} />
          </Route>
          <Route path="/hope">
            <Quotes category={"hope"} />
          </Route>
          <Route path="/funny">
            <Quotes category={"funny"} />
          </Route>
          <Route path="/courage">
            <Quotes category={"courage"} />
          </Route>
          <Route path="/humor">
            <Quotes category={"humor"} />
          </Route>
          <Route path="/life">
            <Quotes category={"life"} />
          </Route>
          <Route path="/health">
            <Quotes category={"health"} />
          </Route>
          <Route path="/morning">
            <Quotes category={"morning"} />
          </Route>
          <Route path="/inspirational">
            <Quotes category={"inspirational"} />
          </Route>
          <Route path="/">
            <Quotes category={"happiness"} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
