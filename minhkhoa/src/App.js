import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Admin/Login/Login";
import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";



function App() {
  return (

    <BrowserRouter>
      <Loading />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
