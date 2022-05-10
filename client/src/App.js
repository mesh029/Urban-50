  
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import NavBar from "./components/topbar/NavBar"
import LeftBar from "./components/leftbar/Leftbar"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Land from "./pages/LandPage/Land"
import Show from "./pages/Chess/Show"
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/Contact/Contact"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import { Redirect } from "react-router-dom"

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar/>
      <NavBar/>
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
        <Route path="/show/chess"> <Show routeName={"chess"}/></Route>
        <Route path="/show/poetry"><Show routeName={"poetry"}/></Route>
        <Route path="/show/anime"><Show routeName={"anime"}/></Route>
        <Route path="/show/travel"><Show routeName={"travel"}/></Route>
        <Route path="/show/basketball"><Show routeName={"basketball"}/></Route>




        <Route path="/contact"> <Contact /></Route>

    

        

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