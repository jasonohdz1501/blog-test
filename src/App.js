import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BlogDetail } from "./components/BlogDetail";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NewBlog } from "./components/NewBlog";
import { NotFound } from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={NewBlog} />
          <Route path="/blogs/:id" component={BlogDetail} />
          <Route path="/:path" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
