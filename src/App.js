import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/landing"

const App  = () => (
    <Router>
        <div>
            <Route path="/" exact component={Landing} />
            {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
        </div>
    </Router>
)
  
export default App;