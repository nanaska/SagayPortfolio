import "../src/App.css";
import "../src/components/Menu.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/pages/HomePage/Home";
import Dome from "../src/pages/Home";
import Menubarnoe from "./components/Menubarnoe";
import Card from "./pages/Card";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Dome} />
          <Route path="/card" component={Card} />
          <Route path="/menubarnoe" component={Menubarnoe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
