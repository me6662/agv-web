import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import StatusComponent from "./status/index.js";
import SettingsComponent from "./settings/index.js";

function App() {
  return (
    <div>
      <div id="header">
        <span>AGV System Demo</span>
      </div>
      <div id="body">
        <div id="left">
          <Link className="left-link" to={"/"}>
            <div className="left-item">
              <img src="/images/pie-chart.png" />
              <span>Status</span>
            </div>
          </Link>
          <Link className="left-link" to={"/settings"}>
            <div className="left-item">
              <img src="/images/gear.png" />
              <span>Settings</span>
            </div>
          </Link>
        </div>
        <div id="page">
          <Switch>
            <Route exact={true} path="/">
              <StatusComponent />
            </Route>
            <Route exact={true} path="/settings">
              <SettingsComponent />
            </Route>
          </Switch>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
