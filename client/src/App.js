  
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import LeftBar from "./components/leftbar/Leftbar"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Land from "./pages/LandPage/Land"
import Editor from "./pages/Editor/Editor"
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import { Redirect } from "react-router-dom"

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
        <Redirect exact from="/" to="/land" />
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/land"><Land /></Route>
        <Route path="/home">{user ? <Home /> : <Home />}</Route>
        <Route path="/editor"> <Editor /></Route>

        

        <Route path="/post/:postId">
          <Single />
        </Route>

        <Route path="/card/:cardId">
          <Land />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;