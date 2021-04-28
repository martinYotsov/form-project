import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import Votes from "./pages/Votes";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/votes/:url" component={Votes} />
                <Route path="/vote/:url" component={Vote} />
            </Switch>
        </Router>
    );
}

export default App;
