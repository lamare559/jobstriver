import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feedback from "./Components/Pages/Feedback";
import Home from "./Components/Pages/Home";
import JobseekerRegister from "./Components/Pages/Jobseeker/JobseekerRegister";
import JobseekerSignin from "./Components/Pages/Jobseeker/JobseekerSignin";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/register" component={JobseekerRegister} />
          <Route path="/login" component={JobseekerSignin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
